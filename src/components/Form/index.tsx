import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { onSubmitEmail } from '../../services/submitEmail';
import { Input } from '../Input';

import { SendButton } from './index.styled';
import { formProps } from './types';

export const Form = ({ inputs, initForm, schema, children }: formProps) => {
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
    onSubmitEmail(form);
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        {inputs.map((input) => (
          <Input
            placeholder={input.placeholder}
            name={input.name}
            register={{ ...register(input.name) }}
            error={errors}
            reset={resetField}
            key={input.name}
          />
        ))}
      </div>
      {children ? children : <SendButton type="submit" value="SEND" />}
    </form>
  );
};
