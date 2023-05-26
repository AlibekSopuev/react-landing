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
} from './styled';
import { IconFooterLogo } from '../../../components/icons/iconFooterLogo';
import { IconSocialMedias } from '../../../components/icons/iconSocialMedias';
import { useTranslation } from 'react-i18next';

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
            <IconSocialMedias />
          </BottomContentBox>
          <BankInfoBox>
            <BankLicense>{t('footer.history')}</BankLicense>
          </BankInfoBox>
          <BottomContentBox style={{ marginRight: 0 }}>
            <Label href={'https://www.dcb.kg/ru/'}>dcb.kg</Label>
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
