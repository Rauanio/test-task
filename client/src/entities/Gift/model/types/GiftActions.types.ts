import { Gift } from '@shared/types/Gift';
import { GET_GIFT_SUCCESS } from '../GiftActions';

export interface GetGiftAction {
  type: typeof GET_GIFT_SUCCESS;
  payload: Gift[];
}

export type GiftAction = GetGiftAction;
