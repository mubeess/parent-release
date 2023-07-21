import usePaginationWrapper from '@safsims/general-hooks/usePaginationWrapper';
import {
  SchoolFeesPaymentsRestControllerService,
  SchoolFeesTransactionDto,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import moment from 'moment';
import { useEffect, useState } from 'react';

interface IProps {
  parentId?: string;
  min?: Date;
  max?: Date;
  status?: 'PENDING' | 'SUCCESSFUL' | 'FAILED';
}

interface IFetchProps {
  parentId: string;
  maxDate?: string;
  minDate?: string;
  status?: 'PENDING' | 'SUCCESSFUL' | 'FAILED';
  forceOffset?: number;
}

const useTransactionsByParentFetch = ({ parentId, min, max, status }: IProps) => {
  const maxDate = max ? moment(max).format('YYYY/MM/DD') : undefined;
  const minDate = min ? moment(min).format('YYYY/MM/DD') : undefined;

  const [loading, setLoading] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<SchoolFeesTransactionDto[]>([]);
  const [fetch, setFetch] = useState(0);

  const {
    limit,
    setOffset,
    setLimit,
    totalElements,
    page,
    pageOptions,
    offset,
    setPageable,
    lastPage,
    infiniteScrollCallback,
  } = usePaginationWrapper();

  const refetchTransactions = () => setFetch((prev) => prev + 1);

  const fetchTransactions = async ({
    parentId,
    maxDate,
    minDate,
    status,
    forceOffset,
  }: IFetchProps) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        SchoolFeesPaymentsRestControllerService.getParentPaymentHistoryUsingGet({
          parentId,
          minDate,
          maxDate,
          offset: forceOffset || forceOffset === 0 ? forceOffset : offset,
          limit,
          paymentStatus: status,
        }),
      );
      setTransactions((prev) => [...prev, ...(data.content || [])]);
      setPageable(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (parentId) {
      fetchTransactions({ parentId, maxDate, minDate, status, forceOffset: 0 });
      setTransactions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, maxDate, minDate]);

  useEffect(() => {
    if (parentId) {
      fetchTransactions({ parentId, maxDate, minDate, status });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentId, fetch, offset, limit]);

  return {
    loading,
    transactions,
    refetchTransactions,
    limit,
    setOffset,
    setLimit,
    totalElements,
    page,
    pageOptions,
    lastPage,
    infiniteScrollCallback,
  };
};

export default useTransactionsByParentFetch;
