import React from 'react';
import { InputContent, InputErrorText, InputSideContainer, InputWrapper, StyledInput } from './styled';
import Typography from '../../typography';
import { InputFieldProps } from '../main/types';

export const InputFieldBase = React.forwardRef(
  ({ className, error, floatLabel, left, right, placeholder, ...rest }: InputFieldProps, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const isEmpty = !!(rest.value || rest.defaultValue);

    React.useImperativeHandle(ref, () => inputRef?.current, [ref]);

    const onBlur = (e: React.FocusEvent<HTMLDivElement>) => {
      e.currentTarget?.classList.remove('input-focused');
    };

    const onFocus = (e: React.FocusEvent<HTMLDivElement>) => {
      e.currentTarget?.classList.add('input-focused');
    };

    return (
      <InputContent className={className}>
        <InputWrapper
          onBlur={onBlur}
          onFocus={onFocus}
          floatLabel={floatLabel}
          onClick={() => inputRef.current?.focus()}
          className={`input-base-wrapper ${isEmpty ? 'input-empty' : ''}`}
        >
          {left && <InputSideContainer className='left_container'>{left}</InputSideContainer>}
          <InputContent className='input-content'>
            {floatLabel && placeholder && (
              <Typography className='input-placeholder' element='span'>
                {placeholder}
              </Typography>
            )}
            <StyledInput
              ref={inputRef}
              className='input'
              autoComplete='off'
              {...rest}
              placeholder={floatLabel ? '' : placeholder}
            />
          </InputContent>
          {right && <InputSideContainer className='right_container'>{right}</InputSideContainer>}
        </InputWrapper>
        {error && <InputErrorText className='input-text__error'>{error}</InputErrorText>}
      </InputContent>
    );
  },
);
