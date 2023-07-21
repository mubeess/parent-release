import { TermDto } from '@safsims/generated';
import { useAppSelector } from '@safsims/redux/hooks/useAppSelector';
import { SelectOptionType } from '@safsims/utils/types';
import { useEffect, useMemo, useState } from 'react';

import useAllTermsGet from './useAllTermsGet';

interface IProps {
  terms?: TermDto[];
  defaultSelected?: SelectOptionType;
  urlTermId?: string;
}

const useGroupTermsBySessions = ({ terms, defaultSelected, urlTermId }: IProps) => {
  const { terms: allTerms, loading } = useAllTermsGet();
  const urlTerm = allTerms.find((term) => term.term_id === urlTermId);
  const currentTermDTO = useAppSelector((state) => state.configuration.currentTerm);
  const termList = terms ? terms : allTerms;

  const [selectedTerm, setSelectedTerm] = useState<SelectOptionType>(
    defaultSelected || {
      label: `${currentTermDTO?.school_term_definition?.name}`,
      value: currentTermDTO,
    },
  );
  const [sessionValue, setSessionValue] = useState<SelectOptionType>(
    defaultSelected
      ? {
          label: defaultSelected?.value.session?.id || '',
          value: defaultSelected,
        }
      : {
          label: currentTermDTO?.session?.id || '',
          value: currentTermDTO,
        },
  );

  const [selectTermOptions, setSelectTermOptions] = useState<any>([]);

  useEffect(() => {
    if (urlTerm) {
      setSelectedTerm({
        label: `${urlTerm?.school_term_definition?.name}`,
        value: urlTerm,
      });
    }

    const session = urlTerm ? urlTerm.session?.id : currentTermDTO?.session?.id;
    const list = termList?.filter((term) => term.session?.id === session);
    setSelectTermOptions(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termList, urlTerm]);

  const groupedTermsBySessions = useMemo(() => {
    const grouped: any = {};

    termList.forEach((item) => {
      if (item.session) {
        if (!grouped[item.session!.id!]) {
          grouped[item.session!.id!] = [item];
        } else {
          grouped[item.session!.id!] = [...grouped[item.session!.id!], item].sort(
            (a, b) =>
              a.school_term_definition?.definition_order -
              b.school_term_definition?.definition_order,
          );
        }
      }
    });
    return grouped;
  }, [termList]);

  return {
    groupedTermsBySessions,
    selectedTerm,
    setSelectedTerm,
    selectTermOptions,
    setSelectTermOptions,
    sessionValue,
    setSessionValue,
    allTerms,
    loading,
    currentTermDTO,
  };
};

export default useGroupTermsBySessions;
