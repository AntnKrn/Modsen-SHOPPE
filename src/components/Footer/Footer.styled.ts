import styled from 'styled-components';
import {
  DESKTOP_HEADING4,
  DESKTOP_HEADING5,
  fdsafasd,
} from '../../constants/styles/fonts';

export const FooterWrapper = styled.footer`
  height: 159px;
  margin-top: 252px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterNav = styled.div`
  h5:nth-child(2) {
    margin: 0 41px;
  }
`;

export const FooterNavItem = styled.h5`
  display: inline-block;
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  color: rgba(112, 112, 112, 1);
`;

export const ThermsAndSocialMedia = styled.h5`
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  color: rgba(112, 112, 112, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterNavAndSubscribeEmail = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const SubscribeEmailForm = styled.form`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  right: 0;
`;

export const InputForSubscribeEmail = styled.input`
  width: 396px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  flex-grow: 2;
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  padding-bottom: 5px;
  &:focus {
    outline: none;
  }
`;
