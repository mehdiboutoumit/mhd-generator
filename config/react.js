const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const gitignore = require('../templates/react/gitignore');

const dockerfile = require('../templates/react/dockerFileReact');
const dockerIgnore = require('../templates/react/dockerIgnore');


const reactCiCdGitHub = require('../templates/react/github-actions.js');
const reactCiCdGitLab = require('../templates/react/gitlab-ci.js');

const apiExample = require('../templates/react/api.js');
const envAPIExample = require('../templates/react/envAPI.js');

const envExample = require('../templates/react/env.js');

const prettierConfigTemp = require('../templates/shared/prettierConfig.js');
const prettierIgnoreTemp = require('../templates/shared/prettierIgnore.js');

const createReactApp = async (projectName, options) => {
  
  console.log(`Creating a new React project named ${projectName} using Vite...`);

  // Project creation (TS option handled)
  const template = options.ts ? 'react-ts' : 'react';
  execSync(`npm create vite@latest ${projectName} -- --template ${template}`, { stdio: 'inherit' });

  // Redux option
  if (options.redux) {
    console.log('Adding Redux to the project...');
    execSync(`cd ${projectName} && npm install @reduxjs/toolkit react-redux`, { stdio: 'inherit' });
    console.log('Redux added successfully');
  }

  // GIT option
  if(options.git){
    console.log('Initializing Git repository...');
    execSync(`cd ${projectName} && git init`, { stdio: 'inherit' });
    console.log('Adding .gitignore file ...');
    fs.writeFileSync(path.join(projectName, '.gitignore'), gitignore);
    console.log('.gitignore created');
  }

  // Docker option
  if (options.docker){
    console.log('Setting up Docker ...');
    fs.writeFileSync(path.join(projectName, 'Dockerfile'), dockerfile);
    console.log('Created Dockerfile');
  
    fs.writeFileSync(path.join(projectName, '.dockerignore'), dockerIgnore);
    console.log('Created .dockerignore');
  }

  // CI/CD setup
  const createCiCdSetup = async (projectDir) => {
    const { ciCdChoice } = await inquirer.default.prompt([
      {
        type: 'list',
        name: 'ciCdChoice',
        message: 'Choose a CI/CD service:',
        choices: ['GitHub Actions', 'GitLab CI'],
      },
    ]);

    let ciCdContent;

    if (ciCdChoice === 'GitHub Actions') {
      ciCdContent = reactCiCdGitHub;
      const ciCdDir = path.join(projectDir, '.github', 'workflows');

      if (!fs.existsSync(ciCdDir)) {
        fs.mkdirSync(ciCdDir, { recursive: true });
      }

      fs.writeFileSync(path.join(ciCdDir, 'ci.yml'), ciCdContent);
      console.log('Created GitHub Actions workflow for CI/CD');
    } else if (ciCdChoice === 'GitLab CI') {
      ciCdContent = reactCiCdGitLab;
      fs.writeFileSync(path.join(projectDir, '.gitlab-ci.yml'), ciCdContent);
      console.log('Created GitLab CI pipeline configuration');
    }
  };

  if (options.ciCd) {
    console.log('Setting up CI/CD...');
    await createCiCdSetup(projectName);
  }

  const installAxios = (projectDir) => {
    console.log('Installing Axios...');
    execSync(`cd ${projectDir} && npm install axios`, { stdio: 'inherit' });
  };

  const createReactApiService = (projectDir) => {
    console.log('Adding an example api ...');
    const apiServiceContent = apiExample;
  
    const apiDir = path.join(projectDir, 'src', 'api');
    if (!fs.existsSync(apiDir)) {
      fs.mkdirSync(apiDir, { recursive: true });
    }
    fs.writeFileSync(path.join(apiDir, 'api.js'), apiServiceContent);
    console.log('Created API service file: src/api/api.js');
  };

  const createReactEnvFileForAPI = (projectDir) => {
    console.log('Adding an env file with example endpoint ...');
    const envContent = envAPIExample;
  
    fs.writeFileSync(path.join(projectDir, '.env'), envContent);
    console.log('Created .env file');
  };
  
  

  if(options.api){
    console.log('Setting up api integration ...');
    installAxios(projectName);
    createReactApiService(projectName);
    createReactEnvFileForAPI(projectName);
  }

  const createReactEnvFile = (projectDir) => {
    console.log('Adding an env file with example variable ...');
    const envContent = envExample;
  
    fs.writeFileSync(path.join(projectDir, '.env'), envContent);
    console.log('Created .env file');
  };

  if(options.env){
    console.log('Setting up environment variables file ...');
    createReactEnvFile(projectName);
  }

  const installPrettier = (projectDir) => {
    console.log('Installing Prettier...');
    execSync(`cd ${projectDir} && npm install --save-dev prettier`, { stdio: 'inherit' });
  };

  const createPrettierConfig = (projectDir) => {
    const prettierConfig = prettierConfigTemp;
  
    fs.writeFileSync(path.join(projectDir, '.prettierrc'), prettierConfig);
    console.log('Created .prettierrc file');
  };

  const createPrettierIgnore = (projectDir) => {
    const prettierIgnore = prettierIgnoreTemp;
  
    fs.writeFileSync(path.join(projectDir, '.prettierignore'), prettierIgnore);
    console.log('Created .prettierignore file');
  };

  const updatePackageJsonForPrettier = (projectDir) => {
    const packageJsonPath = path.join(projectDir, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
    packageJson.scripts = {
      ...packageJson.scripts,
      "prettier": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\""
    };
  
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('Updated package.json with Prettier script');
  };
  

  if(options.prettier){
    console.log('Setting up prettier ...');
    installPrettier(projectName);
    createPrettierConfig(projectName);
    createPrettierIgnore(projectName);
    updatePackageJsonForPrettier(projectName);
  }
  


  console.log(`Successfully generated React project named ${projectName}`);
};

module.exports = createReactApp;
