import { RootState } from '@app/storeProvider/config/store';

export const giftSelector = (state: RootState) => state.gifts.gifts;
