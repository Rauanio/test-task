import { Sort } from '@shared/types/Filters';
import { FiltersAction } from './types/FiltersActions.types';

export const SET_PAGE = 'SET_PAGE';
export const SET_PER_PAGE = 'SET_PER_PAGE';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SORT = 'SET_SORT';

export const setPage = (page: number): FiltersAction => ({
  type: SET_PAGE,
  payload: page,
});

export const setPerPage = (perPage: number): FiltersAction => ({
  type: SET_PER_PAGE,
  payload: perPage,
});

export const setSearch = (search: string): FiltersAction => ({
  type: SET_SEARCH,
  payload: search,
});

export const setSort = (sort: Sort): FiltersAction => ({
  type: SET_SORT,
  payload: sort,
});
