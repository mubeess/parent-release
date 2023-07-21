import useAllExisitingTermsFetch from 'general-hooks/useAllExistingTermsFetch';
import { useSelector } from 'react-redux';
import { selectCurrentTermObject } from 'redux/configuration/selector';

interface IProps {
  lastOfPreviousSession?: boolean;
}

const usePreviousTermGet = ({ lastOfPreviousSession }: IProps) => {
  const presentTerm = useSelector(selectCurrentTermObject);
  const { terms: allTerms } = useAllExisitingTermsFetch();

  const getLastTermOfPreviousSession = () => {
    const previousSession = presentTerm
      ? `${parseInt(presentTerm?.session?.split('-')[0]) - 1}`
      : undefined;
    const previousTerms = allTerms
      .filter((term) => term?.session?.id?.split('-')[0] === previousSession)
      .sort(
        (a, b) =>
          (b?.school_term_definition?.definition_order || 0) -
          (a?.school_term_definition?.definition_order || 0),
      );

    const previousTerm = previousTerms.length ? previousTerms[0] : undefined;

    const term = previousTerm
      ? {
          id: previousTerm?.term_id,
          name: previousTerm?.school_term_definition?.name,
          session: previousTerm?.session?.id,
          school_term_definition: previousTerm?.school_term_definition,
        }
      : presentTerm;

    const termText = previousTerm
      ? `${previousTerm?.session?.id} ${previousTerm?.school_term_definition?.name}`
      : `${presentTerm.session} Session - ${presentTerm.name}`;

    return {
      termText,
      term,
    };
  };

  const getPreviousTerm = () => {
    let previousTerm;
    if (presentTerm?.school_term_definition?.definition_order === 1) {
      previousTerm = getLastTermOfPreviousSession().term;
    } else {
      previousTerm = allTerms
        .filter((term) => term?.session?.id === presentTerm?.session)
        .find(
          (item) =>
            item.school_term_definition?.definition_order ===
            presentTerm?.school_term_definition?.definition_order - 1,
        );
    }
    const term = previousTerm
      ? {
          id: previousTerm?.term_id,
          name: previousTerm?.school_term_definition?.name,
          session: previousTerm?.session?.id,
          school_term_definition: previousTerm?.school_term_definition,
        }
      : presentTerm;

    const termText = previousTerm
      ? `${previousTerm?.session?.id} ${previousTerm?.school_term_definition?.name}`
      : `${presentTerm.session} Session - ${presentTerm.name}`;

    return {
      termText,
      term,
    };
  };

  const result = lastOfPreviousSession ? getLastTermOfPreviousSession() : getPreviousTerm();

  return result;
};

export default usePreviousTermGet;
