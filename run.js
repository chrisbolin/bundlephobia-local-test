const path = require("path");
const fs = require("fs").promises;
const getBuiltPackageStats = require("package-build-stats");

const PROJECT_ROOT = "./projects";

async function main() {
  const projects = await fs.readdir(PROJECT_ROOT);
  for (const project of projects) {
    const projectPath = path.resolve(PROJECT_ROOT, project);
    console.log({ project, projectPath });
    const results = await getBuiltPackageStats(projectPath);
    console.log(results);
  }
}

main();
