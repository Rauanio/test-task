import { Gift } from '@shared/types/Gift';
import cls from './Gift.module.scss';
import { formatDate } from '@shared/lib/utils/formatDate';
import { declension } from '@shared/lib/utils/declension';

interface GiftItemProps {
  onSelectGift: (gift: Gift) => void;
  gift: Gift;
}

export const GiftItem = ({ gift, onSelectGift }: GiftItemProps) => {
  return (
    <div onClick={() => onSelectGift(gift)} className={cls.card}>
      <p className={cls.item}>
        Название подарка: <span>{gift.name}</span>
      </p>
      <p className={cls.item}>
        кол-во оставшихся подарков:{' '}
        <span>
          {gift.quantity}{' '}
          {declension(gift.quantity, ['штука', 'штуки', 'штук'])}
        </span>
      </p>
      <p className={cls.item}>
        дата сгорания подарка: <span>{formatDate(gift.expiration_date)}</span>
      </p>
      <p className={cls.item}>
        наминал подарка: <span>{gift.value}</span>
      </p>
    </div>
  );
};
