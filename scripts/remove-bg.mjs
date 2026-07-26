import sharp from "sharp";
import path from "path";
import fs from "fs";

const inputFile = process.argv[2];
if (!inputFile) {
  console.error("Usage: node scripts/remove-bg.mjs <input.png>");
  process.exit(1);
}

const input = path.resolve(inputFile);
const ext = path.extname(input);
const output = input.replace(ext, "-transparente.png");

async function removeBackground() {
  if (!fs.existsSync(input)) {
    throw new Error(`File not found: ${input}`);
  }

  const image = sharp(input);
  const { width, height } = await image.metadata();

  if (!width || !height) throw new Error("Could not read image dimensions");

  // Crop empty vertical space (top and bottom) — keep middle horizontal band
  const cropTop = Math.round(height * 0.32);
  const cropHeight = Math.round(height * 0.36);
  const cropped = image.extract({
    left: 0,
    top: cropTop,
    width: width,
    height: cropHeight,
  });

  const { data, info } = await cropped.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

  const pixels = data;
  const channels = info.channels;
  const w = info.width;
  const h = info.height;

  const bgR = pixels[0];
  const bgG = pixels[1];
  const bgB = pixels[2];

  const tolerance = 35;
  const smoothRange = 25;

  // Remove background by turning matching pixels transparent
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * channels;
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      const distance = Math.sqrt(
        Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2),
      );

      if (distance <= tolerance) {
        pixels[i + 3] = 0;
      } else if (distance <= tolerance + smoothRange) {
        const alpha = Math.max(0, Math.min(255, ((distance - tolerance) / smoothRange) * 255));
        pixels[i + 3] = Math.round(alpha);
      }
    }
  }

  // Find bounding box of opaque/visible pixels only
  let minX = w;
  let maxX = 0;
  let minY = h;
  let maxY = 0;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * channels;
      const a = pixels[i + 3];

      if (a > 10) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    }
  }

  if (minX > maxX || minY > maxY) {
    throw new Error("No visible content found after background removal");
  }

  // Add tiny padding to avoid cutting edges
  const padding = 2;
  minX = Math.max(0, minX - padding);
  maxX = Math.min(w - 1, maxX + padding);
  minY = Math.max(0, minY - padding);
  maxY = Math.min(h - 1, maxY + padding);

  const cropWidth = maxX - minX + 1;
  const cropHeightFinal = maxY - minY + 1;

  await sharp(pixels, {
    raw: { width: w, height: h, channels },
  })
    .extract({ left: minX, top: minY, width: cropWidth, height: cropHeightFinal })
    .png()
    .toFile(output);

  console.log(`Transparent cropped logo saved to ${output}`);
  console.log(`Cropped from ${w}x${h} to ${cropWidth}x${cropHeightFinal}`);
  console.log(`Removed left margin: ${minX}px, right margin: ${w - maxX - 1}px`);
}

removeBackground().catch((err) => {
  console.error(err);
  process.exit(1);
});
