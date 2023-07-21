import { TermDto, TermRestControllerService } from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useMemo, useState } from 'react';

interface IProps {
  studentIds?: string[];
}

const useTermAttendedByChildren = ({ studentIds }: IProps) => {
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

  const fetchTerms = async (studentIds: string[]) => {
    setLoading(true);
    try {
      const result = await Promise.all(
        studentIds.map(async (studentId) => {
          const data = await apiWrapper(() =>
            TermRestControllerService.getTermsWithApprovedResultsUsingGet({
              studentId,
            }),
          );
          return data;
        }),
      );
      const filtered = [...new Map(result.flat().map((v) => [v.term_id, v])).values()];
      setTerms(filtered);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  useEffect(() => {
    if (studentIds) {
      fetchTerms(studentIds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentIds]);

  return {
    terms,
    termOptions,
    loading,
    groupedTermsBySessions,
  };
};

export default useTermAttendedByChildren;
