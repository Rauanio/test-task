import { Sort } from '@shared/types/Filters';
import {
  SET_PAGE,
  SET_PER_PAGE,
  SET_SEARCH,
  SET_SORT,
} from '../FiltersActions';

export interface SetPageAction {
  type: typeof SET_PAGE;
  payload: number;
}

export interface SetPerPageAction {
  type: typeof SET_PER_PAGE;
  payload: number;
}

export interface SetSearchAction {
  type: typeof SET_SEARCH;
  payload: string;
}

export interface SetSortAction {
  type: typeof SET_SORT;
  payload: Sort;
}

export type FiltersAction =
  | SetPageAction
  | SetPerPageAction
  | SetSearchAction
  | SetSortAction;
