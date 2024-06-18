import React, { useEffect, useState } from 'react';
import {
  ProductCost,
  ProductName,
  ShopTheLastItemImg,
  ShopTheLastItemWrapper,
} from './ShopTheLastItem.styled';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/IProducts';

export const ShopTheLastItem = (product: IProduct) => {
  return (
    <ShopTheLastItemWrapper>
      <Link to={`/product/${product.id}`}>
        <ShopTheLastItemImg src={product.image} />
        <ProductName>{product.title}</ProductName>
        <ProductCost>${product.price}</ProductCost>
      </Link>
    </ShopTheLastItemWrapper>
  );
};
