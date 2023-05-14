import styled from 'styled-components';
import { Keys } from './types';

export const StyledMap = {
  h1: {
    'font-size': '48px',
    'font-family': 'Fira Sans',
    'letter-spacing': '0.15px',
    'line-height': '72px',
  },
  h2: {
    'font-size': '32px',
    'font-family': 'Fira Sans',
    'letter-spacing': '0.15px',
    'line-height': '48px',
  },
  h3: {
    'font-size': '24px',
    'font-family': 'Fira Sans',
    'letter-spacing': '0.15px',
    'line-height': '32px',
  },
  h4_a: {
    'font-family': 'Fira Sans',
    'font-size': '20px',
    'letter-spacing': '0.25px',
    'line-height': '28px',
  },
  h4_b: {
    'font-family': 'PT Root UI Medium',
    'font-size': '20px',
    'letter-spacing': '0.25px',
    'line-height': '28px',
  },
  h5_a: {
    'font-family': 'Fira Sans',
    'font-size': '18px',
    'letter-spacing': '0.15px',
    'line-height': '24px',
  },
  h5_b: {
    'font-family': 'PT Root UI Medium',
    'font-size': '18px',
    'letter-spacing': '0.15px',
    'line-height': '24px',
  },
  subtitle_a: {
    'font-family': 'PT Root UI Bold',
    'font-size': '17px',
    'letter-spacing': '0.15px',
    'line-height': '24px',
  },
  subtitle_b: {
    'font-size': '15px',
    'font-family': 'PT Root UI Bold',
    'letter-spacing': '0.15px',
    'line-height': '20px',
  },
  body_a: {
    'font-size': '16px',
    'font-family': 'PT Root UI Regular',
    'letter-spacing': '0.15px',
    'line-height': '24px',
  },
  body_b: {
    'font-family': 'PT Root UI Regular',
    'font-size': '14px',
    'letter-spacing': '0.15px',
    'line-height': '20px',
  },
  body_a_accent: {
    'font-family': 'PT Root UI Medium',
    'font-size': '16px',
    'letter-spacing': '0.15px',
    'line-height': '24px',
  },
  body_b_accent: {
    'font-family': 'PT Root UI Medium',
    'font-size': '14px',
    'letter-spacing': '0.15px',
    'line-height': '20px',
  },
  caption_a: {
    'font-size': '12px',
    'font-family': 'PT Root UI Medium',
    'letter-spacing': '0.3px',
    'line-height': '16px',
  },
  caption_b: {
    'font-size': '12px',
    'font-family': 'PT Root UI Regular',
    'letter-spacing': '0.3px',
    'line-height': '16px',
  },
} as const;

type Props = {
  cssKey: Keys;
  color: string;
};

export const Component = styled.div<Props>`
  ${({ cssKey }) => cssKey && StyledMap[cssKey]};
  color: ${({ color }) => `${color}`};
`;
