import { ParentDto, ParentRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  id?: string;
}

const useParentGet = ({ id }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [parent, setParent] = useState<ParentDto>({});

  const fetchParent = async (id: string) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        ParentRestControllerService.getParentUsingGet({
          parentId: id,
        }),
      );
      setParent(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchParent(id);
    }
  }, [id]);

  return {
    parent,
    loadingParent: loading,
  };
};

export default useParentGet;
