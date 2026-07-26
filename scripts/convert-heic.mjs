import fs from "fs";
import path from "path";
import convert from "heic-convert";

const dir = process.argv[2] || ".";

async function main() {
  const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".heic"));

  if (files.length === 0) {
    console.log("No HEIC files found.");
    return;
  }

  for (const file of files) {
    const input = path.join(dir, file);
    const output = path.join(dir, file.replace(/\.HEIC$/i, ".png"));
    try {
      const inputBuffer = fs.readFileSync(input);
      const outputBuffer = await convert({
        buffer: inputBuffer,
        format: "PNG",
        quality: 0.9,
      });
      fs.writeFileSync(output, outputBuffer);
      console.log(`Converted: ${file} -> ${path.basename(output)}`);
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err.message);
    }
  }
}

main();
