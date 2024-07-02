import styled from 'styled-components';

import Cart from '../../assets/icons/socialMedia/svg/cart.svg';
import CloseMobileMenu from '../../assets/icons/socialMedia/svg/closeMobileMenu.svg';
import MobileMenu from '../../assets/icons/socialMedia/svg/mobileMenu.svg';
import Profile from '../../assets/icons/socialMedia/svg/profile.svg';
import Search from '../../assets/icons/socialMedia/svg/search.svg';
import { resolution } from '../../constants/resolutions';
import {
  DESKTOP_HEADING5,
  MOBILE_HEADING1,
} from '../../constants/styles/fonts';
import { COLORS } from '../../constants/styles/mainColors';

export const StyledHeader = styled.header<{ $Open?: boolean }>`
  margin: 0 -15px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: ${(props) => (props.$Open ? 'fixed' : 'relative')};
  z-index: 2;
  background-color: var(--bg-color);
  height: ${(props) => (props.$Open ? '100vh' : 'auto')};
  width: ${(props) => (props.$Open ? '100vw' : 'auto')};
  align-content: flex-start;
`;

export const LogoText = styled.span`
  text-align: left;
  font-family: Allerta Stencil;
  font-size: 35px;
  font-weight: 400;
  line-height: 40.5px;
  cursor: pointer;
  color: var(--text-color);
  & > span {
    color: ${COLORS.COLOR_ACCENT};
  }
`;

export const ListItem = styled.li<{ $MarginLeft?: number }>`
  display: inline-block;
  margin-left: ${(props) => props.$MarginLeft}px;
  font-size: ${DESKTOP_HEADING5.Size};
  font-weight: ${DESKTOP_HEADING5.Weight};
  line-height: ${DESKTOP_HEADING5.LineHeight};
  cursor: pointer;
  &:nth-of-type(2n) {
    display: none;
  }

  @media (${resolution.laptop}) {
    font-size: ${MOBILE_HEADING1.Size};
    font-weight: ${MOBILE_HEADING1.Weight};
    line-height: ${MOBILE_HEADING1.LineHeight};
    &:nth-of-type(2n) {
      display: inline-block;
    }
    &:nth-of-type(2n + 1) {
      display: none;
    }
  }
`;

export const SearchSvg = styled(Search)`
  width: 19px;
  height: 19px;
`;

export const CartSvg = styled(Cart)`
  width: 21px;
  height: 21px;
`;

export const ProfileSvg = styled(Profile)`
  width: 21px;
  height: 21px;
  margin-right: 14px;
`;

export const MobileMenuSvg = styled(MobileMenu)`
  width: 20px;
  height: 15px;
`;

export const CloseMobileMenuSvg = styled(CloseMobileMenu)`
  width: 16px;
  height: 16px;
`;

export const MobileUpperRightIcons = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (${resolution.laptop}) {
    display: flex;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (${resolution.laptop}) {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

export const StyledNav = styled.nav`
  align-content: center;
  @media (${resolution.laptop}) {
    order: 3;
    margin-top: 39px;
  }
`;

export const SearchInputWrapper = styled.div`
  width: 100%;
  display: none;
  @media (${resolution.laptop}) {
    display: block;
  }
`;
