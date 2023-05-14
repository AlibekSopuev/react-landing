import styled from 'styled-components';
import Typography from 'src/components/ui/typography';

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 9px 18px rgba(176, 176, 204, 0.2);
  background: ${({ theme }) => theme.colors.grey.primary_inverted.grey0};
  cursor: pointer;
`;

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const HeaderText = styled(Typography)`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.text.primary.text800};
`;

export const Description = styled(Typography)`
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.text.secondary.text500};
`;
