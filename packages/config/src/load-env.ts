import { config } from "dotenv";
import { resolve } from "node:path";
import { existsSync } from "node:fs";

// Load .env from root if it exists (searching upwards from process.cwd())
let currentDir = process.cwd();
while (currentDir !== resolve(currentDir, "..")) {
  const envPath = resolve(currentDir, ".env");
  if (existsSync(envPath)) {
    config({ path: envPath });
    break;
  }
  currentDir = resolve(currentDir, "..");
}
