import fs from "fs";
import path from "path";
import sharp from "sharp";

const dir = process.argv[2] || "./public/images";
const outputDir = path.join(dir, "optimized");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function optimize() {
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g)$/i.test(f) && !f.includes("optimized"));

  for (const file of files) {
    const input = path.join(dir, file);
    const baseName = path.basename(file, path.extname(file));
    const output = path.join(outputDir, `${baseName}.jpg`);
    const thumb = path.join(outputDir, `${baseName}-thumb.jpg`);

    try {
      const image = sharp(input);
      const meta = await image.metadata();

      // Web version: max 1920px width, 80% quality JPEG
      await image
        .resize({ width: 1920, withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(output);

      // Thumbnail: max 600px width
      await sharp(input)
        .resize({ width: 600, withoutEnlargement: true })
        .jpeg({ quality: 70, progressive: true })
        .toFile(thumb);

      console.log(
        `Optimized: ${file} (${meta.width}x${meta.height}) -> ${path.basename(output)}, ${path.basename(thumb)}`,
      );
    } catch (err) {
      console.error(`Failed to optimize ${file}:`, err.message);
    }
  }
}

optimize();
