import React, { useEffect, useRef } from 'react';
import {
  FooterNav,
  FooterNavAndSubscribeEmail,
  FooterNavItem,
  FooterWrapper,
  MobileAgreements,
  SocialMediaWrapper,
  StyledText,
  SubscribeEmailForm,
  ThermsAndSocialMedia,
} from './index.styled';
import { LineForFooterHeader } from '../LineForFooterHeader';

import { SendArrow } from '../../assets/icons/sendArrow';
import { Input } from '../Input';
import { Link } from 'react-router-dom';
import { Instagram } from '../../assets/icons/socialMedia/Instagram';
import { LinkedIn } from '../../assets/icons/socialMedia/LinkedIn';
import { Facebook } from '../../assets/icons/socialMedia/Facebook';
import { Twitter } from '../../assets/icons/socialMedia/Twitter';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { schema } from './schema';

export const Footer = () => {
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
          <MobileAgreements>
            <input type="checkbox" />
            <span> I agree to the website’s terms and conditions.</span>
          </MobileAgreements>
        </SubscribeEmailForm>
      </FooterNavAndSubscribeEmail>

      <ThermsAndSocialMedia>
        <StyledText>
          <span>© 2023 Shelly.</span>
          Terms of use <span>and</span>
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
