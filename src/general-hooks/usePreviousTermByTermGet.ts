import useAllTermsGet from './useAllTermsGet';

interface IProps {
  termId: string;
}

const usePreviousTermByTermGet = ({ termId }: IProps) => {
  const { terms: allTerms } = useAllTermsGet();
  const termDto = allTerms.find((item) => item.term_id === termId);

  const previousTerm = allTerms.find(
    (item) =>
      item.session?.id === termDto?.session?.id &&
      item.school_term_definition?.definition_order ===
        (termDto?.school_term_definition?.definition_order || 0) - 1,
  );
  return {
    previousTerm,
  };
};

export default usePreviousTermByTermGet;
