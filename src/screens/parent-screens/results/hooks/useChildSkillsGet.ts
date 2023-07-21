import {
  CognitiveSkillAssessmentRestControllerService,
  GroupedStudentSkillAssessmentResponse,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';

interface IProps {
  termId?: string;
  studentId?: string;
}

const useChildSkillsGet = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [skills, setSkills] = useState<GroupedStudentSkillAssessmentResponse | undefined>(
    undefined,
  );

  const getSkills = async ({ termId, studentId }) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        CognitiveSkillAssessmentRestControllerService.getStudentSkillAssessmentsGroupedUsingGet({
          studentId,
          termId,
        }),
      );
      setSkills(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loading,
    skills,
    getSkills,
  };
};

export default useChildSkillsGet;
