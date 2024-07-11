import { Gift } from '@shared/types/Gift';
import { GiftAction } from './types/GiftActions.types';
import { GET_GIFT_SUCCESS } from './GiftActions';

export interface GiftState {
  gifts: Gift[];
}

const initialState: GiftState = {
  gifts: [],
};

export const giftReducer = (
  state = initialState,
  action: GiftAction
): GiftState => {
  switch (action.type) {
    case GET_GIFT_SUCCESS: {
      return {
        ...state,
        gifts: action.payload,
      };
    }
    default:
      return state;
  }
};

export default giftReducer;
