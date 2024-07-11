import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary' | 'outline' | 'destructive' | 'ghost';
  disabled?: boolean;
}

export const Button = ({
  className,
  variant = 'primary',
  disabled,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(cls.button, [className, cls[variant]], {
        [cls.disabled]: disabled,
      })}
      {...restProps}
    />
  );
};
