module.exports = `stages:
  - build
  - test

build:
  stage: build
  script:
    - npm install
    - npm run build --prod

test:
  stage: test
  script:
    - npm test
`