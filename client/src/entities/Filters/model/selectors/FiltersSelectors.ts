import { RootState } from '@app/storeProvider/config/store';

export const pageSelector = (state: RootState) => state.filters.page;
export const perPageSelector = (state: RootState) => state.filters.perPage;
export const searchSelector = (state: RootState) => state.filters.search;
export const sortSelector = (state: RootState) => state.filters.sort;
