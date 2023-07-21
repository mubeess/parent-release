import { MessageRestControllerService, MessageTemplateResponse } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';

const useEmailTemplateGet = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [templateList, setTemplateList] = useState<MessageTemplateResponse[]>([]);

  const fetchEmailTemplates = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() => MessageRestControllerService.getEmailTemplatesUsingGet());
      setTemplateList(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setTemplateList([]);
      handleError(error);
    }
  }, []);

  useEffect(() => {
    fetchEmailTemplates();
  }, [fetchEmailTemplates]);

  return {
    loadingEmailTemplate: loading,
    fetchEmailTemplates,
    emailTemplates: templateList,
  };
};

export default useEmailTemplateGet;
