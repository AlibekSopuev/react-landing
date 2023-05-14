export interface HeaderProps {
  variant: HeaderVariants;
  variantProps: HeaderVariantProps;
}

export interface HeaderVariantProps {
  [key: string]: unknown;
}

export type HeaderVariants = 'general';
