import { object, string } from 'yup';

export const schema = object({
  email: string().email('Invalid email.').required('Required field.'),
}).required();
