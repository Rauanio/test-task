import { Modal } from '@shared/ui/Modal/Modal';
import { GiftItem } from './GiftItem';
import { giftSelector } from '../model/selectors/giftSelector';
import { useAppSelector } from '@shared/lib/hooks/uesAppSelector';
import { useDispatch } from 'react-redux';
import { fetchGifts } from '../model/thunk/fetchGifts';
import { useEffect } from 'react';
import cls from './Gift.module.scss';
import { Gift } from '@shared/types/Gift';

interface GiftModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onSelectGift: (gift: Gift) => void;
}

export const GiftModal = ({
  isOpen,
  setIsOpen,
  onSelectGift,
}: GiftModalProps) => {
  const gifts = useAppSelector(giftSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGifts());
  }, [dispatch]);

  return (
    <Modal
      title="Выберите подарок"
      isOpen={isOpen}
      close={() => setIsOpen(false)}
    >
      <div className={cls.wrapper}>
        {gifts.map((item) => (
          <GiftItem key={item.id} gift={item} onSelectGift={onSelectGift} />
        ))}
      </div>
    </Modal>
  );
};
