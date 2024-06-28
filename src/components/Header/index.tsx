import React, { ChangeEvent, useState } from 'react';
import {
  Input,
  Label,
  ModsenSHOPPE,
  Navigation,
  NavigationList,
  StyledHeader,
  Switch,
  ListItem,
  LeftNavItems,
  ProfileHover,
  MobileHeader,
  MobileMenuNavigation,
  MobileHeaderWrapper,
  MobileHeaderIconsWrapper,
  MobileSearchInputWrapper,
  StyledSearch,
  StyledBusket,
  StyledProfile,
} from './index.styled';
import { Busket } from '../../assets/icons/busket';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../store/features/theme/themeSlice';
import { RootState } from '../../store/store';
import { clearUser } from '../../store/features/auth/authSlice';
import { MobileMenu } from '../../assets/icons/mobileMenu';
import { CloseMenu } from '../../assets/icons/CloseMenu';
import { paths } from '../../constants/paths';
import { mobileMenuLinks } from './mobileMenuLinks';
import { SearchInput } from '../SearchInput';

export const Header = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    dispatch(change());
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onClickHandler = () => {
    setIsMobileMenuOpen((prev) => {
      const header = document.getElementsByTagName('header')[0];
      header.style.position = isMobileMenuOpen ? 'static' : 'fixed';
      header.style.height = isMobileMenuOpen ? '100%' : '100vh';
      document.getElementsByTagName('body')[0].style.overflow = isMobileMenuOpen
        ? 'visible'
        : 'hidden';

      return !prev;
    });
  };

  const handleSignOut = () => {
    dispatch(clearUser());
  };

  return (
    <StyledHeader>
      <Navigation>
        <Link to={paths.main}>
          <ModsenSHOPPE>Modsen S</ModsenSHOPPE>
          <ModsenSHOPPE>HOPPE</ModsenSHOPPE>
        </Link>
        <NavigationList>
          <LeftNavItems>
            <ListItem $marginRight={64}>
              <Link to="shop">Shop</Link>
            </ListItem>
            <ListItem $marginRight={14}>|</ListItem>
          </LeftNavItems>
          <ListItem $marginRight={41}>
            <Label>
              <Input
                checked={checked}
                type="checkbox"
                onChange={handleChange}
              />
              <Switch />
            </Label>
          </ListItem>
          <ListItem $marginRight={43}>
            <StyledSearch />
          </ListItem>
          <ListItem $marginRight={41}>
            <Link to="/busket">
              <StyledBusket />
            </Link>
          </ListItem>
          <ListItem $marginRight={41}>
            <ProfileHover>
              <StyledProfile />

              {isAuth ? (
                <p onClick={handleSignOut}>Sign out</p>
              ) : (
                <p>
                  <Link to="/authorization">Sign in</Link>
                </p>
              )}
            </ProfileHover>
          </ListItem>
        </NavigationList>
      </Navigation>

      <MobileHeaderWrapper>
        <MobileHeader>
          <Link to={paths.main}>
            <ModsenSHOPPE>Modsen S</ModsenSHOPPE>
            <ModsenSHOPPE>HOPPE</ModsenSHOPPE>
          </Link>
          <MobileHeaderIconsWrapper>
            <Link to={paths.cart}>
              <Busket />
            </Link>
            <div onClick={onClickHandler}>
              {isMobileMenuOpen ? <CloseMenu /> : <MobileMenu />}
            </div>
          </MobileHeaderIconsWrapper>
        </MobileHeader>
        <MobileSearchInputWrapper>
          <SearchInput />
        </MobileSearchInputWrapper>
        {isMobileMenuOpen ? (
          <MobileMenuNavigation>
            <ul>
              {mobileMenuLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.path} onClick={onClickHandler}>
                    {link.title}
                  </Link>
                </li>
              ))}
              {isAuth ? (
                <li onClick={handleSignOut}>Sign out</li>
              ) : (
                <li>
                  <Link to="/authorization" onClick={onClickHandler}>
                    Sign in
                  </Link>
                </li>
              )}
            </ul>
          </MobileMenuNavigation>
        ) : null}
      </MobileHeaderWrapper>
    </StyledHeader>
  );
};
