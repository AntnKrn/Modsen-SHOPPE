import React from 'react';
import { Header } from './Header/Header';
import { AppWrapper, Global } from './App.styled';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

export const App = () => {
  const theme = useSelector((state: RootState) => state.theme.isDark);
  console.log('dsadas', theme);
  return (
    <AppWrapper>
      <Global $theme={theme} />
      <Header />
      <Outlet />
      <Footer />
    </AppWrapper>
  );
};
