import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const srcDir = "src";
const distDir = "dist";
const files = ["index.js", "math.js", "greet.js"];

mkdirSync(distDir, { recursive: true });

for (const file of files) {
  const content = readFileSync(join(srcDir, file), "utf8");
  writeFileSync(join(distDir, file), content);
  console.log(`Built: ${file}`);
}

console.log("Build complete.");
