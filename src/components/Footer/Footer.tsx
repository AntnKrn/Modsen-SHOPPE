import React from 'react';
import {
  FooterNav,
  FooterNavAndSubscribeEmail,
  FooterNavItem,
  FooterWrapper,
  SocialMediaWrapper,
  StyledText,
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

export const Footer = () => {
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
        {/* <div style={{ width: '396px' }}>
          <Input color="black" placeholder="Give an email, get the newsletter.">
            <SendArrow />
          </Input>
        </div> */}
      </FooterNavAndSubscribeEmail>

      <ThermsAndSocialMedia>
        <StyledText>
          <span style={{ color: 'var(--text-color)' }}>© 2023 Shelly.</span>{' '}
          Terms of use <span style={{ color: 'var(--text-color)' }}>and</span>{' '}
          privacy policy.
        </StyledText>
        <SocialMediaWrapper>
          <LinkedIn />
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialMediaWrapper>
      </ThermsAndSocialMedia>
    </FooterWrapper>
  );
};
