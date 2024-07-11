import { ReactNode } from 'react';
import { Button, ButtonProps } from '../Button/Button';

interface PageButtonProps extends ButtonProps {
  isActive: boolean;
  children: ReactNode;
}

export const PageButton = ({
  isActive,
  children,
  ...otherProps
}: PageButtonProps) => {
  return (
    <Button variant={isActive ? 'primary' : 'outline'} {...otherProps}>
      {children}
    </Button>
  );
};
