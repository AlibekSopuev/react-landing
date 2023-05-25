import React from 'react';
import {
  ProductBenefitsTitle,
  ProductBenefitsGrid,
  ProductBenefitsContainer,
  ProductBenefitsWrapper,
  Card,
} from './styled';
import solarPanelsImage from 'src/assets/icons/solarPanels.png';
import electroCarImage from 'src/assets/icons/electroCar.png';
import dripIrrigation from 'src/assets/icons/dripIrrigation.png';
import ecoHouse from 'src/assets/icons/ecoHouse.png';
import ecoAgro from 'src/assets/icons/ecoAgro.png';
import ecoTourism from 'src/assets/icons/ecoTourism.png';
import { useTranslation } from 'react-i18next';

const Purposes = () => {
  const { t } = useTranslation();
  return (
    <ProductBenefitsWrapper>
      <ProductBenefitsContainer>
        <ProductBenefitsTitle>{t('purposes.title')}</ProductBenefitsTitle>
        <ProductBenefitsGrid>
          <Card>
            <h2>{t('purposes.electricCars')}</h2>
            <img src={electroCarImage} alt='' />
          </Card>
          <Card>
            <h2>{t('purposes.solarPanels')}</h2>
            <img src={solarPanelsImage} alt='' />
          </Card>
          <Card>
            <h2>{t('purposes.dripIrrigation')}</h2>
            <img src={dripIrrigation} alt='' />
          </Card>
          <Card>
            <h2>{t('purposes.energyEfficientBuilding')}</h2>
            <img src={ecoHouse} alt='' />
          </Card>
          <Card>
            <h2>{t('purposes.organicFarming')}</h2>
            <img src={ecoAgro} alt='' />
          </Card>
          <Card>
            <h2>{t('purposes.ecoTourism')}</h2>
            <img src={ecoTourism} alt='' />
          </Card>
        </ProductBenefitsGrid>
      </ProductBenefitsContainer>
    </ProductBenefitsWrapper>
  );
};

export default Purposes;
