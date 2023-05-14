import React from 'react';
import { Component } from './styled';
import { TypographyType, ComponentType, VARIANTS } from './types';

/**
 * This component is for creating title
 *
 * @param variant default div </br> or one of h1|h2|h3|h4|subtitleA|subtitleB|bodyA|bodyB|caption
 * @param variant default --text-1000 or one of global css variable
 * @param children any text node
 */

const Typography: React.FC<TypographyType> = React.memo(
  ({ variant, element, color = '#121112', children, ...props }) => {
    const tag: ComponentType = element ? element : variant ? VARIANTS[variant] : 'div';

    return (
      <Component color={color} as={tag} cssKey={variant} {...props}>
        {children}
      </Component>
    );
  },
);

export default Typography;
