import { $api } from '@shared/api/api';
import { AppDispatch } from '@app/storeProvider/config/store';
import { createCampaignSuccess } from '../CampaignActions';
import { Campaign } from '@shared/types/Campaign';
import toast from 'react-hot-toast';

export const createCampaign =
  (data: Campaign) => async (dispatch: AppDispatch) => {
    try {
      const res = await $api.post('/campaigns/create', data);

      if (res.data.status === 'Success') {
        toast.success(res.data.message);
        dispatch(createCampaignSuccess(data));
      } else {
        toast.error('Ошибка создания акций');
      }
    } catch (err) {
      console.log(err);
    }
  };
