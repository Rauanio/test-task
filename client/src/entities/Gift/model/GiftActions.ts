import { Gift } from '@shared/types/Gift';
import { GiftAction } from './types/GiftActions.types';

export const GET_GIFT_SUCCESS = 'GET_GIFT_SUCCESS';

export const getGiftSuccess = (data: Gift[]): GiftAction => ({
  type: GET_GIFT_SUCCESS,
  payload: data,
});
