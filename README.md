# Testing with Cypress

## Pre Setup Node.js

### Install NVM
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
cek in .zshrc file the text below already exists or not, if doesn't exist copy text into file

`export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion`

### Install Node
If you're using npm to install Cypress, we support:
Node.js 12 or 14 and above

```
nvm install
```

## Setup

In order to run this project follow this simple steps:

- Clone the project;
- In the root directory: run `npm install` command in order to download the general dependencies;

## Running the tests

Once the setup is done correctly, there are two basic ways to run the tests: Headlessly in the Electron browser or via Cypress Test Runner.

To run the tests headlessly use the `npx cypress run` command;

To run the tests via Cypress Test Runner use - `npx cypress open`
