import { useCallback, useEffect, useState } from 'react';
import { ParentRestControllerService } from '../generated';
import { handleError } from '../utils/utils';

interface IProps {
  id?: string;
}

const useGetChildren = ({ id }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [children, setChildren] = useState<any[]>([]);

  const fetchChildren = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const data = await ParentRestControllerService.getChildrenUsingGet({
        parentId: id,
      });
      setChildren(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchChildren(id);
    }
  }, [fetchChildren, id]);

  return {
    loading,
    children,
  };
};

export default useGetChildren;
