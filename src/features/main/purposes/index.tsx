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
import { useTranslation } from 'react-i18next';

export const Purposes = () => {
  const { t } = useTranslation();
  return (
    <ProductBenefitsWrapper>
      <ProductBenefitsContainer>
        <ProductBenefitsTitle>{t('purposes.title')}</ProductBenefitsTitle>
        <ProductBenefitsGrid>
          <Card>
            <h2>{t('purposes.electricCars')}</h2>
            <IconElectricCars />
          </Card>
          <Card>
            <h2>{t('purposes.solarPanels')}</h2>
            <IconSolarPanels />
          </Card>
          <Card>
            <h2>{t('purposes.dripIrrigation')}</h2>
            <IconDripIrrigation />
          </Card>
          <Card>
            <h2>{t('purposes.energyEfficientBuilding')}</h2>
            <IconEcoHouse />
          </Card>
          <Card>
            <h2>{t('purposes.organicFarming')}</h2>
            <IconEcoAgro />
          </Card>
          <Card>
            <h2>{t('purposes.ecoTourism')}</h2>
            <IconEcoTourism />
          </Card>
        </ProductBenefitsGrid>
      </ProductBenefitsContainer>
    </ProductBenefitsWrapper>
  );
};
