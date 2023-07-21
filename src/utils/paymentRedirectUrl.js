import { school_id } from './constants';

const redirect_url = {
  development: {
    API_BASE_URL:
      school_id === 'ICS'
        ? 'http://localhost:3000/payment-verification'
        : 'http://safsims.safsims-dev.com/payment-verification',
  },
  staging: {
    API_BASE_URL: `https://${school_id}.safsims-stage.com/payment-verification`,
  },
  production: {
    API_BASE_URL: `https://${school_id}.safsims.com/payment-verification`,
  },
};

export default redirect_url[process.env.REACT_APP_ENV || process.env.NODE_ENV];
