import { SchoolFeesDiscountRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';

interface IProps {
  payableItemId: string;
  studentId: string;
  termId: string;
}

const useInvoiceDiscountDelete = () => {
  const { loading, startLoading, stopLoading } = useLoading();

  const deleteDiscount = async (props: IProps) => {
    startLoading();
    try {
      const { payableItemId, studentId, termId } = props;
      await apiWrapper(() =>
        SchoolFeesDiscountRestControllerService.deleteSchoolFeesDiscountUsingDelete({
          payableItemId,
          studentId,
          termId,
        }),
      );
      stopLoading();
    } catch (error) {
      stopLoading();
      handleError(error, undefined, false);
    }
  };

  return {
    loading,
    deleteDiscount,
  };
};

export default useInvoiceDiscountDelete;
