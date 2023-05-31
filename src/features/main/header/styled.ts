import styled, { css } from 'styled-components';
import { LangSwitcher } from '../../../components/shared/langSwitcher';
import { IconDCBGreen } from '../../../components/icons/iconDCBGreen';
import { IconInitiativeEn } from '../../../components/icons/iconInitiativeEn';
import { IconInitiativeRu } from '../../../components/icons/iconInitiativeRu';
import { IconInitiativeKyrgyz } from '../../../components/icons/iconInitiativeKyrgyz';

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  background: #fafafa;
  box-shadow: 0 16px 24px rgba(176, 176, 204, 0.08);
  z-index: 1;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      padding: 16px;
    }
  `}
`;

export const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTop = styled.div`
  background: #f2f2f2;
  box-shadow: 0 4px 24px rgba(176, 176, 204, 0.08);
  padding: 16px;
`;

export const LogoTop = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
    max-width: 70px;
  }
`;

export const DesktopLogoCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  svg {
    ${({ theme }) => css`
      @media screen and (max-width: ${theme.media.small}) {
        max-width: 250px;
      }
    `}
  }
`;

export const StyledDCBGreen = styled(IconDCBGreen)`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      width: 157px;
    }
  `}
`;

export const StyledInitEn = styled(IconInitiativeEn)`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      width: 94.15px;
    }
  `}
`;

export const StyledInitRu = styled(IconInitiativeRu)`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      width: 94.15px;
    }
  `}
`;
export const StyledInitKyrgyz = styled(IconInitiativeKyrgyz)`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      width: 94.15px;
    }
  `}
`;
export const LogoWrapper = styled.div`
  display: flex;
`;
export const PhoneNumber = styled.a`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #121112;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      font-size: 14px;
      line-height: 18px;
    }
  `}
`;

export const RightContent = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledLangSwitcher = styled(LangSwitcher)`
  margin-left: 60px;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      margin-left: 0;
    }
  `}
`;
