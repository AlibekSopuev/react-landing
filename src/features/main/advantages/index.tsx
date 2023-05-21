import React from 'react';
import {
  AdvantagesGrid,
  AdvantagesText,
  AdvantagesTitle,
  BackGround,
  Button,
  ImgContainer,
  Item1,
  Item2,
  Item3,
  ProductBenefitsContainer,
  ProductBenefitsTitle,
  ProductBenefitsWrapper,
  TextContainer,
} from './styled';
import { IconDeadline } from '../../../components/icons/iconDeadline';
import { IconArrowRight } from '../../../components/icons/iconArrowRight';
import { IconSafety } from '../../../components/icons/iconSafety';
import { IconSale } from '../../../components/icons/iconSale';
import { IconStability } from '../../../components/icons/iconStability';

export const Advantages = () => {
  return (
    <ProductBenefitsWrapper>
      <ProductBenefitsContainer>
        <ProductBenefitsTitle>Преимущества</ProductBenefitsTitle>
        <AdvantagesGrid>
          <Item1>
            <ImgContainer>
              <BackGround>
                <IconSafety />
              </BackGround>
            </ImgContainer>
            <TextContainer>
              <AdvantagesTitle>Надёжность</AdvantagesTitle>
              <AdvantagesText>
                <div>Более 25 лет успешной работы на рынке банковских услуг КР</div>
                <div> 50 офисов Банка по всему Кыргызстану</div>
                <div> Более 800 сотрудников</div>
                <div> Более 450 000 довольных клиентов</div>
              </AdvantagesText>
            </TextContainer>
            <Button target='_blank' rel='noreferrer' href={'https://www.dcb.kg/ru/'}>
              Подробнее о Банке <IconArrowRight />
            </Button>
          </Item1>
          <Item2>
            <ImgContainer>
              <BackGround>
                <IconSale />
              </BackGround>
            </ImgContainer>
            <AdvantagesTitle>Высокая доходность</AdvantagesTitle>
            <AdvantagesText>16% годовых (16,98 эффективная процентная ставка)</AdvantagesText>
          </Item2>
          <Item3>
            <ImgContainer>
              <BackGround>
                <IconStability />
              </BackGround>
            </ImgContainer>
            <AdvantagesTitle>Высокая доходность</AdvantagesTitle>
            <AdvantagesText>16% годовых (16,98 эффективная процентная ставка)</AdvantagesText>
          </Item3>
        </AdvantagesGrid>
      </ProductBenefitsContainer>
    </ProductBenefitsWrapper>
  );
};
