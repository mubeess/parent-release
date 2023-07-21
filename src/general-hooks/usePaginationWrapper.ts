import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

interface IProps {
  data?: any;
}

const pageOptions = [
  { value: 10, label: '10 Rows' },
  { value: 20, label: '20 Rows' },
  { value: 50, label: '50 Rows' },
];

const usePaginationWrapper = () => {
  const [pageable, setPageable] = useState<any>();
  const [last, setLast] = useState<boolean>(false);
  const [first, setFirst] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [numberOfElements, setNumberOfElements] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>('');
  const [debouncedSearchText] = useDebounce(searchText, 300);

  // You can use the content here for infinite scroll
  const [content, setContent] = useState<any[]>([]);

  const infiniteScrollCallback = useCallback(() => {
    if (!last) setOffset((prev) => prev + 1);
  }, [last]);

  const resetPagination = () => {
    setOffset(0);
    setLimit(10);
  };

  useEffect(() => {
    if (pageable) {
      setLast(pageable.last);
      setFirst(pageable.first);
      setTotalElements(pageable.total_elements);
      setTotalPages(pageable.total_pages);
      setNumberOfElements(pageable.number_of_elements);
      setPage(pageable.number + 1);
      setContent((prev) => [...prev, ...(pageable.content || [])]);
    }
  }, [pageable]);

  useEffect(() => {
    setOffset(0);
    setLimit(10);
    setContent([]);
  }, [debouncedSearchText]);

  return {
    limit,
    offset,
    setOffset,
    setLimit,
    lastPage: last,
    firstPage: first,
    setFirst,
    totalElements,
    totalPages,
    numberOfElements,
    setPageable,
    page,
    setPage,
    pageOptions,
    searchText,
    debouncedSearchText,
    setSearchText,
    setTotalElements,
    resetPagination,
    infiniteScrollCallback,
    content,
  };
};

export default usePaginationWrapper;
