import React from 'react';
import { IButtonProps } from './types';
import { Button } from './styled';

const ButtonComponent: React.FC<IButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
