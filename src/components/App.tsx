import React from 'react';
import { Header } from './Header/Header';
import { createGlobalStyle, styled } from 'styled-components';
import { COLORS } from '../constants/styles/mainColors';
import { Outlet } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { Footer } from './Footer/Footer';
export const Global = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: DM Sans;
    }
    a:link{
        text-decoration: none;
    }
    body {
        background-color: ${COLORS.COLOR_WHITE}
    }
`;

const AppWrapper = styled.div`
  margin: 100px;
`;

export const App = () => {
  return (
    <AppWrapper>
      <Global />
      <Header />
      <Outlet />
      <Footer />
    </AppWrapper>
  );
};
