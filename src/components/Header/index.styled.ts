import styled from 'styled-components';
import { COLORS } from '../../constants/styles/mainColors';
import { ALLERTA_STENCIL } from '../../constants/styles/modelFont';
import {
  DESKTOP_BODY_MEDIUM,
  DESKTOP_HEADING5,
  MOBILE_HEADING1,
  MOBILE_HEADING3,
} from '../../constants/styles/fonts';
import { resolution } from '../../constants/resolutions';

export const StyledHeader = styled.header`
  @media (${resolution.desktop}) {
    margin: -15px;
    height: 100%; //100vh
    position: static; //fixed
    z-index: 2;
    background-color: var(--bg-color);
    width: 100vw;
    padding: 15px;
    display: block;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (${resolution.desktop}) {
    display: none;
  }
`;

export const MobileInput = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  color: ${COLORS.COLOR_DARK_GRAY};
  font-weight: ${MOBILE_HEADING3.Weight};
  font-size: ${MOBILE_HEADING3.Size};
  border-radius: 4px;
  padding: 10px 30px 10px;
  background-color: ${COLORS.COLOR_LIGHT_GRAY};
  &:focus {
    outline: none;
  }
`;

export const MobileInputWrapper = styled.div`
  display: none;
  position: relative;

  svg {
    color: ${COLORS.COLOR_DARK_GRAY};
    position: absolute;
    width: 12px;
    height: 10px;
    left: 10px;
    top: 11px;
  }

  @media (${resolution.desktop}) {
    display: block;
  }
`;
export const ModsenSHOPPE = styled.h1<{ $HOPPE?: string }>`
  color: ${COLORS.COLOR_ACCENT};
  font-family: ${ALLERTA_STENCIL};
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 40px;
  display: inline;
  &:nth-of-type(2) {
    color: var(--text-color);
  }
  @media (${resolution.desktop}) {
    font-weight: 400;
    font-size: 25px;
    line-height: 40.5px;
  }
`;

export const MobileNavigation = styled.div`
  display: none;
  position: absolute;
  align-items: baseline;

  @media (${resolution.desktop}) {
    display: flex;
    position: static;
    justify-content: space-between;
  }
`;

export const NavigationList = styled.ul`
  list-style-type: none;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  font-style: normal;
  font-weight: ${DESKTOP_HEADING5.Weight};
  font-size: ${DESKTOP_HEADING5.Size};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  text-decoration: none;
  color: black;
  height: 21px;

  @media (${resolution.desktop}) {
    display: none;
    right: 0;
  }
`;

export const ListItem = styled.li<{ $marginRight?: number }>`
  margin-right: ${(props) => props.$marginRight}px;
  color: var(--text-color);
  &:nth-child(5):hover {
    p {
      display: block;
    }
  }
`;
export const LeftNavItems = styled.div`
  display: flex;
  align-items: center;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 45px;
  height: 21px;
  background: #78788029;
  border-radius: 99px;
  transition: 0.4s;
  border: 0.5px solid #0000000a;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);

  &:before {
    transition: 0.4s;
    content: '';
    position: absolute;
    width: 20px;
    height: 18px;
    border-radius: 99px;
    background: ${COLORS.COLOR_WHITE};
    top: 0.5px;
    left: 1px;
    transform: translate(0, 0.5px);
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: #78788029;

    &:before {
      background: ${COLORS.COLOR_BLACK};
      transform: translate(20px, 0.5px);
    }
  }
`;

export const ProfileHover = styled.div`
  position: relative;
  p {
    border: .5px solid var(--text-color);\
    font-size: ${DESKTOP_BODY_MEDIUM.Size};
    cursor: pointer;
    width: 61px;
    right: -22px;
    text-align: left;
    display: none;
    position: absolute;
    transition: 1s;
    z-index: 1;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
`;

export const MobileHeaderWrapper = styled.div`
  display: none;

  @media (${resolution.desktop}) {
    display: block;
  }
`;
export const MobileMenuNavigation = styled.nav`
  margin-top: 39px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: ${MOBILE_HEADING1.Size};
    font-weight: ${MOBILE_HEADING1.Weight};
    line-height: ${MOBILE_HEADING1.LineHeight};
    color: var(--text-color);
    list-style: none;
  }
`;
export const MobileHeaderIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  & svg:first-child {
    width: 18px;
    height: 18px;
  }
  & svg:nth-of-type(2) {
    width: 20px;
    height: 15px;
  }
`;
