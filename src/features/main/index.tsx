import React from 'react';
import { IconPaymentCard } from 'src/components/icons/creditCard';
import { IconMoneySom } from 'src/components/icons/moneySom';
import { IconCoins } from 'src/components/icons/coins';
import { InvestmentSlider } from 'src/components/shared/investmentSlider';
import { HeaderText, Sections } from './styled';
import SectionCard from './sectionCard';

export default function () {
  const handleSectionClick = (section: 'cards' | 'credits' | 'deposits') => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.webkit?.messageHandlers?.CoreBridge?.postMessage(section);
    CoreBridge?.postMessage(section);
  };

  return (
    <>
      <InvestmentSlider />
      <HeaderText variant='h1'>Главная</HeaderText>
      <Sections id='sections'>
        <SectionCard
          icon={<IconPaymentCard />}
          title='Карты'
          description='Посмотреть остаток по счету'
          onClick={() => handleSectionClick('cards')}
        />
        <SectionCard
          icon={<IconMoneySom />}
          title='Кредиты'
          description='Внести платеж по кредиту, посмотреть график погашения'
          onClick={() => handleSectionClick('credits')}
        />
        <SectionCard
          icon={<IconCoins />}
          title='Депозиты'
          description='Посмотреть остаток по счету'
          onClick={() => handleSectionClick('deposits')}
        />
      </Sections>
    </>
  );
}
