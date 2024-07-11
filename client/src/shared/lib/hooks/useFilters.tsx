import { useMemo } from 'react';
import { useAppSelector } from './uesAppSelector';
import {
  pageSelector,
  perPageSelector,
  searchSelector,
  sortSelector,
} from '@entities/Filters';
import { useDebounce } from './useDebounce';

export const useFilters = () => {
  const page = useAppSelector(pageSelector);
  const perPage = useAppSelector(perPageSelector);
  const sort = useAppSelector(sortSelector);
  const search = useAppSelector(searchSelector);

  const debouncedSearch = useDebounce(search, 500);

  const filters = useMemo(
    () => ({
      page,
      search: debouncedSearch,
      perPage,
      sort,
    }),
    [page, debouncedSearch, perPage, sort]
  );

  return filters;
};
