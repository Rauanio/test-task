import { Modal } from '@ui/Modal/Modal';
import { UpdateCampaignForm } from './UpdateCampaignForm';

interface UpdateCampaignModalProps {
  openModal: boolean;
  campaignId: number;
  setOpenModal: (value: boolean) => void;
}

export const UpdateCampaignModal = ({
  openModal,
  setOpenModal,
  campaignId,
}: UpdateCampaignModalProps) => {
  return (
    <Modal
      title="Редактирование Акции"
      isOpen={openModal}
      close={() => setOpenModal(false)}
    >
      <UpdateCampaignForm setOpenModal={setOpenModal} campaignId={campaignId} />
    </Modal>
  );
};
