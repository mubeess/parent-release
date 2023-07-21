const flutterwaveKey = {
  development: 'FLWPUBK_TEST-255da9ef933e9e6bae2a1aeafc7b6bcb-X',
  staging: 'FLWPUBK_TEST-255da9ef933e9e6bae2a1aeafc7b6bcb-X',
  production: 'FLWPUBK-223072b06bff79b7c5432d0f0c34d998-X',
};

export default flutterwaveKey[process.env.REACT_APP_ENV || process.env.NODE_ENV];
