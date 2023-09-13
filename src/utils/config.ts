const config = {
  development: {
    API_BASE_URL: 'https://api.safsims.flexisafapps-dev.com',
  },
  staging: {
    API_BASE_URL: 'https://api.safsims.flexisafapps-stage.com',
  },
  production: {
    API_BASE_URL: 'https://api.safsims.com',
  },
};

export default config.production;
