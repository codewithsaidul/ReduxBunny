#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import process from "process";

// ইউজারের কাছে ফোল্ডারের নাম জানতে চাওয়া
const askProjectName = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name (use '.' to install in the current folder):",
      default: "my-redux-app",
    },
  ]);

  return answers.projectName.trim();
};

// মেইন ফাংশন
const main = async () => {
  let projectName = await askProjectName();

  if (projectName === ".") {
    projectName = path.basename(process.cwd());
    console.log(`📂 Installing in the current directory: ${projectName}`);
  } else {
    console.log(`📂 Creating a new project: ${projectName}`);
    fs.mkdirSync(projectName, { recursive: true });
    process.chdir(projectName);
  }

  // প্যাকেজ ইন্সটল করা
  console.log("📦 Installing dependencies...");
  execSync("npm install", { stdio: "inherit" });

  console.log("\n✅ Installation complete!");
  console.log("\n🚀 Run the following commands to start your project:\n");
  console.log(`👉 cd ${projectName}`);
  console.log(`👉 npm run dev\n`);
};

// রান করো
main();
