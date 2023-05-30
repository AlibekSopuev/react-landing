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
import moneyBagImage from 'src/assets/icons/moneyBagImage.png';
import som from 'src/assets/icons/som.png';
import securitiesImage from 'src/assets/icons/securities.png';
import deadline from 'src/assets/icons/deadline.png';
import fire from 'src/assets/icons/fire.png';
import percent from 'src/assets/icons/percent.png';
import { useTranslation } from 'react-i18next';

const ProductBenefits = () => {
  const { t } = useTranslation();
  return (
    <ProductBenefitsWrapper>
      <ProductBenefitsContainer>
        <ProductBenefitsTitle>{t('productBenefits.title')}</ProductBenefitsTitle>
        <ProductBenefitsGrid>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <img src={som} alt='' />
              </BackGround>
            </ImgContainer>
            <CardText>{t('productBenefits.nominalValue')}</CardText>
            <CardNumbers>1000 сом</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <img src={securitiesImage} alt='' />
              </BackGround>
            </ImgContainer>
            <CardText>{t('productBenefits.numberOfBonds')}</CardText>
            <CardNumbers>85 000</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <img src={moneyBagImage} alt='' />
              </BackGround>
            </ImgContainer>
            <CardText>{t('productBenefits.volume')}</CardText>
            <CardNumbers>85 000 000 сом</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <img src={deadline} alt='' />
              </BackGround>
            </ImgContainer>
            <CardText>{t('productBenefits.maturity')}</CardText>
            <CardNumbers>3 {t('global.maturityAmount')}</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <img src={fire} alt='' />
              </BackGround>
            </ImgContainer>
            <CardText>{t('productBenefits.interestRate')}</CardText>
            <CardNumbers>{t('productBenefits.rate')}</CardNumbers>
          </ProductBenefitsCard>
          <ProductBenefitsCard>
            <ImgContainer>
              <BackGround>
                <img src={percent} alt='' />
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

export default ProductBenefits;
