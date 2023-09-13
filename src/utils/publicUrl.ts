const publicUrl = {
  development: 'safsims.com',
  // development: 'safsims-dev.com',
  staging: 'safsims-stage.com',
  production: 'safsims.com',
};

export default publicUrl[process.env.REACT_APP_ENV || process.env.NODE_ENV || 'production'];
