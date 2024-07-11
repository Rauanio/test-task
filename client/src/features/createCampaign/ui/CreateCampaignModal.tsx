import { Modal } from '@ui/Modal/Modal';
import { CreateCampaignForm } from './CreateCampaignForm';

interface CreateCampaignModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export const CreateCampaignModal = ({
  openModal,
  setOpenModal,
}: CreateCampaignModalProps) => {
  return (
    <Modal
      title="Новая Акция"
      isOpen={openModal}
      close={() => setOpenModal(false)}
    >
      <CreateCampaignForm setOpenModal={setOpenModal} />
    </Modal>
  );
};
