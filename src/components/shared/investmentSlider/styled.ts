import styled, { css } from 'styled-components';
import Typography from 'src/components/ui/typography';
import { InputField } from '../../ui/inputField/main';

export const Container = styled.div`
  margin-top: 8px;
`;

export const ValuesContainer = styled.div`
  border-radius: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey.primary_inverted.grey50};
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.media.small}) {
      display: block;
      margin-bottom: 24px;
    }
  `}
`;

export const FromToValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.grey.disabled.grey100};
`;

export const StyledTypography = styled(Typography)`
  white-space: nowrap;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text.primary.text800};
`;

export const StyledInputField = styled(InputField)`
  margin-left: auto;
  & .input-base-wrapper {
    border: none;
    padding: 0;
    height: unset;
    &:focus-within {
      border: none;
      background: none;
    }
    .input {
      text-align: right;
    }
  }
`;

export const SliderContainer = styled.div`
  margin: 0 16px -2px 15px;
`;
