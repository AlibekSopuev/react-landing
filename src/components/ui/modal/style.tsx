import styled, { css } from 'styled-components';
import { IconCross } from '../../icons/iconCross';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(4px);
  z-index: 2;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      overflow: auto;
    }
  `}
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
  z-index: 2;
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
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      width: 100%;
      max-width: 429px;
      min-width: 250px;
      padding: 32px 24px;
      top: 58%;
      max-height: 760px;
      border-radius: 24px 24px 0 0;
    }
  `}
`;

export const ModalHeader = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
`;

export const ModalAction = styled.div`
  padding-top: 32px;
`;
