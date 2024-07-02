import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { RootState } from '../store/store';

import { AppWrapper, Global } from './App.styled';
import { Footer } from './Footer';
import { Header } from './Header';

export const App = () => {
  const theme = useSelector((state: RootState) => state.theme.isDark);
  return (
    <AppWrapper>
      <Global $theme={theme} />
      <Header />
      <Outlet />
      <Footer />
    </AppWrapper>
  );
};
