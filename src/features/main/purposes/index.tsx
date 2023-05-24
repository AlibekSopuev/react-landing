import React from 'react';
import {
  ProductBenefitsTitle,
  ProductBenefitsGrid,
  ProductBenefitsContainer,
  ProductBenefitsWrapper,
  Card,
} from './styled';
import { IconDripIrrigation } from '../../../components/icons/iconDripIrrigation';
import { IconElectricCars } from '../../../components/icons/iconElectricCars';
import { IconEcoAgro } from '../../../components/icons/iconEcoAgro';
import { IconEcoHouse } from '../../../components/icons/iconEcoHouse';
import { IconSolarPanels } from '../../../components/icons/iconSolarPanels';
import { IconEcoTourism } from '../../../components/icons/iconEcoTourism';

export const Purposes = () => {
  return (
    <ProductBenefitsWrapper>
      <ProductBenefitsContainer>
        <ProductBenefitsTitle>Вы инвестируете в эко - проекты страны</ProductBenefitsTitle>
        <ProductBenefitsGrid>
          <Card>
            <h2>Электрокары</h2>
            <IconElectricCars />
          </Card>
          <Card>
            <h2>
              Солнечные
              <br /> панели
            </h2>
            <IconSolarPanels />
          </Card>
          <Card>
            <h2>
              Капельное
              <br /> орошение
            </h2>
            <IconDripIrrigation />
          </Card>
          <Card>
            <h2>Экодом</h2>
            <IconEcoHouse />
          </Card>
          <Card>
            <h2>Эко агро</h2>
            <IconEcoAgro />
          </Card>
          <Card>
            <h2>Эко туризм</h2>
            <IconEcoTourism />
          </Card>
        </ProductBenefitsGrid>
      </ProductBenefitsContainer>
    </ProductBenefitsWrapper>
  );
};
