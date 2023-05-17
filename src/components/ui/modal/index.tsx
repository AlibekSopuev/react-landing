import React, { FC } from 'react';

import { ModalWrapper, ModalBackDrop, ModalContent, ModalHeader, ModalAction, StyledCrossIcon } from './style';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: JSX.Element[] | JSX.Element | React.ReactNode;
  actionText?: string;
  submit: () => void;
  headerIcon?: JSX.Element[] | JSX.Element | React.ReactNode;
}

const Modal: FC<ModalProps> = ({ open, onClose, children, actionText, submit, headerIcon }) => {
  if (!open) return null;

  return (
    <ModalWrapper className={'fadeIn'}>
      <ModalBackDrop />
      <ModalContent>
        <StyledCrossIcon onClick={onClose} />
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
