import styled, { css } from 'styled-components';
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

export const Wrapper = styled.div`
  background: #fafafa;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  flex-grow: 1;
`;
