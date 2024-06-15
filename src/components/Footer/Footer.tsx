import React from 'react';
import {
  ArrowWrapper,
  FooterNav,
  FooterNavAndSubscribeEmail,
  FooterNavItem,
  FooterWrapper,
  InputForSubscribeEmail,
  SubscribeEmailForm,
  ThermsAndSocialMedia,
} from './Footer.styled';
import { LineForFooterHeader } from '../LineForFooterHeader/LineForFooterHeader';

import { Twitter } from '../../assets/icons/socialMedia/Twitter';
import { SendArrow } from '../../assets/icons/sendArrow';

export const Footer = () => {
  console.log('rererere');
  return (
    <FooterWrapper>
      <LineForFooterHeader />
      <FooterNavAndSubscribeEmail>
        <FooterNav>
          <FooterNavItem>CONTACT</FooterNavItem>
          <FooterNavItem>TERMS OF SERVICES</FooterNavItem>
          <FooterNavItem>SHIPPING AND RETURNS</FooterNavItem>
        </FooterNav>
        <SubscribeEmailForm>
          <InputForSubscribeEmail placeholder="Give an email, get the newsletter." />
          <ArrowWrapper>
            <SendArrow />
          </ArrowWrapper>
        </SubscribeEmailForm>
      </FooterNavAndSubscribeEmail>

      <ThermsAndSocialMedia>
        © 2023 Shelly. Terms of use and privacy policy.
        <Twitter />
      </ThermsAndSocialMedia>
    </FooterWrapper>
  );
};
