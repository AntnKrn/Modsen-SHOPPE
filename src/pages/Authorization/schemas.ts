import { object, string } from 'yup';

export interface IAuthForm {
  email: string;
  password: string;
}

export const authInitForm: IAuthForm = {
  email: '',
  password: '',
};

export const authSchema = object({
  email: string().email('Invalid login.').required('Required field.'),
  password: string().min(8, 'Invalid password.').required('Required field.'),
}).required();
