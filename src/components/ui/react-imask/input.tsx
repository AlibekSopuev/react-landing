import React from 'react';

import { IMaskMixin } from 'react-imask';
import { InputField } from '../input/styled';

const InputFieldComponent = ({ inputRef, ...props }: any) => <InputField {...props} ref={inputRef} />;

export const IMaskInputField = IMaskMixin(InputFieldComponent);
