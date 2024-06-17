import React from 'react';
import {
  FooterNav,
  FooterNavAndSubscribeEmail,
  FooterNavItem,
  FooterWrapper,
  StyledText,
  ThermsAndSocialMedia,
} from './Footer.styled';
import { LineForFooterHeader } from '../LineForFooterHeader/LineForFooterHeader';

import { Twitter } from '../../assets/icons/socialMedia/Twitter';
import { SendArrow } from '../../assets/icons/sendArrow';
import { Input } from '../Input/Input';
export const Footer = () => {
  return (
    <FooterWrapper>
      <LineForFooterHeader />
      <FooterNavAndSubscribeEmail>
        <FooterNav>
          <FooterNavItem>CONTACT</FooterNavItem>
          <FooterNavItem>TERMS OF SERVICES</FooterNavItem>
          <FooterNavItem>SHIPPING AND RETURNS</FooterNavItem>
        </FooterNav>
        <Input
          color="black"
          widthInput={396}
          placeholder="Give an email, get the newsletter."
        >
          <SendArrow />
        </Input>
      </FooterNavAndSubscribeEmail>

      <ThermsAndSocialMedia>
        <StyledText>
          <span style={{ color: 'var(--text-color)' }}>© 2023 Shelly.</span>{' '}
          Terms of use <span style={{ color: 'var(--text-color)' }}>and</span>{' '}
          privacy policy.
        </StyledText>
        <Twitter />
      </ThermsAndSocialMedia>
    </FooterWrapper>
  );
};
