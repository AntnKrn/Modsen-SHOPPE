import React from 'react';
import {
  ErrorDescription,
  ErrorText,
  ErrorWrapper,
  HomeButton,
} from './ErrorPage.styled';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <ErrorText>Error 404</ErrorText>
      <ErrorDescription>
        This page not found;
        <br /> back to home and start again
      </ErrorDescription>
      <Link to="/">
        <HomeButton>HOMEPAGE</HomeButton>
      </Link>
    </ErrorWrapper>
  );
};
