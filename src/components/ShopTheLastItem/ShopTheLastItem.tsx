import React from 'react';
import {
  ProductCost,
  ProductName,
  ShopTheLastItemImg,
  ShopTheLastItemWrapper,
} from './ShopTheLastItem.styled';
import img1 from '../Carousel/img1.jpg';

export const ShopTheLastItem = () => {
  return (
    <ShopTheLastItemWrapper>
      <ShopTheLastItemImg src={img1} />
      <ProductName>Lira Earrings</ProductName>
      <ProductCost>$ 30,00</ProductCost>
    </ShopTheLastItemWrapper>
  );
};
