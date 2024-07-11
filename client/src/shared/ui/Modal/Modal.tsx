import { ReactNode } from 'react';
import { Dialog } from '@headlessui/react';
import cls from './Modal.module.scss';
import clsx from 'clsx';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  close: () => void;
  title?: string;
  children: ReactNode;
}

export const Modal = ({
  isOpen,
  close,
  title,
  children,
  className,
}: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className={clsx(cls.modal, [className])}
      onClose={close}
    >
      <Dialog.Backdrop className={cls.overlay} />
      <div className={cls.wrapper}>
        <div className={cls.content}>
          <Dialog.Panel className={cls.panel}>
            <Dialog.Title className={cls.title}>{title}</Dialog.Title>
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
