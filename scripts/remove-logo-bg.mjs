import sharp from "sharp";
import path from "path";

const input = path.resolve("public/logo-definitiva.png");
const output = path.resolve("public/logo-transparente.png");

async function removeBackground() {
  const image = sharp(input);
  const { width, height } = await image.metadata();

  if (!width || !height) throw new Error("Could not read image dimensions");

  const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

  const pixels = data;
  const channels = info.channels;

  // Sample background color from top-left corner
  const bgR = pixels[0];
  const bgG = pixels[1];
  const bgB = pixels[2];

  // Tolerance for matching background blue
  const tolerance = 45;
  const smoothRange = 30; // range for partial transparency

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    const distance = Math.sqrt(Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2));

    if (distance <= tolerance) {
      pixels[i + 3] = 0;
    } else if (distance <= tolerance + smoothRange) {
      const alpha = Math.max(0, Math.min(255, ((distance - tolerance) / smoothRange) * 255));
      pixels[i + 3] = Math.round(alpha);
    }
  }

  await sharp(pixels, {
    raw: { width, height, channels },
  })
    .png()
    .toFile(output);

  console.log(`Transparent logo saved to ${output}`);
}

removeBackground().catch((err) => {
  console.error(err);
  process.exit(1);
});
