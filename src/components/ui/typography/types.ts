export const VARIANTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4_a: 'h4',
  h4_b: 'h4',
  h5_a: 'h5',
  h5_b: 'h5',
  subtitle_a: 'h6',
  subtitle_b: 'h6',
  body_a: 'p',
  body_b: 'p',
  body_a_accent: 'span',
  body_b_accent: 'span',
  caption_a: 'div',
  caption_b: 'div',
} as const;

export interface TypographyType extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof VARIANTS;
  color?: string;
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
}

export type Keys = keyof typeof VARIANTS;
export type ComponentType = (typeof VARIANTS)[Keys] | keyof JSX.IntrinsicElements;
