import styled from 'styled-components';
import { COLORS } from '../../constants/styles/mainColors';
import { ALLERTA_STENCIL } from '../../constants/styles/modelFont';
import { DESKTOP_HEADING5 } from '../../constants/styles/fonts';

export const StyledHeader = styled.header`
  height: 42px;
  margin-bottom: 16px;
`;

export const Navigation = styled.nav`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ModsenSHOPPE = styled.h1`
  color: ${COLORS.COLOR_ACCENT};
  font-family: ${ALLERTA_STENCIL};
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 40px;
  position: absolute;
  left: 0;
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
`;

export const ListItem = styled.li<{ $marginRight?: number }>`
  margin-right: ${(props) => props.$marginRight}px;
  color: var(--text-color);
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
