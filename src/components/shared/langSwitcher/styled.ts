import styled from 'styled-components';
import Typography from 'src/components/ui/typography';

export const Container = styled.div`
  margin-top: 8px;
`;

export const ValuesContainer = styled.div`
  border-radius: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
`;

export const FromToValues = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 18px;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.grey.disabled.grey100};
`;

export const StyledTypography = styled(Typography)`
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text.primary.text800};
`;

export const SliderContainer = styled.div`
  margin: 0 16px -2px 15px;
`;
