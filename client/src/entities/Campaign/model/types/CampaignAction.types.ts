import { CampaignResponse, Campaign } from '@shared/types/Campaign';
import {
  CREATE_CAMPAIGNS,
  DELETE_CAMPAIGNS,
  GET_CAMPAIGNS,
  GET_CAMPAIGNS_BY_ID,
  UPDATE_CAMPAIGNS,
} from '../CampaignActions';

export interface DeleteCampaignAction {
  type: typeof DELETE_CAMPAIGNS;
  payload: number;
}

export interface GetCampaignAction {
  type: typeof GET_CAMPAIGNS;
  payload: CampaignResponse;
}

export interface GetCampaignByIdAction {
  type: typeof GET_CAMPAIGNS_BY_ID;
  payload: Campaign;
}

export interface CreateCampaignAction {
  type: typeof CREATE_CAMPAIGNS;
  payload: Campaign;
}

export interface UpdateCampaignAction {
  type: typeof UPDATE_CAMPAIGNS;
  payload: Campaign;
}

export type CampaignAction =
  | DeleteCampaignAction
  | GetCampaignAction
  | CreateCampaignAction
  | UpdateCampaignAction
  | GetCampaignByIdAction;
