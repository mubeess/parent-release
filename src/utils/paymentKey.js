const publicKey = {
  development: 'pk_test_782c172a71fe9aaac53c072a0fb705b061f95a07',
  production: 'pk_live_d4b3d9c6bb06de4200cfbe6a2f345345d2397992',
  staging: 'pk_test_782c172a71fe9aaac53c072a0fb705b061f95a07',
};

export default publicKey[process.env.REACT_APP_ENV || process.env.NODE_ENV];
