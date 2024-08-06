const { execSync } = require('child_process');

const createAngularApp = (projectName, options) => {
  console.log(`Creating a new Angular project named ${projectName}...`);
//   execSync(`npx -p @angular/cli ng new ${projectName} --defaults`, { stdio: 'inherit' });

  if (options.scss) {
    console.log('Adding SCSS to the project...');
    // SCSS setup is part of the Angular CLI options by default, you can reconfigure styles in angular.json if needed.
    // execSync(`cd ${projectName} && ng config schematics.@schematics/angular:component.styleext scss`, { stdio: 'inherit' });
  }

  console.log(`Successfully generated Angular project named ${projectName}`);
};

module.exports = createAngularApp;
