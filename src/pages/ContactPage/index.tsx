import React from 'react';

import { Form } from '../../components/Form';
import { formInputsType } from '../../types/form';

import { FormWrapper } from './index.styled';
import { schema } from './schema';
import { initForm } from './schema';

export const ContactPage = () => {
  const inputs: formInputsType[] = [
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
