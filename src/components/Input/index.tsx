import React from 'react';
import { InputContainer, ErrorMessage, StyledInput } from './index.styled';

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
      <StyledInput {...register} placeholder={placeholder} autoComplete="off" />
      {error[name] && <ErrorMessage>{error[name].message}</ErrorMessage>}
      {/* <div onClick={() => reset(name, '')}>
          <Delete />
        </div> */}
    </InputContainer>
  );
};
