import { StudentResultRestControllerService, TermResultAndAssessmentDef } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

interface IProps {
  emails?: string[];
  parent_id: string;

  term_id: string;
}

const useShareResult = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [childResult, setChildResult] = useState<TermResultAndAssessmentDef | undefined>(undefined);
  const school_url = useAppSelector((user) => user.configuration.selectedSchool?.school_url);
  const shareResult = async ({ emails, parent_id, term_id }: IProps) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        StudentResultRestControllerService.shareResultLinkUsingPost({
          shareResultLinkRequest: {
            emails,
            parent_id,
            result_link: `${school_url}/direct-result/${parent_id}?term=${term_id}`,
          },
        }),
      );
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Shared result successfull!',
      });
      setChildResult(data);
      stopLoading();
      return true;
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  return {
    loading,
    childResult,
    shareResult,
  };
};

export default useShareResult;
