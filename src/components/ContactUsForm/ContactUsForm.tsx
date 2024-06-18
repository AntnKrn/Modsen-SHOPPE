import React, { useRef } from 'react';
import {
  ContainerContactUs,
  Description,
  FormContainer,
  InputsField,
  SendButton,
  Title,
} from './ContactUsForm.styled';
import { Input } from '../Input/Input';

export const ContactUsForm = () => {
  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameNameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const subjectRef = useRef<HTMLInputElement>();
  const messageRef = useRef<HTMLInputElement>();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    firstNameRef.current.value = '';
    lastNameNameRef.current.value = '';
    emailRef.current.value = '';
    subjectRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <FormContainer onSubmit={(e) => onSubmitForm(e)}>
      <ContainerContactUs>
        <Title>Contact Us</Title>
        <Description>
          Say Hello send us your thoughts about our products or share your ideas
          with our Team!
        </Description>
      </ContainerContactUs>
      <InputsField>
        <Input inputRef={firstNameRef} color="gray" placeholder="First Name" />
        <Input
          inputRef={lastNameNameRef}
          color="gray"
          placeholder="Last Name"
        />
        <Input inputRef={emailRef} color="gray" placeholder="Email" />
        <Input inputRef={subjectRef} color="gray" placeholder="Subject" />
        <Input inputRef={messageRef} color="gray" placeholder="Message" />
      </InputsField>
      <SendButton>SEND</SendButton>
    </FormContainer>
  );
};
