import React from 'react';
import {
  DesktopLogoCover,
  Header,
  HeaderBottom,
  RightContent,
  PhoneNumber,
  Container,
  StyledLangSwitcher,
  HeaderTop,
  LogoTop,
  LogoWrapper,
  StyledDCBGreen,
  StyledInitKyrgyz,
  StyledInitEn,
  StyledInitRu,
} from './styled';
import { IconLogo } from '../../../components/icons/iconLogo';
import { IconSentiLogo } from '../../../components/icons/iconSentiLogo';
import { useDeviceDetected } from '../../../core/hooks/useDeviceDetected';
import { IconDCBGreen } from '../../../components/icons/iconDCBGreen';
import { useTranslation } from 'react-i18next';
import { IconInitiativeKyrgyz } from '../../../components/icons/iconInitiativeKyrgyz';
import { IconInitiativeEn } from '../../../components/icons/iconInitiativeEn';
import { IconInitiativeRu } from '../../../components/icons/iconInitiativeRu';

export const AppHeader = () => {
  const { i18n } = useTranslation();
  const isMobile = useDeviceDetected();
  return (
    <Header>
      {isMobile && (
        <HeaderTop>
          <LogoTop>
            <IconSentiLogo />
            <PhoneNumber href='tel:+996700610025'>0 (700) 61 00 25</PhoneNumber>
          </LogoTop>
        </HeaderTop>
      )}
      <Container>
        <HeaderBottom>
          <DesktopLogoCover>
            <LogoWrapper>
              <StyledDCBGreen />
              {i18n.language === 'kyrgyz' && <StyledInitKyrgyz />}
              {i18n.language === 'eng' && <StyledInitEn />}
              {i18n.language === 'rus' && <StyledInitRu />}
            </LogoWrapper>
            {!isMobile && (
              <RightContent>
                <IconSentiLogo />
                <PhoneNumber href='tel:+996700610025'>0 (700) 61 00 25</PhoneNumber>
              </RightContent>
            )}
          </DesktopLogoCover>
          {!isMobile && <StyledLangSwitcher />}
        </HeaderBottom>
      </Container>
    </Header>
  );
};
