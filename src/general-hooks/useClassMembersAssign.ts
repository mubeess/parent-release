import { Notify } from '@flexisaf/flexibull2';
import { ClassMemberRequest, ClassMemberRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';

const useClassMembersAssign = () => {
  const { loading, startLoading, stopLoading } = useLoading();

  const assignClassMembers = async (
    classMemberRequest: ClassMemberRequest,
    callback?: () => void,
  ) => {
    startLoading();
    try {
      await apiWrapper(() =>
        ClassMemberRestControllerService.assignUsingPost({
          classMemberRequest,
        }),
      );
      stopLoading();
      Notify('Class members created successfully.', { status: 'success' });
      callback?.();
    } catch (error) {
      stopLoading();
      handleError(error);
    }
  };

  return {
    assignClassMembers,
    loading,
  };
};

export default useClassMembersAssign;
