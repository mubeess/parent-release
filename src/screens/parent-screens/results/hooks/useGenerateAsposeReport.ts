import { StudentResultRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { useState } from 'react';

const useGenerateAsposeReport = () => {
  const [loadingResult, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [pdfURL, setPdfURL] = useState<string>('');

  const singleResult = async (studentId, termId, resultConfigId, templateId) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        StudentResultRestControllerService.getStudentResultAsposeReportUsingGet({
          studentId,
          resultConfigId,
          termId,
          templateId,
          includeUnapproved: false,
          
        }),
      );
      console.log(data, 'io');
      setPdfURL(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      setPdfURL('');
    }
  };

  const bulkResult = async (armId, classLevelId, termId, resultConfigId, templateId) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        StudentResultRestControllerService.getBulkAsposeReportsUsingGet({
          armId,
          classLevelId,
          resultConfigId,
          templateId,
          termId,
          includeUnapproved: false,
        }),
      );

      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return {
    loadingResult,
    error,
    pdfURL,
    singleResult,
    bulkResult,
    setPdfURL,
  };
};

export default useGenerateAsposeReport;
