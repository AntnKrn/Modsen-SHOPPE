import React from 'react';

import Delete from '../../assets/icons/socialMedia/svg/close.svg';

import { ErrorMessage, InputContainer, StyledInput } from './index.styled';
import { inputProps } from './types';

export const Input = ({
  error,
  register,
  name,
  placeholder,
  reset,
}: inputProps) => {
  return (
    <InputContainer>
      <StyledInput {...register} placeholder={placeholder} autoComplete="off" />
      {error[name] && <ErrorMessage>{error[name].message}</ErrorMessage>}
      <Delete onClick={() => reset(name, '')} />
    </InputContainer>
  );
};
