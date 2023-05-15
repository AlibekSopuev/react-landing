import React from 'react';
import {
  ProductBenefitsTitle,
  ProductBenefitsCard,
  CardText,
  CardNumbers,
  ProductBenefitsGrid,
  ProductBenefitsContainer,
  ImgContainer,
  BackGround,
  ProductBenefitsWrapper,
} from './styled';
import { IconMoneySom } from '../../../components/icons/moneySom';
import { IconSecurities } from '../../../components/icons/iconSecurities';
import { IconMoneyBag } from '../../../components/icons/iconMoneyBag';
import { IconDeadline } from '../../../components/icons/iconDeadline';
import { IconIncome } from '../../../components/icons/iconIncome';
import { IconPerсent } from '../../../components/icons/iconPercent';

export const ProductBenefits = () => {
  return (
    <ProductBenefitsWrapper>
      <ProductBenefitsContainer>
        <ProductBenefitsTitle>Инвестируйте на выгодных условиях</ProductBenefitsTitle>
        <ProductBenefitsGrid>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconMoneySom />
              </BackGround>
            </ImgContainer>
            <CardText>Номинальная стоимость</CardText>
            <CardNumbers>1000 сом</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconSecurities />
              </BackGround>
            </ImgContainer>
            <CardText>Количество ценных бумаг</CardText>
            <CardNumbers>85 000</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconMoneyBag />
              </BackGround>
            </ImgContainer>
            <CardText>Обьем выпуска</CardText>
            <CardNumbers>85 000 000 сом</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconDeadline />
              </BackGround>
            </ImgContainer>
            <CardText>Срок обращения</CardText>
            <CardNumbers>3 года</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconIncome />
              </BackGround>
            </ImgContainer>
            <CardText>Доходность годовых</CardText>
            <CardNumbers>16% </CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconPerсent />
              </BackGround>
            </ImgContainer>
            <CardText>Выплата процентов</CardText>
            <CardNumbers>каждые 3 месяца</CardNumbers>
          </ProductBenefitsCard>
        </ProductBenefitsGrid>
      </ProductBenefitsContainer>
    </ProductBenefitsWrapper>
  );
};
