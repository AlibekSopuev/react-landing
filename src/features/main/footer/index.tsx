import React from 'react';
import {
  FooterCover,
  FooterBottom,
  BottomContentBox,
  BottomContentBoxTitle,
  BottomContentBoxText,
  Container,
  BankInfoBox,
  BankLicense,
  Label,
  Link,
} from './styled';
import { IconFooterLogo } from '../../../components/icons/iconFooterLogo';
import { useTranslation } from 'react-i18next';
import { IconInsta } from '../../../components/icons/iconInsta';
import { IconFacebook } from '../../../components/icons/iconFacebook';
import { IconTwit } from '../../../components/icons/iconTwit';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <FooterCover>
      <Container>
        <FooterBottom>
          <BottomContentBox>
            <BottomContentBoxTitle>
              <IconFooterLogo />
            </BottomContentBoxTitle>
            <Link target='_blank' rel='noreferrer' href={'https://www.instagram.com/doscredobank_kg/?hl=ru'}>
              <IconInsta />
            </Link>
            <Link target='_blank' rel='noreferrer' href={'https://www.facebook.com/doscredobank.kg'}>
              <IconFacebook />
            </Link>
            <Link target='_blank' rel='noreferrer' href={'https://twitter.com/doscredobank_kg'}>
              <IconTwit />
            </Link>
          </BottomContentBox>
          <BankInfoBox>
            <BankLicense>{t('footer.history')}</BankLicense>
          </BankInfoBox>
          <BottomContentBox style={{ marginRight: 0 }}>
            <Label target='_blank' rel='noreferrer' href={'https://www.dcb.kg/ru/'}>
              dcb.kg
            </Label>
            <BottomContentBoxText>{t('footer.headOffice')}</BottomContentBoxText>
            <BottomContentBoxText>720000</BottomContentBoxText>
            <BottomContentBoxText>{t('footer.republic')}</BottomContentBoxText>
            <BottomContentBoxText>{t('footer.address')}</BottomContentBoxText>
          </BottomContentBox>
        </FooterBottom>
      </Container>
    </FooterCover>
  );
};
