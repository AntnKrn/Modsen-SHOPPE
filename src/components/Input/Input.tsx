import React from 'react';
import {
  ArrowWrapper,
  InputForSubscribeEmail,
  SubscribeEmailForm,
} from './Input.styled';

interface IProps {
  children: React.ReactNode;
  widthInput: number;
  placeholder: string;
  color: string;
}

export const Input = ({ children, placeholder, widthInput, color }: IProps) => {
  return (
    <SubscribeEmailForm>
      <InputForSubscribeEmail
        $Width={`${widthInput}`}
        $Color={color}
        placeholder={placeholder}
      />
      <ArrowWrapper>{children}</ArrowWrapper>
    </SubscribeEmailForm>
  );
};
