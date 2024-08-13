const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const gitignore = require('../templates/angular/gitignore');
const dockerfile = require('../templates/angular/dockerFileAngular');
const dockerIgnore = require('../templates/angular/dockerIgnore');

const createAngularApp = (projectName, options) => {
  console.log(`Creating a new Angular project named ${projectName}...`);
//   execSync(`npx -p @angular/cli ng new ${projectName} --defaults`, { stdio: 'inherit' });

  if(options.ts){
    console.log('Angular projects are already TypeScript-based by default.');
  }

  if (options.scss) {
    console.log('Adding SCSS to the project...');
    // SCSS setup is part of the Angular CLI options by default, you can reconfigure styles in angular.json if needed.
    // execSync(`cd ${projectName} && ng config schematics.@schematics/angular:component.styleext scss`, { stdio: 'inherit' });
  }

  if (options.ngrx) {
    console.log('Adding NgRx to the project...');
    // execSync(`cd ${projectName} && npm install @reduxjs/toolkit react-redux`, { stdio: 'inherit' });
  }

  if(options.git){
    console.log('Initializing Git repository...');
    execSync(`cd ${projectName} && git init`, { stdio: 'inherit' });
    console.log('Adding .gitignore file ...');
    fs.writeFileSync(path.join(projectName, '.gitignore'), gitignore);
    console.log('Created .gitignore');
  }


  if (options.docker){
    console.log('Setting up Docker ...');
    fs.writeFileSync(path.join(projectName, 'Dockerfile'), dockerfile);
    console.log('Created Dockerfile');
  
    fs.writeFileSync(path.join(projectName, '.dockerignore'), dockerIgnore);
    console.log('Created .dockerignore');
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
  

  console.log(`Successfully generated Angular project named ${projectName}`);
};

module.exports = createAngularApp;
