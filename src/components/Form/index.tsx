import React, { ReactNode, useEffect, useRef } from 'react';
import { SendButton } from './index.styled';
import { Input } from '../Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormInputs } from '../../interfaces/IForm';
import { onSubmitEmail } from '../../services/submitEmail';

interface IForm {
  children?: ReactNode;
  inputs: IFormInputs[];
  schema: any;
  initForm: any;
}

export const Form = ({ inputs, initForm, schema, children }: IForm) => {
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
