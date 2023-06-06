import React from 'react';
import { SvgPropsTypes } from '../../../icons/types';

export const IconInfo: React.FC<SvgPropsTypes> = (props) => (
  <svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3Z'
      fill='url(#paint0_linear_7608_20316)'
    />
    <path
      d='M11.999 8C11.861 8 11.749 8.112 11.75 8.25C11.75 8.388 11.862 8.5 12 8.5C12.138 8.5 12.25 8.388 12.25 8.25C12.25 8.112 12.138 8 11.999 8'
      stroke='white'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 12V17' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <defs>
      <linearGradient id='paint0_linear_7608_20316' x1='12' y1='3' x2='12' y2='21' gradientUnits='userSpaceOnUse'>
        <stop offset='0.33348' stopColor='#64B6F7' />
        <stop offset='1' stopColor='#0B79D0' />
      </linearGradient>
    </defs>
  </svg>
);
