#!/usr/bin/env node

const { program } = require('commander');
const createReactApp = require('./config/react');
const createAngularApp = require('./config/angular');

program
  .version('1.0.0')
  .description('mhd-js-generator: Generate React and Angular projects with pre-configurations. Created by mehdiboutoumit');

program
  .command('version')
  .description('Display version information')
  .action(() => {
    console.log(`
      __  __ _    _ ____  
     |  \\/  | |  | |  _ \\ 
     | |\\/| | |__| | | | |
     | |  | | |  | | |_| |
     |_|  |_|_|  |_|____/ 
    `);
  });

program
  .command('generate <project-type> <project-name>')
  .description('Generate a new project of type <project-type>')
  .alias('g')
  .option('--ts', 'Add TypeScript for enhanced type safety')
  .option('--redux', 'Include Redux for state management (React only)')
  .option('--ngrx', 'Include NgRx for state management (Angular only)')
  .option('--docker', 'Add Docker setup for containerization')
  .option('--scss', 'Use SCSS for styling (Angular only)')
  .option('--git', 'Initialize a Git repository with initial commit')
  .option('--ci-cd', 'Set up a basic CI/CD pipeline configuration')
  .option('--api', 'Include a basic API integration setup')
  .option('--env', 'Set up environment variables for different environments')
  .option('--prettier', 'Add Prettier for code formatting')
  .action(async (projectType, projectName, options) => {
    if (projectType === 'react') {
      await createReactApp(projectName, options);
    } else if (projectType === 'angular') {
      await createAngularApp(projectName, options);
    } else {
      console.error('Invalid project type. Use "react" or "angular".');
      process.exit(1);
    }

    console.log(`
      __  __ _    _ ____  
     |  \\/  | |  | |  _ \\ 
     | |\\/| | |__| | | | |
     | |  | | |  | | |_| |
     |_|  |_|_|  |_|____/  
    `);
  });

program.parse(process.argv);
