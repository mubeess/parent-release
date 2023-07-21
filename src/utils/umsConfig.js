const umsConfig = {
  development: {
    UMS_BASE_URL: 'http://ums-api.common.flexisaf-dev.com',
  },
  staging: {
    UMS_BASE_URL: 'https://ums-api.component.flexisaf-stage.com',
  },
  production: {
    UMS_BASE_URL: 'https://ums-api.component.flexisaf.com',
  },
};

export default umsConfig[process.env.REACT_APP_ENV || process.env.NODE_ENV];
