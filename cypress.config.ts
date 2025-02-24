import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: 'support/cypress/e2e.ts',
    specPattern: '**/*.spec.ts',
    video: false,
    screenshotOnRunFailure: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          // eslint-disable-next-line no-console
          console.log(`[CYPRESS LOG]: ${message}`);
          return null;
        },
      });
      return config;
    },
  },
});
