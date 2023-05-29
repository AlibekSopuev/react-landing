import React from 'react';
import {
  AdvantagesText,
  AdvantagesTitle,
  BackGround,
  Button,
  GridContainer,
  ImgContainer,
  LeftBlock,
  ProductBenefitsContainer,
  ProductBenefitsTitle,
  ProductBenefitsWrapper,
  RightBlock,
  SmallBlock,
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
        <GridContainer>
          <LeftBlock>
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
          </LeftBlock>
          <RightBlock>
            <SmallBlock>
              <ImgContainer>
                <BackGround>
                  <IconSale />
                </BackGround>
              </ImgContainer>
              <AdvantagesTitle>{t('advantages.interestRate')}</AdvantagesTitle>
              <AdvantagesText>{t('advantages.interestRateSubtitle')}</AdvantagesText>
            </SmallBlock>
            <SmallBlock>
              <ImgContainer>
                <BackGround>
                  <IconStability />
                </BackGround>
              </ImgContainer>
              <AdvantagesTitle>{t('advantages.stability')}</AdvantagesTitle>
              <AdvantagesText>{t('advantages.stabilitySubtitle')}</AdvantagesText>
            </SmallBlock>
          </RightBlock>
        </GridContainer>
      </ProductBenefitsContainer>
    </ProductBenefitsWrapper>
  );
};

export default Advantages;
