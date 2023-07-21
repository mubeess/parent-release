import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { SubjectDto, SubjectRestControllerService } from '../generated';
import { handleError } from '../utils/utils';

const useSubjectsFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [subjects, setSubject] = useState<SubjectDto[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [debouncedSearchText] = useDebounce(searchText, 300);

  const fetchSubjects = useCallback(async () => {
    setLoading(true);
    try {
      const data = await SubjectRestControllerService.getAllSubjectsUsingGet({
        search: debouncedSearchText,
      });
      setSubject(data);
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
  };
};

export default useSubjectsFetch;
