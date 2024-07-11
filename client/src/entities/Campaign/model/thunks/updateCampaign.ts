import { $api } from '@shared/api/api';
import { AppDispatch } from '@app/storeProvider/config/store';
import { updateCampaignSuccess } from '../CampaignActions';
import { Campaign } from '@shared/types/Campaign';
import toast from 'react-hot-toast';

export const updateCampaign =
  (data: Campaign) => async (dispatch: AppDispatch) => {
    console.log(data, 'DATAT');

    try {
      const res = await $api.put(`/campaigns/update/${data.id}`, data);

      if (res.data.status === 'Success') {
        toast.success(res.data.message);
        dispatch(updateCampaignSuccess(data));
      }else {
        toast.error('Ошибка редактирования акций')
      }
    } catch (err) {
      console.log(err);
    }
  };
