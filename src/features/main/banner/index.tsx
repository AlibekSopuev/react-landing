import React from 'react';
import { Wrapper, TextBlock, ImgBlock, Text, Title, StyledBanner } from './styled';
import { useTranslation } from 'react-i18next';

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TextBlock>
        <Title>{t('banner.title')}</Title>
        <Text>{t('banner.subtitle')}</Text>
      </TextBlock>
      <ImgBlock>
        <StyledBanner />
      </ImgBlock>
    </Wrapper>
  );
};
