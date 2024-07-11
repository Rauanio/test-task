import { Campaign, CampaignResponse } from '@shared/types/Campaign';
import {
  CREATE_CAMPAIGNS,
  DELETE_CAMPAIGNS,
  GET_CAMPAIGNS,
  GET_CAMPAIGNS_BY_ID,
  UPDATE_CAMPAIGNS,
} from './CampaignActions';
import { CampaignAction } from './types/CampaignAction.types';

export interface CampaignState {
  campaigns: CampaignResponse | null;
  selectedCampaign: Campaign;
}

const initialState: CampaignState = {
  campaigns: null,
  selectedCampaign: {} as Campaign,
};

export const campaignReducer = (
  state = initialState,
  action: CampaignAction
): CampaignState => {
  switch (action.type) {
    case GET_CAMPAIGNS: {
      return {
        ...state,
        campaigns: action.payload,
      };
    }
    case GET_CAMPAIGNS_BY_ID: {
      return {
        ...state,
        selectedCampaign: action.payload,
      };
    }
    case CREATE_CAMPAIGNS: {
      const newCampaign = state.campaigns
        ? [...state.campaigns.data, action.payload]
        : [action.payload];
      return { ...state, campaigns: { ...state.campaigns, data: newCampaign } };
    }
    case UPDATE_CAMPAIGNS: {
      const updatedCampaigns = state.campaigns?.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      return {
        ...state,
        campaigns: { ...state.campaigns, data: updatedCampaigns as Campaign[] },
      };
    }
    case DELETE_CAMPAIGNS: {
      const updatedCampaignsDelete = state.campaigns
        ? state.campaigns.data.filter(
            (campaign) => campaign.id !== action.payload
          )
        : [];
      return {
        ...state,
        campaigns: { ...state.campaigns, data: updatedCampaignsDelete },
      };
    }
    default:
      return state;
  }
};

export default campaignReducer;
