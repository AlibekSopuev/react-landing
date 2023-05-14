import React from 'react';
import { Card, Description, HeaderText, SectionInfo } from './styled';
import { SectionCardProps } from './types';

const SectionCard: React.FC<SectionCardProps> = ({ icon, title, description, onClick }) => (
  <Card onClick={onClick}>
    {icon}
    <SectionInfo>
      <HeaderText variant='h2'>{title}</HeaderText>
      <Description variant='body_b'>{description}</Description>
    </SectionInfo>
  </Card>
);

export default SectionCard;
