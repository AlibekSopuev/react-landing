import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper, TextBlock, ImgBlock, Text, Title } from './styled';
import BannerImage from 'src/assets/icons/bannerImage.png';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TextBlock>
        <Title>{t('banner.title')}</Title>
        <Text>{t('banner.subtitle')}</Text>
      </TextBlock>
      <ImgBlock>
        <img src={BannerImage} alt='' />
      </ImgBlock>
    </Wrapper>
  );
};

export default Banner;
