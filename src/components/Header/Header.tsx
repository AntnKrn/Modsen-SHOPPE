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
  MobileNavigation,
  MobileInput,
  MobileInputWrapper,
  MobileMenuNavigation,
  MobileHeaderWrapper,
  MobileHeaderIconsWrapper,
} from './Header.styled';
import { Busket } from '../../assets/icons/busket';
import { Search } from '../../assets/icons/search';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../store/features/theme/themeSlice';
import { Profile } from '../../assets/icons/Profile';
import { RootState } from '../../store/store';
import { clearUser } from '../../store/features/auth/authSlice';
import { MobileMenu } from '../../assets/icons/mobileMenu';
import { CloseMenu } from '../../assets/icons/CloseMenu';

export const Header = () => {
  const [checked, setChecked] = useState(false); // store value
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

  return (
    <StyledHeader>
      <Navigation>
        <Link to="/">
          <ModsenSHOPPE>Modsen S</ModsenSHOPPE>
          <ModsenSHOPPE $HOPPE="black">HOPPE</ModsenSHOPPE>
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
            <Search />
          </ListItem>
          <ListItem $marginRight={41}>
            <Link to="/busket">
              <Busket />
            </Link>
          </ListItem>
          <ListItem $marginRight={41}>
            <ProfileHover>
              <Profile />

              {isAuth ? (
                <p onClick={() => dispatch(clearUser())}>Sign out</p>
              ) : (
                <p>
                  {' '}
                  <Link to="/authorization">Sign in</Link>
                </p>
              )}
            </ProfileHover>
          </ListItem>
        </NavigationList>
      </Navigation>
      <MobileHeaderWrapper>
        <MobileNavigation>
          <Link to="/">
            <ModsenSHOPPE>Modsen S</ModsenSHOPPE>
            <ModsenSHOPPE $HOPPE="black">HOPPE</ModsenSHOPPE>
          </Link>
          <MobileHeaderIconsWrapper>
            <div>
              <Busket />
            </div>
            <div onClick={onClickHandler}>
              {isMobileMenuOpen ? <CloseMenu /> : <MobileMenu />}
            </div>
          </MobileHeaderIconsWrapper>
        </MobileNavigation>

        <MobileInputWrapper>
          <MobileInput placeholder="Search" />
          <Search />
        </MobileInputWrapper>
        {isMobileMenuOpen ? (
          <MobileMenuNavigation>
            <ul>
              <li>
                <Link to="/">Home</Link>{' '}
              </li>

              <li>
                <Link to="/">Shop</Link>
              </li>

              <li>
                <Link to="/">About</Link>
              </li>

              <li>
                <Link to="/">Blog</Link>
              </li>

              <li>
                <Link to="/">Help</Link>
              </li>

              <li>
                <Link to="/">Contact</Link>
              </li>

              <li>
                <Link to="/">Search</Link>
              </li>
            </ul>
          </MobileMenuNavigation>
        ) : null}
      </MobileHeaderWrapper>
    </StyledHeader>
  );
};
