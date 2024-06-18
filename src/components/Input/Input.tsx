import React from 'react';
import { IconWrapper, StyledInput, InputContainer } from './Input.styled';
import { useInput } from '../../hooks/useInput';

interface IProps {
  children?: React.ReactNode;
  placeholder: string;
  color: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  id?: string;
  name?: string;
  type?: string;
}

export const Input = ({
  children,
  placeholder,
  color,
  inputRef,
  id,
  name,
  type,
}: IProps) => {
  const value = useInput();
  return (
    <InputContainer>
      <StyledInput
        type={type}
        name={name}
        id={id}
        ref={inputRef}
        {...value}
        $Color={color}
        placeholder={placeholder}
      />
      <IconWrapper>{children}</IconWrapper>
    </InputContainer>
  );
};
