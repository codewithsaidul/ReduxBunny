#!/usr/bin/env node

import { exec } from "child_process";
import process from "process";

if (!process.env.npm_config_argv) {
  process.exit(0);
}

const npmArgs = JSON.parse(process.env.npm_config_argv).original;

// শুধুমাত্র `npm i reduxbunny` হলে `bunny.js` রান করাবে
if (npmArgs.includes("reduxbunny")) {
  console.log("🐰 ReduxBunny installation started...");
  exec("node bunny.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`⚠️ Warning: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
}
