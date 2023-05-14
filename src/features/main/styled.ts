import styled from 'styled-components';
import Typography from 'src/components/ui/typography';

export const HeaderText = styled(Typography)`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.2px;
  color: #101828;
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
