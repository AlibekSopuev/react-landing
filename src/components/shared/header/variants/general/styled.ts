import styled from 'styled-components';
import Typography from 'src/components/ui/typography';

export const Container = styled.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
  box-shadow: 0 0.5px 0 rgba(0, 0, 0, 0.16);
`;

export const LogoTitle = styled(Typography)`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text.primary.text800};
`;
