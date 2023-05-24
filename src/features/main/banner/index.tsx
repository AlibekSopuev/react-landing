import React from 'react';
import { Wrapper, TextBlock, ImgBlock, Text, Title, StyledBanner } from './styled';
import { useTranslation } from 'react-i18next';
import { Wrapper, TextBlock, ImgBlock, Text, Title } from './styled';
import { IconBanner } from '../../../components/icons/iconBanner';

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TextBlock>
        <Title>{t('banner.title')}</Title>
        <Text>{t('banner.subtitle')}</Text>
      </TextBlock>
      <ImgBlock>
        <IconBanner />
      </ImgBlock>
    </Wrapper>
  );
};
