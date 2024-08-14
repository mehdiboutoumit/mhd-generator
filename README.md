# mhd-generator

<div align="center">
  <img src="./MHD-logo-large.png" height="100px" alt="" />
</div>

## Overview

`mhd-generator` is a powerful and flexible project generator designed to streamline the process of creating React and Angular projects with desired pre-configurations. This tool aims to simplify the initial setup and configuration, allowing developers to focus more on building features rather than setting up their projects.

## Features

- Generate React projects with pre-configured setups.
- Generate Angular projects with desired configurations.
- Easy-to-use CLI interface.
- Customizable templates for various project needs.
- Open-source and actively maintained.

## Installation

You can install `mhd-generator` globally using npm:

```bash
npm install -g mhd-generator
```

## Usage

To generate a new React or Angular project, simply run:

```bash

mhd generate <project-type> <project-name>
```

Replace <project-type> with either react or angular, and <project-name> with the desired name of your project.
### Example
Generate a new React project named my-react-app:
```bash
mhd generate react my-react-app
```

Generate a new Angular project named my-angular-app:
```bash
mhd generate angular my-angular-app
```
## Current Options

When generating a project, you can customize the setup with the following options:

- **TypeScript Support:**
  - **React:** Add `--ts` to generate a React project with TypeScript.
  - **Angular:** Angular projects are TypeScript-based by default.

- **SCSS Support:**
  - **Angular:** Use `--scss` to set up SCSS as the default styling option.

- **Redux/NgRx Integration:**
  - **React:** Add `--redux` to include Redux in your React project.
  - **Angular:** Add `--ngrx` to include NgRx in your Angular project.

- **Git Initialization:**
  - Add `--git` to initialize a Git repository with a `.gitignore` file.

- **Docker Support:**
  - Add `--docker` to set up Docker with a `Dockerfile` and `.dockerignore`.

- **CI/CD Integration:**
  - Add `--ciCd` to set up CI/CD for your project. You will be prompted to choose between GitHub Actions and GitLab CI.

- **API Integration:**
  - Add `--api` to set up an API service in your project (using Axios for React or HttpClient for Angular) along with an example API file and environment file.

- **Environment Variables Setup:**
  - **React:** Add `--env` to create an environment file with example variables.

- **Prettier Configuration:**
  - Add `--prettier` to set up Prettier with a configuration file and a Prettier ignore file.


## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

    Fork the repository.
    Create a new branch for your feature or bug fix.
    Commit your changes.
    Push the branch and create a pull request.

Please make sure to follow the code of conduct.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

    React
    Angular

## Contact

For any questions or suggestions, feel free to open an issue or contact the maintainer.
