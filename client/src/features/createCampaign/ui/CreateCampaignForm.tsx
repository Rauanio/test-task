import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Gift } from '@shared/types/Gift';
import { Button } from '@ui/Button/Button';
import { Input } from '@ui/Input/Input';
import { Modal } from '@ui/Modal/Modal';
import { GiftModal } from '@entities/Gift';
import { createCampaign } from '@entities/Campaign';
import cls from './CreateCampaignForm.module.scss';

export const CreateCampaignForm = ({
  setOpenModal,
}: {
  setOpenModal: (value: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [error, setError] = useState('');
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    validateForm,
    setTouched,
    submitForm,
  } = useFormik({
    initialValues: {
      name: '',
      gift_quantity: 0,
      days_to_claim: 0,
      days_to_receive: 0,
      description: '',
      card_numbers: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Это поле обязательное'),
      gift_quantity: Yup.number()
        .min(1, 'Минимальное кол-во 1 подарок')
        .max(
          selectedGift ? selectedGift.quantity : 1,
          'Количество не может привышать больше чем оставшихся подарков'
        )
        .required('Это поле обязательное'),
      days_to_claim: Yup.number()
        .min(1, 'Минимальное кол-во 1 день')
        .required('Это обязательное поле'),
      days_to_receive: Yup.number()
        .min(1, 'Минимальное кол-во 1 день')
        .required('Это обязательное поле'),
      description: Yup.string().required('Это поле обязательное'),
      card_numbers: Yup.string()
        .matches(
          /^[0-9,]+$/,
          'Номера карт должны содержать только цифры и запятые'
        )
        .required('Это поле обязательное'),
    }),
    onSubmit: (values) => {
      if (selectedGift === null) {
        setError('Выберите подарок');
        return;
      }
      dispatch(
        createCampaign({
          ...values,
          gift_id: selectedGift ? selectedGift.id : 0,
          createdAt: new Date().toISOString(),
        })
      );
      setOpenModal(false);
    },
  });

  const onSelectGift = (gift: Gift) => {
    setSelectedGift(gift);
    setError('');
    setOpen(false);
  };

  const onOpenConfirm = async () => {
    const isValid = await validateForm();
    setTouched({
      name: true,
      gift_quantity: true,
      days_to_claim: true,
      days_to_receive: true,
      description: true,
      card_numbers: true,
    });

    if (Object.keys(isValid).length === 0 && selectedGift) {
      setOpenConfirm(true);
    } else {
      setError('Пожалуйста, заполните все поля и выберите подарок');
    }
  };

  const onCancel = () => {
    setOpenConfirm(false);
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Название рассылки"
        value={values.name}
        name="name"
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        label="Кол-во подарков"
        value={values.gift_quantity}
        name="gift_quantity"
        onChange={handleChange}
        error={errors.gift_quantity}
      />
      Выбранный подарок: {selectedGift?.name}
      <Button
        variant="outline"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        Выбрать подарок
      </Button>
      <div className={cls.error}>{error}</div>
      <Input
        label="Кол-во дней на взятие подарка"
        value={values.days_to_claim}
        name="days_to_claim"
        onChange={handleChange}
        error={errors.days_to_claim}
      />
      <Input
        label="Кол-во дней на получение подарка"
        value={values.days_to_receive}
        name="days_to_receive"
        onChange={handleChange}
        error={errors.days_to_receive}
      />
      <Input
        label="Описание акции"
        value={values.description}
        name="description"
        onChange={handleChange}
        error={errors.description}
      />
      <Input
        label="Номера карт"
        value={values.card_numbers}
        name="card_numbers"
        onChange={handleChange}
        error={errors.card_numbers}
      />
      <Button type="button" onClick={onOpenConfirm}>
        Создать
      </Button>
      <GiftModal
        isOpen={open}
        setIsOpen={setOpen}
        onSelectGift={onSelectGift}
      />
      <Modal isOpen={openConfirm} close={() => setOpenConfirm(false)}>
        <div className={cls.modal}>
          <div>Вы уверенны что хотите создать акцию ?</div>
          <div className={cls.buttons}>
            <Button onClick={() => submitForm()} type="submit">
              Создать
            </Button>
            <Button variant="outline" onClick={onCancel}>
              Отменить
            </Button>
          </div>
        </div>
      </Modal>
    </form>
  );
};
