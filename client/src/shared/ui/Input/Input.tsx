import { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
}

export const Input = ({ className, error, label, ...inputProps }: InputProps) => {
  return (
    <div className={cls.wrapper}>
      {label && <label className={cls.label}>{label}</label>}
      <input className={clsx(cls.input, [className])} {...inputProps} />
      {error && <div className={cls.error}>{error}</div>}
    </div>
  );
};
