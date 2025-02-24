import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: 'support/cypress/e2e.ts',
    specPattern: '**/*.spec.ts',
    setupNodeEvents(on, config) {
      on('task', {
        log: function log(message) {
          console.log(message)
          return null
        },
      })
      return config
    },
  },
})
