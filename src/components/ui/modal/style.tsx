import styled from 'styled-components';
import { IconCross } from '../../icons/iconCross';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(4px);
`;

export const StyledCrossIcon = styled(IconCross)`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;

export const ModalBackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1;
`;

export const ModalContent = styled.div`
  padding: 56px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border-radius: 24px;
  min-width: 859px;
  max-width: 400px;
  text-align: center;
`;

export const ModalHeader = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
`;

export const ModalAction = styled.div`
  padding-top: 32px;
`;
