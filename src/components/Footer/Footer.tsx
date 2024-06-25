import React, { useEffect, useRef } from 'react';
import {
  FooterNav,
  FooterNavAndSubscribeEmail,
  FooterNavItem,
  FooterWrapper,
  SocialMediaWrapper,
  StyledText,
  SubscribeEmailForm,
  ThermsAndSocialMedia,
} from './Footer.styled';
import { LineForFooterHeader } from '../LineForFooterHeader/LineForFooterHeader';

import { SendArrow } from '../../assets/icons/sendArrow';
import { Input } from '../Input/Input';
import { Link } from 'react-router-dom';
import { Instagram } from '../../assets/icons/socialMedia/Instagram';
import { LinkedIn } from '../../assets/icons/socialMedia/LinkedIn';
import { Facebook } from '../../assets/icons/socialMedia/Facebook';
import { Twitter } from '../../assets/icons/socialMedia/Twitter';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';

export const Footer = () => {
  const schema = object({
    email: string().email('Invalid email.').required('Required field.'),
  }).required();

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
      reset({ email: '' });
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
    <FooterWrapper>
      <LineForFooterHeader />
      <FooterNavAndSubscribeEmail>
        <FooterNav>
          <Link to="/contact">
            <FooterNavItem>CONTACT</FooterNavItem>
          </Link>
          <FooterNavItem>TERMS OF SERVICES</FooterNavItem>
          <FooterNavItem>SHIPPING AND RETURNS</FooterNavItem>
        </FooterNav>
        <SubscribeEmailForm onSubmit={handleSubmit(onSubmit)} ref={form}>
          <Input
            placeholder="Give an email, get the newsletter."
            name="email"
            register={{ ...register('email') }}
            error={errors}
            reset={resetField}
          >
            <button type="submit">
              <SendArrow />
            </button>
          </Input>
          <input type="checkbox" />
          <span> I agree to the website’s terms and conditions.</span>
        </SubscribeEmailForm>
      </FooterNavAndSubscribeEmail>

      <ThermsAndSocialMedia>
        <StyledText>
          <span style={{ color: 'var(--text-color)' }}>© 2023 Shelly.</span>{' '}
          Terms of use <span style={{ color: 'var(--text-color)' }}>and</span>{' '}
          privacy policy.
        </StyledText>
        <SocialMediaWrapper>
          <span>Follow us</span>
          <div />
          <LinkedIn />
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialMediaWrapper>
      </ThermsAndSocialMedia>
    </FooterWrapper>
  );
};
