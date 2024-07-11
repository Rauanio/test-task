import { $api } from '@shared/api/api';
import { AppDispatch } from '@app/storeProvider/config/store';
import { deleteCampaignSuccess } from '../CampaignActions';
import toast from 'react-hot-toast';

export const deleteCampaings =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      const res = await $api.delete(`/campaigns/delete/${id}`);

      if (res.data.status === 'Success') {
        toast.success(res.data.message);
        dispatch(deleteCampaignSuccess(id));
      } else {
        toast.error('Ошибка удаления акций')
      }
    } catch (err) {
      console.log(err);
    }
  };
