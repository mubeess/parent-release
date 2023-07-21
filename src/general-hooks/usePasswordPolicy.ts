import { useState } from 'react';

const containsSpecialChars = (str) => {
  // eslint-disable-next-line no-useless-escape
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
};

const usePasswordPolicy = () => {
  const [moreThan8chars, setMoreThan8chars] = useState<boolean>(false);
  const [lowerCaseAndUppercase, setLowerCaseAndUppercase] = useState<boolean>(false);
  const [oneNumber, setOneNumber] = useState<boolean>(false);
  const [specialCharacter, setSpecialCharacter] = useState<boolean>(false);

  const handlePasswordPolicy = (event) => {
    event.stopPropagation();
    const value = event.target.value;
    if (value.length > 8) {
      setMoreThan8chars(true);
    } else {
      setMoreThan8chars(false);
    }

    if (value.match('^(?=.*[A-Z])(?=.*[a-z]).*$')) {
      setLowerCaseAndUppercase(true);
    } else {
      setLowerCaseAndUppercase(false);
    }

    if (value.match('^(?=.*[0-9]).*$')) {
      setOneNumber(true);
    } else {
      setOneNumber(false);
    }

    if (containsSpecialChars(value)) {
      setSpecialCharacter(true);
    } else {
      setSpecialCharacter(false);
    }
  };

  return {
    handlePasswordPolicy,
    moreThan8chars,
    lowerCaseAndUppercase,
    oneNumber,
    specialCharacter,
  };
};

export default usePasswordPolicy;
