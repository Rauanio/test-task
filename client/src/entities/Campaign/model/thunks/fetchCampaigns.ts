import { $api } from '@shared/api/api';
import { AppDispatch } from '@app/storeProvider/config/store';
import { getCampaignsSuccess } from '../CampaignActions';
import { Filters } from '@shared/types/Filters';

export const fetchCampaings =
  (filters: Filters) => async (dispatch: AppDispatch) => {
    const { search, page, perPage, sort } = filters;
    try {
      const res = await $api.get(
        `/campaigns?search=${search}&page=${page}&perPage=${perPage}&sort=${sort}`
      );

      dispatch(getCampaignsSuccess(res.data));
    } catch (err) {
      console.log(err);
    }
  };
