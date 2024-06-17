import React from 'react';
import {
  ProductCost,
  ProductName,
  ShopTheLastItemImg,
  ShopTheLastItemWrapper,
} from './ShopTheLastItem.styled';
import img1 from '../Carousel/img1.jpg';
import { Link } from 'react-router-dom';

export const ShopTheLastItem = () => {
  return (
    <ShopTheLastItemWrapper>
      <Link to="/product/1">
        <ShopTheLastItemImg src={img1} />
        <ProductName>Lira Earrings</ProductName>
        <ProductCost>$ 30,00</ProductCost>
      </Link>
    </ShopTheLastItemWrapper>
  );
};
