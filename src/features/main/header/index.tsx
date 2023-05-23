import React from 'react';
import { DesktopLogoCover, Header, HeaderBottom, RightContent, PhoneNumber, Container } from './styled';
import { IconLogo } from '../../../components/icons/iconLogo';
import { IconSentiLogo } from '../../../components/icons/iconSentiLogo';
import { LangSwitcher } from '../../../components/shared/langSwitcher';

export const AppHeader = () => {
  return (
    <Header>
      <Container>
        <HeaderBottom>
          <DesktopLogoCover>
            <IconLogo />
            <RightContent>
              <IconSentiLogo />
              <PhoneNumber type='tel'>0 (700) 61 00 25</PhoneNumber>
            </RightContent>
          </DesktopLogoCover>
          <LangSwitcher />
        </HeaderBottom>
      </Container>
    </Header>
  );
};
