import React from 'react';
import {
  IconWrapper,
  StyledInput,
  InputContainer,
  ErrorMessage,
} from './Input.styled';
import { Delete } from '../../assets/icons/delete';

interface IPropsInput {
  children?: React.ReactNode;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reset: any;
}

export const Input = ({
  error,
  register,
  name,
  placeholder,
  reset,
}: IPropsInput) => {
  return (
    <InputContainer>
      <StyledInput
        {...register}
        placeholder={placeholder}
        $Color="gray"
        autoComplete="off"
      />
      {error[name] && <ErrorMessage>{error[name].message}</ErrorMessage>}
      <IconWrapper onClick={() => reset(name, '')}>
        <Delete />
      </IconWrapper>
    </InputContainer>
  );
};
