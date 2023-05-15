import React from 'react';
import {
  ProductBenefitsTitle,
  ProductBenefitsCard,
  ProductBenefitsGrid,
  ProductBenefitsContainer,
  ProductBenefitsWrapper,
} from './styled';

const imagesUrls = {
  electricCars: 'src/components/icons/electricCars.svg',
  solarPanels: 'src/components/icons/solarPanels.svg',
  dripIrrigation: 'src/components/icons/dripIrrigation.svg',
  ecoHouse: 'src/components/icons/ecoHouse.svg',
  ecoAgro: 'src/components/icons/ecoAgro.svg',
  ecoTourism: 'src/components/icons/ecoTourism.svg',
};

const { electricCars, solarPanels, dripIrrigation, ecoAgro, ecoHouse, ecoTourism } = imagesUrls;

export const Purposes = () => {
  return (
    <ProductBenefitsWrapper>
      <ProductBenefitsContainer>
        <ProductBenefitsTitle>
          Внесите свой вклад в устойчивое развитие страны <span>и получайте стабильный доход</span>
        </ProductBenefitsTitle>
        <ProductBenefitsGrid>
          <ProductBenefitsCard backgroundImage={electricCars}>
            <h2>Электрические автомобили</h2>
          </ProductBenefitsCard>
          <ProductBenefitsCard backgroundImage={solarPanels}>
            <h2>
              Солнечные
              <br /> панели
            </h2>
          </ProductBenefitsCard>
          <ProductBenefitsCard backgroundImage={dripIrrigation}>
            <h2>
              Капельное
              <br /> орошение
            </h2>
          </ProductBenefitsCard>
          <ProductBenefitsCard backgroundImage={ecoHouse}>
            <h2>Экодом</h2>
          </ProductBenefitsCard>
          <ProductBenefitsCard backgroundImage={ecoAgro}>
            <h2>Эко агро</h2>
          </ProductBenefitsCard>
          <ProductBenefitsCard backgroundImage={ecoTourism}>
            <h2>Эко туризм</h2>
          </ProductBenefitsCard>
        </ProductBenefitsGrid>
      </ProductBenefitsContainer>
    </ProductBenefitsWrapper>
  );
};
