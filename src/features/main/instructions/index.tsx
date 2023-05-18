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
  Bulb,
} from './styled';
import { IconInstruction } from '../../../components/icons/iconInstruction';
import { IconFirst } from '../../../components/icons/iconFirst';
import { IconSecond } from '../../../components/icons/iconSecond';
import { IconThird } from '../../../components/icons/iconThird';

export const Instructions = () => (
  <Wrapper>
    <Title>
      Как инвестировать в <span>Зелёные облигации? </span>
    </Title>
    <Container>
      <ImageWrapper>
        <Bulb />
      </ImageWrapper>
      <CardsWrapper>
        <Card>
          <IconBlock>
            <IconFirst />
          </IconBlock>
          <TextBlock>
            <CardTitle>Получите консультацию</CardTitle>
            <CardText>
              Вы можете обратиться в офис ФК «Сенти» или в любой офис «Дос-Кредобанк». (При себе достаточно иметь
              паспорт).
            </CardText>
          </TextBlock>
        </Card>
        <Card>
          <IconBlock>
            <IconSecond />
          </IconBlock>
          <TextBlock>
            <CardTitle>Инвестируйте</CardTitle>
            <CardText>Сотрудник банка проконсультирует Вас по всем условиям и деталям инвестирования.</CardText>
          </TextBlock>
        </Card>
        <Card>
          <IconBlock>
            <IconThird />
          </IconBlock>
          <TextBlock>
            <CardTitle>Поздравляем! Вы ответсвенный инвестор!</CardTitle>
            <CardText>
              Ваши инвестиции будут использованы для финансирования проектов, связанных с возобновляемой энергией,
              утилизацией отходов, очисткой сточных вод, органическим сельским хозяйством и другими экологически важными
              направлениями!
            </CardText>
          </TextBlock>
        </Card>
      </CardsWrapper>
    </Container>
  </Wrapper>
);
