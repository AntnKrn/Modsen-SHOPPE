import React from 'react';
import { Carousel } from '../../components/Carousel/Carousel';
import {
  BodyWrapper,
  ShopTheLastTextWrapper,
  ViewAllText,
} from './MainPage.styled';
import { ShopTheLastList } from '../../components/ShopTheLastList/ShopTheLastList';
import { ShopTheLatestText } from '../../components/ShopTheLatestText/ShopTheLatestText';

export const MainPage = () => {
  return (
    <BodyWrapper>
      <Carousel />
      <ShopTheLastTextWrapper>
        <ShopTheLatestText />
        <ViewAllText>View All</ViewAllText>
      </ShopTheLastTextWrapper>
      <div style={{ marginBottom: '39px' }} />
      <ShopTheLastList />
    </BodyWrapper>
  );
};
