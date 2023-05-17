import React from 'react';
import { IFormInputProps } from './types';
import { InputWrapper, InputErrText, InputField, Label } from './styled';
import styled from 'styled-components';
import { IMaskInputField } from '../react-imask/input';

export const Input: React.FC<IFormInputProps> = ({
  id,
  label,
  err,
  onClear,
  placeholder = ' ',
  autoComplete = 'nope',
  className,
  type = 'text',
  isFocused = false,
  isMasked = false,
  mask,
  inputRef,
  value,
  onChange,
  name,
  ...attrs
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Container className={className}>
      <Wrapper>
        <InputWrapper>
          {isMasked ? (
            <IMaskInputField
              mask={mask}
              lazy={false}
              onAccept={(value: any) => {
                onChange && onChange(value);
              }}
              onChange={onChange}
              type='text'
              ref={inputRef}
              value={value !== 0 ? value : undefined}
              autoFocus={isFocused}
              name={name}
              style={{ paddingRight: ref?.current?.getBoundingClientRect().width, paddingTop: label ? 15 : 0 }}
            />
          ) : (
            <InputField
              type={type || 'text'}
              className='input'
              id={id}
              placeholder={placeholder}
              autoComplete={autoComplete}
              err={err}
              ref={inputRef}
              value={value !== 0 ? value : undefined}
              autoFocus={isFocused}
              onChange={onChange}
              name={name}
              {...attrs}
              style={{ paddingRight: ref?.current?.getBoundingClientRect().width, paddingTop: label ? 15 : 0 }}
            />
          )}
          {label && (
            <Label htmlFor={id} className='inputLabel'>
              {label}
            </Label>
          )}
        </InputWrapper>
        {err && <InputErrText className='inputErrorText'>{err}</InputErrText>}
      </Wrapper>
    </Container>
  );
};

export const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 16px;
  flex-basis: 100%;
`;

export const Container = styled.div`
  display: flex;
  background: #ffffff;
  margin-bottom: 16px;
  outline: none;
  box-shadow: 0 9px 18px rgba(176, 176, 204, 0.2);
  border-radius: 16px;
`;
