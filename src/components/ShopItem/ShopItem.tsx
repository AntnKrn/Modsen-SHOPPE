import React from 'react';
import {
  HoverItem,
  ProductCost,
  ProductName,
  ShopItemImg,
  ShopItemWrapper,
} from './ShopItem.styled';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/IProducts';
import { Busket } from '../../assets/icons/busket';
import { Eye } from '../../assets/icons/eye';
import { Heart } from '../../assets/icons/heart';

export const ShopItem = (product: IProduct) => {
  return (
    <ShopItemWrapper>
      <Link to={`/product/${product.id}`}>
        <div style={{ position: 'relative' }}>
          <ShopItemImg src={product.image} />
          <HoverItem>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <Busket />
              <Eye />
              <Heart />
            </div>
          </HoverItem>
        </div>

        <ProductName>{product.title}</ProductName>
        <ProductCost>${product.price}</ProductCost>
      </Link>
    </ShopItemWrapper>
  );
};
