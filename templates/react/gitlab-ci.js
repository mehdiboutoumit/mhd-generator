module.exports = `stages:
  - build
  - test

build:
  stage: build
  script:
    - npm install
    - npm run build

test:
  stage: test
  script:
    - npm test
`