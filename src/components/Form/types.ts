import { ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';
import { ObjectSchema } from 'yup';

import { formInputsType } from '../../types/form';

export type formProps = {
  children?: ReactNode;
  inputs: formInputsType[];
  schema: ObjectSchema<FieldValues>;
  initForm: FieldValues;
};
