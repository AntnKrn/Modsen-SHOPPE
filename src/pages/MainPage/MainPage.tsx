import React from 'react';
import { Carousel } from '../../components/Carousel/Carousel';
import {
  BodyWrapper,
  ShopTheLastText,
  ShopTheLastWrapper,
  ViewAllText,
} from './MainPage.styled';
import { ShowTheLastList } from '../../components/ShopTheLastList/ShopTheLastList';

export const MainPage = () => {
  return (
    <BodyWrapper>
      <Carousel />
      <ShopTheLastWrapper>
        <ShopTheLastText>Shop The Latest</ShopTheLastText>
        <ViewAllText>View All</ViewAllText>
      </ShopTheLastWrapper>
      <ShowTheLastList />
    </BodyWrapper>
  );
};
