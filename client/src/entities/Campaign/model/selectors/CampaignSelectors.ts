import { RootState } from '@app/storeProvider/config/store';

export const campaignSelector = (state: RootState) => state.campaigns.campaigns;
export const selectedCampaignSelector = (state: RootState) =>
  state.campaigns.selectedCampaign;
