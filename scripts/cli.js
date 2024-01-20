#!/usr/bin/env node

import fs from "fs";
import Inquirer from "inquirer";
import path from "path";

const ROOT_DIR = "../";
const EXCLUDE_DIRS = ["node_modules", "scripts", "docs", "README.md", "CHANGELOG.md"];

const CLI_CURRENT_YEAR_KEY = "2024";
const CLI_GITHUB_AUTHOR_HANDLE_KEY = "brunotot";
const CLI_GITHUB_AUTHOR_EMAIL_KEY = "brunotot10000@gmail.com";
const CLI_GITHUB_AUTHOR_FULL_NAME_KEY = "Bruno Tot";
const CLI_GITHUB_REPO_DESCRIPTION_KEY = "Set of starter files for a TypeScript monorepo setup";
const CLI_GITHUB_REPO_HANDLE_KEY = "monorepo-typescript-starter";

const currentYear = new Date().getFullYear();

function execReplace(searchText, replacementText, directory = ROOT_DIR) {
  const files = fs.readdirSync(directory).filter(file => !EXCLUDE_DIRS.includes(file));

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      execReplace(searchText, replacementText, filePath);
    } else if (stats.isFile()) {
      let content = fs.readFileSync(filePath, "utf-8");
      if (content.includes(searchText)) {
        content = content.split(searchText).join(replacementText);
        fs.writeFileSync(filePath, content, "utf-8");
      }
    }
  }
}

function text(name, message) {
  return {
    type: "input",
    name,
    message,
  };
}

function list(name, message, choices) {
  return {
    type: "list",
    name,
    message,
    choices,
  };
}

async function runCLI() {
  const answers = await Inquirer.prompt([
    text("authorFullName", "[1/5] Author full name?"),
    text("authorGithubLogin", "[2/5] Author GitHub username?"),
    text("repositoryHandle", "[3/5] Repository handle?"),
    text("repositoryDescription", "[4/5] Repository description?"),
    text("authorGithubEmail", "[5/5] Author GitHub email?"),
    //list("choice", "What do you want to do?", ["Option 1", "Option 2", "Option 3"]),
  ]);

  execReplace(CLI_CURRENT_YEAR_KEY, currentYear);
  execReplace(CLI_GITHUB_AUTHOR_FULL_NAME_KEY, answers.authorFullName);
  execReplace(CLI_GITHUB_AUTHOR_HANDLE_KEY, answers.authorGithubLogin);
  execReplace(CLI_GITHUB_REPO_HANDLE_KEY, answers.repositoryHandle);
  execReplace(CLI_GITHUB_REPO_DESCRIPTION_KEY, answers.repositoryDescription);
  execReplace(CLI_GITHUB_AUTHOR_EMAIL_KEY, answers.authorGithubEmail);
}

runCLI();
