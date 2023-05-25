import React, { FC } from 'react';

import { ModalWrapper, ModalBackDrop, ModalContent, ModalHeader, ModalAction, StyledCrossIcon } from './style';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: JSX.Element[] | JSX.Element | React.ReactNode;
}

const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <ModalWrapper className={'fadeIn'}>
      <ModalBackDrop onClick={onClose} />
      <ModalContent>
        <StyledCrossIcon onClick={onClose} />
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
