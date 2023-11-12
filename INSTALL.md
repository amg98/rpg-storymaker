Below we specify the project's tools and the versions in which the project focuses (and bugs due to configurations will focus these tools versions).

## Rust
- Version: 1.71.1
- Setup: https://www.rust-lang.org/es/learn/get-started

## Node.js
- Version: 20.9.0
- Setup: https://nodejs.org/en

## Yarn
This is a package management tool for javascript projects

- Version: 1.22.19
- Setup: https://classic.yarnpkg.com/lang/en/docs/install/

## E2E testing
Follow this guide (https://tauri.app/v1/guides/testing/webdriver/introduction) to setup tools to run E2E tests

## Continuous Integration
This project has a failing CI script for Github Actions in `.github/workflows/ci.yml`. Contact the project owner (https://github.com/amg98) to implement the workflow so a PR can be submitted.

For local development, you can ensure tests passing automatically using a git hook in whatever stage you like. An example script could be:
`yarn tsc && yarn lint && yarn test && yarn test:e2e`
