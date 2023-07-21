import { ClassMemberRestControllerService } from '@safsims/generated';
import { ClassMemberLiteDto } from '@safsims/generated/models/ClassMemberLiteDto';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

interface IProps {
  termId: string;
  classLevelId: string;
  armId: string;
}

const useClassMemberLiteFetch = ({ termId, armId, classLevelId }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [classMembers, setClassMembers] = useState<ClassMemberLiteDto[]>([]);
  const [search, setSearch] = useState<string>('');
  const [debouncedSearchText] = useDebounce(search, 300);
  const [fetch, setFetch] = useState<number>(0);

  const refetch = () => setFetch((prev) => prev + 1);

  const fetchClassMembers = async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        ClassMemberRestControllerService.getLiteClassMembersUsingGet({
          termId,
          armId,
          classLevelId,
          search: debouncedSearchText,
        }),
      );
      setClassMembers(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (armId && classLevelId && termId) {
      fetchClassMembers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termId, armId, classLevelId, debouncedSearchText, fetch]);

  return {
    setSearch,
    search,
    classMembers,
    loading,
    refetch,
  };
};

export default useClassMemberLiteFetch;
