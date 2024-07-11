import { $api } from '@shared/api/api';
import { AppDispatch } from '@app/storeProvider/config/store';
import { Gift } from '@shared/types/Gift';
import { getGiftSuccess } from '../GiftActions';

export const fetchGifts = () => async (dispatch: AppDispatch) => {
  try {
    const res = await $api.get<Gift[]>('/gifts');

    dispatch(getGiftSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
};
