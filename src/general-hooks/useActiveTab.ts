import { getUrlParam } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [reloadTabs, setReload] = useState<boolean>(false);
  const tab = getUrlParam('activeTab');

  const handleReload = () => {
    setReload(true);
    setTimeout(() => {
      setReload(false);
    }, 200);
  };

  useEffect(() => {
    if (tab) {
      setActiveTab(parseInt(tab));
      handleReload();
    }
  }, [tab]);

  return {
    activeTab,
    reloadTabs,
  };
};

export default useActiveTab;
