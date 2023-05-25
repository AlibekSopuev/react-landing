import React from 'react';
import {
  CardsWrapper,
  ImageWrapper,
  Title,
  Container,
  Wrapper,
  Card,
  CardTitle,
  IconBlock,
  TextBlock,
  CardText,
} from './styled';
import bulbImage from 'src/assets/icons/bulb.png';
import { IconFirst } from '../../../components/icons/iconFirst';
import { IconSecond } from '../../../components/icons/iconSecond';
import { IconThird } from '../../../components/icons/iconThird';
import { useTranslation } from 'react-i18next';

const Instructions = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>
        {t('instructions.title')}
        <span> {t('instructions.subtitle')}</span>
      </Title>
      <Container>
        <ImageWrapper>
          <img src={bulbImage} alt='' />
        </ImageWrapper>
        <CardsWrapper>
          <Card>
            <IconBlock>
              <IconFirst />
            </IconBlock>
            <TextBlock>
              <CardTitle>{t('instructions.consultation')}</CardTitle>
              <CardText>{t('instructions.consultationSubtitle')}</CardText>
            </TextBlock>
          </Card>
          <Card>
            <IconBlock>
              <IconSecond />
            </IconBlock>
            <TextBlock>
              <CardTitle>{t('instructions.invest')}</CardTitle>
              <CardText>{t('instructions.investSubtitle')}</CardText>
            </TextBlock>
          </Card>
          <Card>
            <IconBlock>
              <IconThird />
            </IconBlock>
            <TextBlock>
              <CardTitle>{t('instructions.ecoInvestor')}</CardTitle>
              <CardText>{t('instructions.ecoInvestorSubtitle')}</CardText>
            </TextBlock>
          </Card>
        </CardsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Instructions;
