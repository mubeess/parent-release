import { MessageRestControllerService, MessageTemplateResponse } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

const useWhatsappTemplateGet = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [templateList, setTemplateList] = useState<MessageTemplateResponse[]>([]);

  const fetchWhatsAppTemplates = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        MessageRestControllerService.getWhatsAppMessageTemplatesUsingGet(),
      );
      setTemplateList(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setTemplateList([]);
      handleError(error);
    }
  }, []);

  useEffect(() => {
    fetchWhatsAppTemplates();
  }, [fetchWhatsAppTemplates]);

  return {
    loadingWhatsAppTemplate: loading,
    fetchWhatsAppTemplates,
    whatsAppTemplateList: templateList,
  };
};

export default useWhatsappTemplateGet;
