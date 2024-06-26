import styled from 'styled-components';
import {
  DESKTOP_HEADING5,
  MOBILE_BODY_SMALL,
} from '../../constants/styles/fonts';
import { resolution } from '../../constants/resolutions';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/styles/mainColors';

export const FooterWrapper = styled.footer`
  height: 159px;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (${resolution.laptop}) {
    justify-content: baseline;

    height: 272px;
    h5,
    p,
    input,
    span {
      font-size: ${MOBILE_BODY_SMALL.Size};
      font-weight: ${MOBILE_BODY_SMALL.Weight};
      line-height: ${MOBILE_BODY_SMALL.LineHeight};
    }
  }

  @media (${resolution.desktop}) {
    h5,
    p,
    input,
    span {
      font-size: ${MOBILE_BODY_SMALL.Size};
      font-weight: ${MOBILE_BODY_SMALL.Weight};
      line-height: ${MOBILE_BODY_SMALL.LineHeight};
    }
  }
`;

export const FooterNav = styled.div`
  display: flex;
  gap: 41px;
  flex-direction: row;
  @media (${resolution.laptop}) {
    order: 2;
    flex-direction: column;
    margin: 32px 0px;
    gap: 8px;
  }
`;

export const FooterNavItem = styled(Link)`
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  color: ${COLORS.COLOR_LIGHT_GRAY} !important;
`;

export const FooterNavAndForm = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (${resolution.laptop}) {
    flex-direction: column;
  }
`;

export const MobileAgreements = styled.div`
  display: none;
  @media (${resolution.laptop}) {
    display: inline-block;
  }
`;

export const ThermsWrapper = styled.p`
  @media (${resolution.laptop}) {
    order: 2;
  }
  span:nth-of-type(1) {
    color: var(--text-color);
  }
  span:nth-of-type(2) {
    color: var(--text-color);
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  span,
  div {
    display: none;
  }
  @media (${resolution.laptop}) {
    order: 1;
    gap: 16px;
    align-items: center;
    margin: 36px 0px;
    span {
      display: block;
    }
    div {
      display: block;
      height: 0px;
      width: 47px;
      border: 0.5px solid var(--text-color);
    }
    svg:nth-of-type(1) {
      display: none;
    }
    svg:nth-of-type(2) {
      width: 6.67px;
      height: 12px;
      path {
        fill: var(--text-color);
      }
    }
    svg:nth-of-type(3) {
      width: 12px;
      height: 12px;
    }
    svg:nth-of-type(4) {
      width: 14.2px;
      height: 12px;
    }
  }
`;

export const ThermsAndSocialMedia = styled.h5`
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  color: rgba(112, 112, 112, 1);
  display: flex;
  justify-content: space-between;

  @media (${resolution.laptop}) {
    flex-direction: column;
    span {
      color: rgba(112, 112, 112, 1) !important;
    }
  }
`;

export const FormWrapper = styled.div`
  width: 396px;
  form {
    position: relative;

    button {
      position: absolute;
      right: 0;
      top: 7px;
    }
  }
  @media (${resolution.laptop}) {
    width: 100%;
  }
`;
