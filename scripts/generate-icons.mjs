// One-off script — sharp/to-ico are not project dependencies.
// Run with: npm install --no-save sharp to-ico && node scripts/generate-icons.mjs
import sharp from "sharp";
import toIco from "to-ico";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const svgPath = path.join(root, "src/assets/clareira-simbolo.svg");
const publicDir = path.join(root, "public");
const iconsDir = path.join(publicDir, "icons");

const BG = "#F3F1EB";
const svgBuffer = readFileSync(svgPath);

async function renderPng(size) {
  return sharp(svgBuffer, { density: 384 })
    .resize(size, size, { fit: "contain", background: BG })
    .flatten({ background: BG })
    .png()
    .toBuffer();
}

const apple = await renderPng(180);
writeFileSync(path.join(iconsDir, "apple-touch-icon.png"), apple);
console.log("wrote apple-touch-icon.png", apple.length, "bytes");

const icon192 = await renderPng(192);
writeFileSync(path.join(iconsDir, "icon-192.png"), icon192);
console.log("wrote icon-192.png", icon192.length, "bytes");

const icon512 = await renderPng(512);
writeFileSync(path.join(iconsDir, "icon-512.png"), icon512);
console.log("wrote icon-512.png", icon512.length, "bytes");

const icoSizes = [16, 32, 48, 256];
const icoPngs = [];
for (const size of icoSizes) {
  icoPngs.push(await renderPng(size));
}
const icoBuffer = await toIco(icoPngs);
writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
console.log("wrote favicon.ico", icoBuffer.length, "bytes");
