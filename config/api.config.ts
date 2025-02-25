import baseConfig from '../cypress.config';

export default {
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },
};
