const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const gitignore = require('../templates/react/gitignore');

const createReactApp = (projectName, options) => {
  console.log(`Creating a new React project named ${projectName} using Vite...`);
  const template = options.ts ? 'react-ts' : 'react';
  execSync(`npm create vite@latest ${projectName} -- --template ${template}`, { stdio: 'inherit' });

  if (options.redux) {
    console.log('Adding Redux to the project...');
    // execSync(`cd ${projectName} && npm install @reduxjs/toolkit react-redux`, { stdio: 'inherit' });
  }

  if(options.git){
    console.log('Initializing Git repository...');
    execSync(`cd ${projectName} && git init`, { stdio: 'inherit' });
    console.log('Adding .gitignore file ...');
    fs.writeFileSync(path.join(projectName, '.gitignore'), gitignore);
    console.log('.gitignore created');
  }

  if (options.docker){
    console.log('Setting up docker ...');
  }


  if(options.ciCd){
    console.log('Setting up CI CD ...');
  }

  if(options.api){
    console.log('Setting up api integration ...');
  }

  if(options.env){
    console.log('Setting up environment variables file ...');
  }

  if(options.prettier){
    console.log('Setting up prettier ...');
  }
  


  console.log(`Successfully generated React project named ${projectName}`);
};

module.exports = createReactApp;
