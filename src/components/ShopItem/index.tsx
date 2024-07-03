import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Busket } from '../../assets/icons/busket';
import { Eye } from '../../assets/icons/eye';
import { Heart } from '../../assets/icons/heart';
import { useAddToBusketMutation } from '../../store/api/busket/busket';
import { RootState } from '../../store/store';
import { productType } from '../../types/product';

import {
  ProductCost,
  ProductName,
  ShopItemContainer,
  ShopItemIconsContainer,
  ShopItemImg,
  ShopItemWrapper,
} from './index.styled';

export const ShopItem = (product: productType) => {
  const uuid = useSelector((state: RootState) => state.auth.uuid);
  const [updateBusket] = useAddToBusketMutation();

  const onClickBusket = () => {
    updateBusket({
      uuid: uuid,
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <ShopItemWrapper>
      <ShopItemContainer>
        <ShopItemImg src={product.image} />
        <ShopItemIconsContainer>
          <div onClick={onClickBusket}>
            <Busket />
          </div>
          <Link to={`/product/${product.id}`}>
            <Eye />
          </Link>
          <Heart />
        </ShopItemIconsContainer>
      </ShopItemContainer>
      <ProductName>{product.title}</ProductName>
      <ProductCost>${product.price}</ProductCost>
    </ShopItemWrapper>
  );
};
