import React from 'react';
import {
  ProductCost,
  ProductName,
  ShopItemImg,
  ShopItemWrapper,
} from './ShopItem.styled';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/IProducts';

export const ShopItem = (product: IProduct) => {
  return (
    <ShopItemWrapper>
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Link to={`/product/${product.id}`}>
          <ShopItemImg src={product.image} />
          <ProductName>{product.title}</ProductName>
          <ProductCost>${product.price}</ProductCost>
        </Link>
      </div>
    </ShopItemWrapper>
  );
};
