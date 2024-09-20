const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'src/test/E2E/**/*.cy.js',  // Look for tests in /src/test/E2E
    baseUrl: 'http://localhost:3000',        // Your app's base URL
  },
});
