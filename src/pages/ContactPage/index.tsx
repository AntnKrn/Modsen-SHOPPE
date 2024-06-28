import React from 'react';
import { Form } from '../../components/Form';
import { schema } from './schema';
import { initForm } from './schema';
import { IFormInputs } from '../../interfaces/IForm';
import { FormWrapper } from './index.styled';

export const ContactPage = () => {
  const inputs: IFormInputs[] = [
    {
      placeholder: 'Firstname',
      name: 'firstname',
    },
    {
      placeholder: 'Lastname',
      name: 'lastname',
    },
    {
      placeholder: 'Email',
      name: 'email',
    },
    {
      placeholder: 'Subject',
      name: 'subject',
    },
    {
      placeholder: 'Message',
      name: 'message',
    },
  ];
  return (
    <main>
      <FormWrapper>
        <Form initForm={initForm} schema={schema} inputs={inputs} />
      </FormWrapper>
    </main>
  );
};
