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
} from './styled';
import { IconLogo } from '../../../components/icons/iconLogo';
import { IconSentiLogo } from '../../../components/icons/iconSentiLogo';
import { useDeviceDetected } from '../../../core/hooks/useDeviceDetected';

export const AppHeader = () => {
  const isMobile = useDeviceDetected();
  return (
    <Header>
      {isMobile && (
        <HeaderTop>
          <LogoTop>
            <IconSentiLogo />
            <PhoneNumber type='tel'>0 (700) 61 00 25</PhoneNumber>
          </LogoTop>
        </HeaderTop>
      )}
      <Container>
        <HeaderBottom>
          <DesktopLogoCover>
            <IconLogo />
            {!isMobile && (
              <RightContent>
                <IconSentiLogo />
                <PhoneNumber type='tel'>0 (700) 61 00 25</PhoneNumber>
              </RightContent>
            )}
          </DesktopLogoCover>
          {!isMobile && <StyledLangSwitcher />}
        </HeaderBottom>
      </Container>
    </Header>
  );
};
