import { object, string } from 'yup';

export const initForm = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
};

export const schema = object({
  firstName: string().min(1, 'Invalid Firstname.').required('Required field.'),
  lastName: string().min(1, 'Invalid Lastname.').required('Required field.'),
  email: string().email('Invalid email.').required('Required field.'),
  subject: string().min(5, 'Invalid subject.').required('Required field.'),
  message: string().min(10, 'Invalid message.').required('Required field.'),
}).required();
