import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconRu } from '../../icons/iconRu';
import { IconKg } from '../../icons/iconKg';
import { IconEng } from '../../icons/iconEng';
import { CustomSelect, ListItem } from './styled';
import { useDeviceDetected } from '../../../core/hooks/useDeviceDetected';

interface ILangSwitcher {
  selected?: string;
  className?: string;
}

const CustomOption = (props: any) => {
  const isMobile = useDeviceDetected();

  return (
    <ListItem {...props}>
      {props.data.icon}
      {!isMobile && props.data.label}
    </ListItem>
  );
};

export const LangSwitcher: React.FC<ILangSwitcher> = ({ selected = 'rus', className }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const options = [
    { value: 'rus', label: 'Русский', icon: <IconRu /> },
    { value: 'kyrgyz', label: 'Кыргызча', icon: <IconKg /> },
    { value: 'eng', label: 'English', icon: <IconEng /> },
  ];

  return (
    <CustomSelect
      selected={selected}
      showSelectedValueIcon={true}
      onChange={handleChangeLanguage}
      options={options}
      className={className}
      CustomOptionComponent={CustomOption}
    />
  );
};
