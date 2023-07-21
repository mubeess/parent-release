import { TermDto, TermRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useMemo, useState } from 'react';

interface IProps {
  studentId?: string;
}

const useTermAttendedByStudentGet = ({ studentId }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [terms, setTerms] = useState<TermDto[]>([]);

  const termOptions = useMemo(
    () =>
      terms.map((term) => ({
        term_id: term.term_id,
        value: term.term_id,
        name: term.school_term_definition?.name,
        session: term.session?.id,
        label: `${term.school_term_definition?.name}`,
        order: term.school_term_definition?.definition_order,
      })),
    [terms],
  );

  const groupedTermsBySessions = useMemo(() => {
    const grouped: any = {};

    termOptions.forEach((item) => {
      if (item.session) {
        if (!grouped[item.session]) {
          grouped[item.session] = [item];
        } else {
          grouped[item.session] = [...grouped[item.session], item].sort(
            (a, b) => a.order - b.order,
          );
        }
      }
    });
    return grouped;
  }, [termOptions]);

  const fetchTerms = async (studentId: string) => {
    setLoading(true);
    try {
      const data = await apiWrapper(() =>
        TermRestControllerService.getTermsWithApprovedResultsUsingGet({
          studentId,
        }),
      );
      setTerms(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (studentId) {
      fetchTerms(studentId);
    }
  }, [studentId]);

  return {
    terms,
    termOptions,
    loading,
    groupedTermsBySessions,
  };
};

export default useTermAttendedByStudentGet;
