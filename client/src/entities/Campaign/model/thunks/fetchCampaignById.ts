import { $api } from '@shared/api/api';
import { AppDispatch } from '@app/storeProvider/config/store';
import { getCampaignsByIdSuccess } from '../CampaignActions';

export const fetchCampaingById =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      const res = await $api.get(`/campaigns/${id}`);

      dispatch(getCampaignsByIdSuccess(res.data));
    } catch (err) {
      console.log(err);
    }
  };
