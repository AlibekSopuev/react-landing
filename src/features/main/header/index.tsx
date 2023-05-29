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
import { IconSentiLogo } from '../../../components/icons/iconSentiLogo';
import { useDeviceDetected } from '../../../core/hooks/useDeviceDetected';
import { useTranslation } from 'react-i18next';

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
          <StyledLangSwitcher />
        </HeaderBottom>
      </Container>
    </Header>
  );
};
