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
import { IconArrowRight } from '../../../components/icons/iconArrowRight';
import { IconSafety } from '../../../components/icons/iconSafety';
import { IconSale } from '../../../components/icons/iconSale';
import { IconStability } from '../../../components/icons/iconStability';
import { useTranslation } from 'react-i18next';

const Advantages = () => {
  const { t } = useTranslation();
  return (
    <ProductBenefitsWrapper>
      <ProductBenefitsContainer>
        <ProductBenefitsTitle>{t('advantages.title')}</ProductBenefitsTitle>
        <AdvantagesGrid>
          <Item1>
            <ImgContainer>
              <BackGround>
                <IconSafety />
              </BackGround>
            </ImgContainer>
            <TextContainer>
              <AdvantagesTitle>{t('advantages.reliability')}</AdvantagesTitle>
              <AdvantagesText>
                <div>{t('advantages.reliabilitySubtitle.first')}</div>
                <div>{t('advantages.reliabilitySubtitle.second')}</div>
                <div>{t('advantages.reliabilitySubtitle.third')}</div>
                <div>{t('advantages.reliabilitySubtitle.fourth')}</div>
              </AdvantagesText>
            </TextContainer>
            <Button target='_blank' rel='noreferrer' href={'https://www.dcb.kg/ru/'}>
              {t('advantages.hrefButton')} <IconArrowRight />
            </Button>
          </Item1>
          <Item2>
            <ImgContainer>
              <BackGround>
                <IconSale />
              </BackGround>
            </ImgContainer>
            <AdvantagesTitle>{t('advantages.interestRate')}</AdvantagesTitle>
            <AdvantagesText>{t('advantages.interestRateSubtitle')}</AdvantagesText>
          </Item2>
          <Item3>
            <ImgContainer>
              <BackGround>
                <IconStability />
              </BackGround>
            </ImgContainer>
            <AdvantagesTitle>{t('advantages.stability')}</AdvantagesTitle>
            <AdvantagesText>{t('advantages.stabilitySubtitle')}</AdvantagesText>
          </Item3>
        </AdvantagesGrid>
      </ProductBenefitsContainer>
    </ProductBenefitsWrapper>
  );
};

export default Advantages;
