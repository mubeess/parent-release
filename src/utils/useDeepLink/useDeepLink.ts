import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { Linking } from 'react-native';

const useDeepLink = () => {
  const [value, setValue] = useState<any>(undefined);

  useEffect(() => {
    const handleDeepLink = (event) => {
      const url = event.url || event;
      if (url) {
        const parsedUrl: any = queryString.parseUrl(url);
        const queryParams = parsedUrl.query;
        const data = queryParams.value;
        console.log(data, 'my data');
        setValue(data);
      }
    };

    const sub = Linking.addEventListener('url', handleDeepLink);
    return () => {
      Linking?.removeSubscription?.(sub);
    };
  }, []);

  return { value };
};

export default useDeepLink;
