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

export default config[process.env.REACT_APP_ENV || process.env.NODE_ENV || 'production'];
