import React from 'react';
import { Wrapper, TextBlock, ImgBlock, Text, Title, StyledBanner } from './styled';
import { IconBanner } from '../../../components/icons/iconBanner';

export const Banner = () => {
  return (
    <Wrapper>
      <TextBlock>
        <Title>Инвестируйте в зелёное будущее Кыргызстана</Title>
        <Text>
          и зарабатывайте 16% годовых благодаря <br />
          Зеленым облигациям DOSCREDOBANK
        </Text>
      </TextBlock>
      <ImgBlock>
        <StyledBanner />
      </ImgBlock>
    </Wrapper>
  );
};
