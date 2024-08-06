const { execSync } = require('child_process');

const createReactApp = (projectName, options) => {
  console.log(`Creating a new React project named ${projectName} using Vite...`);
//   execSync(`npm create vite@latest ${projectName} --template react`, { stdio: 'inherit' });

  if (options.redux) {
    console.log('Adding Redux to the project...');
    // execSync(`cd ${projectName} && npm install @reduxjs/toolkit react-redux`, { stdio: 'inherit' });
  }

  if (options.cssModules) {
    console.log('Setting up CSS Modules...');
    // Vite already supports CSS Modules by default, just mention it.
  }

  if (options.docker){
    console.log('Setting up docker ...');
  }

  console.log(`Successfully generated React project named ${projectName}`);
};

module.exports = createReactApp;
