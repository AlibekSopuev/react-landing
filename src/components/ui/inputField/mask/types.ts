import React from 'react';
import { IMask, useIMask } from 'react-imask';

type useIMaskTypes = ReturnType<typeof useIMask>;

type RenderType = React.ReactElement<InputMaskReturnTypes>;

type InputMaskReturnTypes = Omit<useIMaskTypes, 'ref'> & {
  ref: React.RefObject<HTMLInputElement>;
};

export type InputMaskProps = IMask.AnyMaskedOptions & {
  onChange?: (key: string) => void;
  render: (options: InputMaskReturnTypes) => RenderType;
};
