import React from 'react';
import General from './variants/general';
import { HeaderVariantProps, HeaderVariants } from './types';

export const HEADER_VARIANTS: { [variant in HeaderVariants]: React.FC<HeaderVariantProps> } = {
  general: General,
};
