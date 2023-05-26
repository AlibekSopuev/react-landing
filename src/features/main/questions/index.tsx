import React from 'react';
import { BoxList, Container, Text, TextWithMargin, Title } from './styled';
import { Accordion } from '../../../components/ui/accordion';
import { useTranslation } from 'react-i18next';

const Questions = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <Title>{t('questions.title')}</Title>
      <Accordion title={t('questions.greenBonds.title')}>
        <TextWithMargin>{t('questions.greenBonds.descriptionFirst')}</TextWithMargin>
        <Text>{t('questions.greenBonds.descriptionSecond')}</Text>
      </Accordion>
      <Accordion title={t('questions.bondIssuer.title')}>
        <Text>{t('questions.bondIssuer.description')}</Text>
      </Accordion>
      <Accordion title={t('questions.advantages.title')}>
        <BoxList>
          <li>
            <Text>{t('questions.advantages.descriptionFirst')}</Text>
          </li>
          <li>
            <Text> {t('questions.advantages.descriptionSecond')}</Text>
          </li>
          <li>
            <Text> {t('questions.advantages.descriptionThird')}</Text>
          </li>
          <li>
            <Text>{t('questions.advantages.descriptionFourth')}</Text>
          </li>
        </BoxList>
      </Accordion>
      <Accordion title={t('questions.bondMethods.title')}>
        <Text>{t('questions.bondMethods.description')}</Text>
      </Accordion>
      <Accordion title={t('questions.receiveInterest.title')}>
        <Text>{t('questions.receiveInterest.description')}</Text>
      </Accordion>
      <Accordion title={t('questions.buyback.title')}>
        <Text>{t('questions.buyback.description')}</Text>
      </Accordion>
      <Accordion title={t('questions.contacts.title')}>
        <TextWithMargin>{t('questions.contacts.description')}</TextWithMargin>
        <TextWithMargin>
          <span>{t('questions.contacts.sentiName')}</span>
          <div>{t('questions.contacts.sentiAddress')}</div>
          <div>{t('questions.contacts.sentiTelephone')} +996 (312) 61 45 89</div>
          <div> WhatsApp: +996 (700) 61 00 25</div>
          <div>
            {t('questions.contacts.sentiWebSite')}{' '}
            <a target='_blank' rel='noreferrer' href={'https://senti.kg/'}>
              www.senti.kg
            </a>
          </div>
        </TextWithMargin>
        <Text>
          <span>{t('questions.contacts.dcbName')}</span>
          <div>{t('questions.contacts.dcbAddress')}</div>
          <div>{t('questions.contacts.sentiTelephone')} 8686 (звонок с мобильного бесплатный)</div>
          <div>
            {t('questions.contacts.sentiWebSite')}{' '}
            <a target='_blank' rel='noreferrer' href={'https://www.dcb.kg/ru/'}>
              www.dcb.kg
            </a>
          </div>
          <div>
            {i18n.language === 'kyrgyz' && (
              <div>
                {t('questions.contacts.branches')}{' '}
                <a target='_blank' rel='noreferrer' href={'https://www.dcb.kg/ru/terminals/departments'}>
                  {t('questions.contacts.branchesLink')}
                </a>
                {t('questions.contacts.branchesLast')}
              </div>
            )}{' '}
            {i18n.language !== 'kyrgyz' && (
              <div>
                {t('questions.contacts.branches')}{' '}
                <a target='_blank' rel='noreferrer' href={'https://www.dcb.kg/ru/terminals/departments'}>
                  {t('questions.contacts.branchesLink')}
                </a>
              </div>
            )}
          </div>
        </Text>
      </Accordion>
    </Container>
  );
};

export default Questions;
