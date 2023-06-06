import React from 'react';
import { SvgPropsTypes } from '../../../icons/types';

export const IconError: React.FC<SvgPropsTypes> = (props) => (
  <svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z'
      fill='url(#paint0_linear_7608_20190)'
    />
    <path d='M12 7.5V12.5' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12.001 16.5C12.139 16.5 12.251 16.388 12.25 16.25C12.25 16.112 12.138 16 12 16C11.862 16 11.75 16.112 11.75 16.25C11.75 16.388 11.862 16.5 12.001 16.5'
      stroke='white'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient id='paint0_linear_7608_20190' x1='12' y1='3' x2='12' y2='21' gradientUnits='userSpaceOnUse'>
        <stop offset='0.33348' stopColor='#FB7060' />
        <stop offset='1' stopColor='#E02B28' />
      </linearGradient>
    </defs>
  </svg>
);
