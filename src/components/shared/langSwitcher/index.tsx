import React from 'react';
import { useTranslation } from 'react-i18next';

export const LangSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage('rus')}>Russian</button>
      <button onClick={() => handleChangeLanguage('kyrgyz')}>Kyrgyz</button>
      <button onClick={() => handleChangeLanguage('eng')}>English</button>
    </div>
  );
};
