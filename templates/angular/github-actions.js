module.exports = `name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x, 18.x]

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: \${{ matrix.node-version }}

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Build project
        run: npm run build --prod
`