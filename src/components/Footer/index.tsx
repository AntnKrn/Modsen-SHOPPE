import React from 'react';

import { SendArrow } from '../../assets/icons/sendArrow';
import Facebook from '../../assets/icons/socialMedia/svg/facebook.svg';
import Instagram from '../../assets/icons/socialMedia/svg/instagram.svg';
import LinkedIn from '../../assets/icons/socialMedia/svg/linkedin.svg';
import Twitter from '../../assets/icons/socialMedia/svg/twitter.svg';
import { paths } from '../../constants/paths';
import { IFormInputs } from '../../interfaces/IForm';
import { Divider } from '../Divider';
import { Form } from '../Form';

import {
  FooterNav,
  FooterNavAndForm,
  FooterNavItem,
  FooterWrapper,
  FormWrapper,
  MobileAgreements,
  SocialMediaWrapper,
  ThermsAndSocialMedia,
  ThermsWrapper,
} from './index.styled';
import { validationInitForm, validationSchema } from './validationSchema';

const inputs: IFormInputs[] = [
  { placeholder: 'Give an email, get the newsletter.', name: 'email' },
];

export const Footer = () => {
  return (
    <FooterWrapper>
      <Divider />
      <FooterNavAndForm>
        <FooterNav>
          <FooterNavItem to={paths.contact}>CONTACT</FooterNavItem>
          <FooterNavItem to={paths.main}>TERMS OF SERVICES</FooterNavItem>
          <FooterNavItem to={paths.main}>SHIPPING AND RETURNS</FooterNavItem>
        </FooterNav>
        <FormWrapper>
          <Form
            inputs={inputs}
            initForm={validationInitForm}
            schema={validationSchema}
          >
            <button type="submit">
              <SendArrow />
            </button>
          </Form>
        </FormWrapper>

        <MobileAgreements>
          <input type="checkbox" />
          <span> I agree to the website’s terms and conditions.</span>
        </MobileAgreements>
      </FooterNavAndForm>

      <ThermsAndSocialMedia>
        <ThermsWrapper>
          <span>© 2023 Shelly.</span> Terms of use <span> and </span>
          privacy policy.
        </ThermsWrapper>
        <SocialMediaWrapper>
          <span>Follow us</span>
          <LinkedIn />
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialMediaWrapper>
      </ThermsAndSocialMedia>
    </FooterWrapper>
  );
};
