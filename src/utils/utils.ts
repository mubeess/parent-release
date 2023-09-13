// @ts-ignore

import currencyToSymbolMap from 'currency-symbol-map/map';
import LocaleCurrency from 'locale-currency';
import Toast from 'react-native-toast-message';
import countryList from 'react-select-country-list';
import { FIX_ANY } from './types';

export const ONBOARDING_ROLE = 'ONBOARDING_ROLE';
export const DIRECTOR_ROLE = 'DIRECTOR';
export const ADMIN_ROLE = 'Admin';

export const InsertBeginning = (originalArray, objectToInsert) => {
  return [objectToInsert, ...originalArray];
};

export const findIndexInArray = (originalArray, objectToFInd, key, key2?: string | undefined) => {
  return originalArray.findIndex((item) => {
    if (key2) {
      return item[key][key2] === objectToFInd[key][key2];
    } else {
      return item[key] === objectToFInd[key];
    }
  });
};

export const returnUpdatedList = (newObj, oldList, key = 'id', key2 = '') => {
  const indexOfLocal = findIndexInArray(oldList, newObj, key, key2);
  if (indexOfLocal !== -1) {
    oldList[indexOfLocal] = newObj;
  }
  return oldList;
};

export const flatten2dArray = (arr: any[]) => {
  const flattenedList: any[] = [];
  arr.forEach((item) => {
    flattenedList.push(...item);
  });
  return flattenedList;
};

export const removeDuplicates = (myArr: any[], prop: any) => {
  return myArr.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
};

export const convertFileToBase64 = (file, callback) => {
  if (file !== undefined) {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        callback(reader.result);
      },
      false,
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  }
};

interface IObj {
  code: number;
  message: string;
}

export const handleError = (err: any, obj?: IObj, show = true, override = false) => {
  // obj = { code: 404, message: "An error occured" } ||
  //  [{ code: 404, message: "An error occured" }]
  if (process) {
    const NODE_ENV = process.env.NODE_ENV;
    if (NODE_ENV === 'development') {
      console.error(err);
    }
  }

  let { response, body, status } = err;
  if (body && !response) {
    response = {
      data: body,
      status: body.status || status,
    };
  }
  let msg;
  let statusCode: number;
  const constMessage =
    'Sorry, an error has occurred, Please try again or if issue persist, contact support.';
  const msgObj = {
    '404': "We can't find the resource you are looking for.",
    '400': 'Sorry, an unexpected error occurred. Please try again.',
    '600': 'Sorry, an error occurred. Please check your internet conection and try again.',
    '500':
      'Sorry Something went wrong. We have logged this error and our engineers are working to fix it as soon as possible. If you need immediate assistance, please contact our support.',
    '401': 'Aunauthorized access',
    '403':
      'Sorry, You do not have a permission to access the document or program that you requested',
    '408': 'Sorry, your request took too long to process, please try again.',
    '502':
      "Sorry, we are currently experiencing a glitch with this service. Don't worry we are already aware and service will be restored as soon as possible. If you need immediate assistance, please contact our support.",
    '503':
      "Sorry, we are currently experiencing a glitch with this service. Don't worry we are already aware and service will be restored as soon as possible. If you need immediate assistance, please contact our support.",
    '504': 'Sorry, your request took too long to process, please try again.',
  };
  if (response && response instanceof Object) {
    statusCode = response?.status;
    const { data } = response;
    msg = data?.message || data?.error || constMessage;
    // Might fallback to this.
    // msgObj[`${statusCode}`] = msg;
  } else if (err?.name === 'ApiError') {
    statusCode = err?.status;
    msg = err?.body?.message || err?.body?.error || constMessage;
  } else {
    statusCode = 600;
  }
  if (statusCode === 409) {
    msgObj[`${statusCode}`] = msg;
  }
  if (!msgObj[`${statusCode}`]) {
    msgObj[`${statusCode}`] = constMessage;
  }
  if (obj instanceof Object) {
    msgObj[`${obj.code}`] = obj.message;
  }
  if (obj instanceof Array) {
    obj.forEach((x) => {
      msgObj[`${x.code}`] = x.message;
    });
  }
  if (statusCode === 401 && msgObj['401'] === '') {
    return;
  }
  if (show && override) {
    Toast.show({
      type: 'error',
      text1: 'An error occurred',
      text2: msgObj[statusCode],
    });
  }
  return { success: false, statusCode, message: msg };
};

export const stringToHslColor = (text = '', s = 50, l = 80) => {
  const str = text.replace(' ', '');
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-next-line
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, ${s}%, ${l}%)`;
};

export const onlyNumbers = (e: FIX_ANY) => {
  const num = /[^0-9]/gi;
  e.target.value = e.target.value.replace(num, ' ');
};

export const decimalNumbers = (e: FIX_ANY) => {
  const num = /^\d+(\.\d)?\d*$/;
  e.target.value = e.target.value.replace(num, ' ');
};

//rounds up a number(value) to x decimal places
// it returns a whole number when value is whole
export const roundUp = (value: number, x: number) => {
  const multiplier = Math.pow(10, x || 0);
  return Math.round(value * multiplier) / multiplier;
};

// functino to add st, nd, rd, th to positions
export const postion = (number: number) => {
  const lastDigit = number % 10,
    k = number % 100;

  if (lastDigit === 1 && k !== 11) {
    return number + 'st';
  } else if (lastDigit === 2 && k !== 12) {
    return number + 'nd';
  } else if (lastDigit === 3 && k !== 13) {
    return number + 'rd';
  } else {
    return number + 'th';
  }
};

export const Countries = countryList()
  .getData()
  .map((item) => ({
    ...item,
    currency: currencyToSymbolMap[LocaleCurrency.getCurrency(item.value) || 'NGN'],
  }));

interface IPayload {
  type: 'error' | 'success' | 'warning';
  message: string;
  title?: string;
}
export const Notify = ({ type, message, title }: IPayload) => {
  Toast.show({
    type: type || 'error',
    text1: title || type.toUpperCase(),
    text2: message,
  });
};
