import React from 'react';
import { SvgPropsTypes } from '../../../icons/types';

export const IconSuccess: React.FC<SvgPropsTypes> = (props) => (
  <svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z'
      fill='url(#paint0_linear_7608_20378)'
    />
    <path d='M16 10L11 15L8 12' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <defs>
      <linearGradient id='paint0_linear_7608_20378' x1='12' y1='3' x2='12' y2='21' gradientUnits='userSpaceOnUse'>
        <stop offset='0.33348' stopColor='#3BD07C' />
        <stop offset='1' stopColor='#1F9960' />
      </linearGradient>
    </defs>
  </svg>
);
