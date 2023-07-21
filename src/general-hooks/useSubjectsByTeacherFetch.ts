import { SubjectDto, SubjectRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentTerm } from 'redux/configuration/selector';
import { useAppSelector } from 'redux/hooks/useAppSelector';
import { select_super_admin } from 'redux/privileges/selectors';
import useAllSubjectsFetch from './useAllSubjectsFetch';

const useSubjectsByTeacherFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [subjectsByTeacher, setSubjectByTeacher] = useState<SubjectDto[]>([]);
  const currentUser = useAppSelector((state) => state.users.currentUser);
  const currentTerm = useSelector(selectCurrentTerm);
  const isSuperAdmin = useSelector(select_super_admin);

  const { subjects, loading: loadingSubjects } = useAllSubjectsFetch();

  const fetchSubjectsByTeacher = useCallback(
    async (id: string = currentUser?.id) => {
      setLoading(true);
      try {
        const data = await apiWrapper(() =>
          SubjectRestControllerService.getFilteredSubjectsByTeacherUsingGet({
            staffId: id,
            termId: currentTerm,
          }),
        );
        setSubjectByTeacher(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        handleError(error);
      }
    },
    [currentUser, currentTerm],
  );

  useEffect(() => {
    fetchSubjectsByTeacher();
  }, [fetchSubjectsByTeacher]);

  return {
    loading: loading || loadingSubjects,
    fetchSubjectsByTeacher,
    subjectsByTeacher: isSuperAdmin ? subjects : subjectsByTeacher,
  };
};

export default useSubjectsByTeacherFetch;
