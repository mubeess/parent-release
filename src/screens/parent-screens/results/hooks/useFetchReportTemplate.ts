import { ReportTemplateDto, ReportTemplateRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

const useFetchReportTemplate = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [allTemplates, setReports] = useState<ReportTemplateDto[]>([]);

  const fetchTemplates = async () => {
    startLoading();
    try {
      const data: ReportTemplateDto[] = await apiWrapper(() =>
        ReportTemplateRestControllerService.getAllReportTemplatesUsingGet(),
      );
      setReports(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loadingTemplates: loading,
    allTemplates,
    fetchTemplates,
  };
};

export default useFetchReportTemplate;
