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
import { useTranslation } from 'react-i18next';

export const ProductBenefits = () => {
  const { t } = useTranslation();
  return (
    <ProductBenefitsWrapper>
      <ProductBenefitsContainer>
        <ProductBenefitsTitle>{t('productBenefits.title')}</ProductBenefitsTitle>
        <ProductBenefitsGrid>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconMoneySom />
              </BackGround>
            </ImgContainer>
            <CardText>{t('productBenefits.nominalValue')}</CardText>
            <CardNumbers>1000 сом</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconSecurities />
              </BackGround>
            </ImgContainer>
            <CardText>{t('productBenefits.numberOfBonds')}</CardText>
            <CardNumbers>85 000</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconMoneyBag />
              </BackGround>
            </ImgContainer>
            <CardText>{t('productBenefits.volume')}</CardText>
            <CardNumbers>85 000 000 сом</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconDeadline />
              </BackGround>
            </ImgContainer>
            <CardText>{t('productBenefits.maturity')}</CardText>
            <CardNumbers>3 года</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconIncome />
              </BackGround>
            </ImgContainer>
            <CardText>{t('productBenefits.interestRate')}</CardText>
            <CardNumbers>{t('productBenefits.rate')}</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <IconPerсent />
              </BackGround>
            </ImgContainer>
            <CardText>{t('productBenefits.interestPayment')}</CardText>
            <CardNumbers>{t('productBenefits.period')}</CardNumbers>
          </ProductBenefitsCard>
        </ProductBenefitsGrid>
      </ProductBenefitsContainer>
    </ProductBenefitsWrapper>
  );
};
