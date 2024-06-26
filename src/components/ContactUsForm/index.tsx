import React, { useEffect, useRef } from 'react';
import {
  ContainerContactUs,
  Description,
  FormContainer,
  InputsField,
  SendButton,
  Title,
} from './index.styled';
import { Input } from '../Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { initForm, schema } from './schema';

export const ContactUsForm = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(initForm);
    }
  }, [formState, reset]);

  const onSubmit = () => {
    emailjs
      .sendForm('service_2cx4qgg', 'template_ghibljp', form.current, {
        publicKey: 'BYAM0TqW9lBcPV3bw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <FormContainer ref={form} onSubmit={handleSubmit(onSubmit)}>
      <ContainerContactUs>
        <Title>Contact Us</Title>
        <Description>
          Say Hello send us your thoughts about our products or share your ideas
          with our Team!
        </Description>
      </ContainerContactUs>
      <InputsField>
        <Input
          placeholder="Firstname"
          name="firstName"
          register={{ ...register('firstName') }}
          error={errors}
          reset={resetField}
        />
        <Input
          placeholder="Lastname"
          name="lastName"
          register={{ ...register('lastName') }}
          error={errors}
          reset={resetField}
        />
        <Input
          placeholder="Email"
          name="email"
          register={{ ...register('email') }}
          error={errors}
          reset={resetField}
        />
        <Input
          placeholder="Subject"
          name="subject"
          register={{ ...register('subject') }}
          error={errors}
          reset={resetField}
        />
        <Input
          placeholder="Message"
          name="message"
          register={{ ...register('message') }}
          error={errors}
          reset={resetField}
        />
      </InputsField>
      <SendButton type="submit" value="SEND" />
    </FormContainer>
  );
};
