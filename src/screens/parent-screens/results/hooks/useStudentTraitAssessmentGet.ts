import {
  StudentTraitAssessmentDto,
  StudentTraitAssessmentRestControllerService,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

interface IProps {
  termId?: string;
  studentId?: string;
}

const useStudentTraitAssessmentGet = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [traitAssessments, setTraitAssessments] = useState<StudentTraitAssessmentDto[]>([]);

  const getTraitAssessment = async ({ termId, studentId, traitGroupId = '' }) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        StudentTraitAssessmentRestControllerService.getStudentTraitAssessmentsUsingGet({
          studentId,
          termId,
          includeUnapproved: false,
          traitGroupId,
        }),
      );
      console.log(data, 'loio');
      setTraitAssessments(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loading,
    traitAssessments,
    getTraitAssessment,
  };
};

export default useStudentTraitAssessmentGet;
