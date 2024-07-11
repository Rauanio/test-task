import { CampaignResponse, Campaign } from '@shared/types/Campaign';
import { CampaignAction } from './types/CampaignAction.types';

export const GET_CAMPAIGNS = 'GET_CAMPAIGNST';
export const GET_CAMPAIGNS_BY_ID = 'GET_CAMPAIGNST_BY_ID';
export const CREATE_CAMPAIGNS = 'CREATE_CAMPAIGNS';
export const UPDATE_CAMPAIGNS = 'UPDATE_CAMPAIGNS';
export const DELETE_CAMPAIGNS = 'DELETE_CAMPAIGNS';

export const getCampaignsSuccess = (
  data: CampaignResponse
): CampaignAction => ({
  type: GET_CAMPAIGNS,
  payload: data,
});

export const getCampaignsByIdSuccess = (data: Campaign): CampaignAction => ({
  type: GET_CAMPAIGNS_BY_ID,
  payload: data,
});

export const createCampaignSuccess = (campaign: Campaign): CampaignAction => ({
  type: CREATE_CAMPAIGNS,
  payload: campaign,
});

export const deleteCampaignSuccess = (id: number): CampaignAction => ({
  type: DELETE_CAMPAIGNS,
  payload: id,
});

export const updateCampaignSuccess = (campaign: Campaign): CampaignAction => ({
  type: UPDATE_CAMPAIGNS,
  payload: campaign,
});
