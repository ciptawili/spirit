const { defineConfig } = require('cypress')
const { afterEach } = require('mocha')

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    embeddedScreenshots: true,
    charts: true,
    reportPageTitle: 'custom-title',
    inlineAssets: true,
    saveAllAttempts: false,
  },
  chromeWebSecurity: false,
  env:{
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 0,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0
  },
})