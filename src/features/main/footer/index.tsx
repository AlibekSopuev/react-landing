import React from 'react';
import {
  FooterCover,
  FooterBottom,
  BottomContentBox,
  BottomContentBoxTitle,
  BottomContentBoxText,
  Empty,
  Container,
  BankInfoBox,
  BankLicense,
} from './styled';
import { IconFooterLogo } from '../../../components/icons/iconFooterLogo';
import { IconSocialMedias } from '../../../components/icons/iconSocialMedias';

export const Footer: React.FC = () => {
  return (
    <FooterCover>
      <Container>
        <FooterBottom>
          <BottomContentBox>
            <BottomContentBoxTitle>
              <IconFooterLogo />
            </BottomContentBoxTitle>
            <IconSocialMedias />
          </BottomContentBox>
          <BankInfoBox>
            <BankLicense>1997-2023 © ОАО &quot;Дос-Кредобанк&quot; Лиц. НБКР №037 </BankLicense>
          </BankInfoBox>
          <BottomContentBox style={{ marginRight: 0 }}>
            <BottomContentBoxTitle>dcb.kg</BottomContentBoxTitle>
            <BottomContentBoxText>Головной офис</BottomContentBoxText>
            <BottomContentBoxText>720000</BottomContentBoxText>
            <BottomContentBoxText>Кыргызская Республика</BottomContentBoxText>
            <BottomContentBoxText>г. Бишкек, пр.Чуй, 92 ГУМ, 6 этаж</BottomContentBoxText>
          </BottomContentBox>
        </FooterBottom>
      </Container>
    </FooterCover>
  );
};
