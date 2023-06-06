import * as React from 'react';
import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types';
import { IconInfo, IconSuccess, IconWarning, IconError } from './icons';
import { ISnackbarParams, SNACKBAR_VARIANTS } from './types';
import { Container, Content } from './styled';
import { useTranslation } from 'react-i18next';

const snackDefaultConfig = {
  autoClose: 5000,
  closeButton: false,
  hideProgressBar: true,
};

export const Notify = (params: ISnackbarParams, customConfig?: ToastOptions): React.ReactText => {
  return toast(<Snackbar {...params} />, {
    ...snackDefaultConfig,
    ...customConfig,
  });
};

const Snackbar: React.FC<ISnackbarParams> = ({ variant = 'positive', text }) => {
  const { t } = useTranslation();
  return (
    <Container>
      {variant === SNACKBAR_VARIANTS.positive && <IconSuccess />}
      {variant === SNACKBAR_VARIANTS.informative && <IconInfo />}
      {variant === SNACKBAR_VARIANTS.attentive && <IconWarning />}
      {variant === SNACKBAR_VARIANTS.destructive && <IconError />}
      <Content>{t(text as string)}</Content>
    </Container>
  );
};
