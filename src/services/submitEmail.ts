import { RefObject } from 'react';
import emailjs from '@emailjs/browser';

export const onSubmitEmail = (form: RefObject<HTMLFormElement>): void => {
  emailjs
    .sendForm('service_2cx4qgg', 'template_ghibljp', form.current, {
      publicKey: process.env.JSEMAILPUBLICKEY,
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
