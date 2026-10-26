import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("public", { recursive: true });
const sha = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || "local";
writeFileSync("public/index.html", `<!doctype html><title>factory-poc</title><p>commit: ${sha}</p>\n`);
