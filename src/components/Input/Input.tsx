import React from 'react';
import {
  IconWrapper,
  StyledInput,
  InputContainer,
  ErrorMessage,
} from './Input.styled';
import { Delete } from '../../assets/icons/Delete';

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
  children,
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
      <IconWrapper>
        <div onClick={() => reset(name, '')}>
          <Delete />
        </div>
        {/* eslint-disable-next-line no-constant-condition */}
        <div>{{ children } ? children : null}</div>
      </IconWrapper>
    </InputContainer>
  );
};
