import { Sort } from '@shared/types/Filters';
import { SET_PAGE, SET_PER_PAGE, SET_SEARCH, SET_SORT } from './FiltersActions';
import { FiltersAction } from './types/FiltersActions.types';

export interface FiltersState {
  page: number;
  perPage: number;
  search: string;
  sort: Sort;
}

const initialState: FiltersState = {
  page: 1,
  perPage: 5,
  search: '',
  sort: 'asc',
};

export const filtersReducer = (
  state = initialState,
  action: FiltersAction
): FiltersState => {
  switch (action.type) {
    case SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case SET_PER_PAGE: {
      return {
        ...state,
        perPage: action.payload,
      };
    }
    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case SET_SORT: {
      return {
        ...state,
        sort: action.payload,
      };
    }
    default:
      return state;
  }
};

export default filtersReducer;
