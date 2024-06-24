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
  MODSENSHOPPE,
  ProfileHover,
} from './Header.styled';
import { Busket } from '../../assets/icons/busket';
import { Search } from '../../assets/icons/search';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../store/features/theme/themeSlice';
import { Profile } from '../../assets/icons/Profile';
import { RootState } from '../../store/store';
import { clearUser } from '../../store/features/auth/authSlice';

export const Header = () => {
  const [checked, setChecked] = useState(false); // store value
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    dispatch(change());
  };

  return (
    <StyledHeader>
      <Navigation>
        <MODSENSHOPPE>
          <Link to="/">
            <ModsenSHOPPE>Modsen S</ModsenSHOPPE>
            <ModsenSHOPPE $HOPPE="black">HOPPE</ModsenSHOPPE>
          </Link>
        </MODSENSHOPPE>

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
    </StyledHeader>
  );
};
