// news-image-20261123 entry program (Node 22, standard library only).
// Copies poster.png to $MAKEFUN_OUTPUT_DIR/entry.png and verifies the output.
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

// Clear only the contents of the output dir — never remove the dir itself.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

const src = new URL("./poster.png", import.meta.url).pathname;
const dest = join(outDir, "entry.png");

// Verify the source poster itself before copying: same PNG signature and
// dimensions as the output must have, so a bad source fails fast here.
const srcBuf = readFileSync(src);
if (srcBuf.length < 8 || srcBuf[0] !== 0x89 || srcBuf[1] !== 0x50 || srcBuf[2] !== 0x4e || srcBuf[3] !== 0x47) {
  console.error("poster.png is not a PNG");
  process.exit(1);
}
if (srcBuf.readUInt32BE(16) !== 1024 || srcBuf.readUInt32BE(20) !== 576) {
  console.error(`poster.png is ${srcBuf.readUInt32BE(16)}x${srcBuf.readUInt32BE(20)}, expected 1024x576`);
  process.exit(1);
}
if (srcBuf.length > 1048576) {
  console.error(`poster.png is ${srcBuf.length} bytes, over the 1 MiB limit`);
  process.exit(1);
}
copyFileSync(src, dest);

// The copy must be byte-identical to the verified source poster.
const buf = readFileSync(dest);
if (!buf.equals(srcBuf)) {
  console.error("entry.png differs from poster.png");
  process.exit(1);
}
if (buf.length < 8 || buf[0] !== 0x89 || buf[1] !== 0x50 || buf[2] !== 0x4e || buf[3] !== 0x47) {
  console.error("entry.png is not a PNG");
  process.exit(1);
}
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width !== 1024 || height !== 576) {
  console.error(`entry.png is ${width}x${height}, expected 1024x576`);
  process.exit(1);
}
if (buf.length > 1048576) {
  console.error(`entry.png is ${buf.length} bytes, over the 1 MiB limit`);
  process.exit(1);
}
console.log(`wrote ${dest} (${width}x${height}, ${buf.length} bytes)`);
