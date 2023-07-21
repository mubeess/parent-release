import { SubjectDto, SubjectRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const useAllSubjectsFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [subjects, setSubjects] = useState<SubjectDto[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [debouncedSearchText] = useDebounce(searchText, 300);

  const fetchSubjects = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        SubjectRestControllerService.getAllSubjectsUsingGet({
          search: debouncedSearchText,
        }),
      );
      setSubjects(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  }, [debouncedSearchText]);

  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]);

  return {
    loading,
    fetchSubjects,
    subjects,
    searchText,
    setSearchText,
    setSubjects,
  };
};

export default useAllSubjectsFetch;
