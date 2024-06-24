import React from 'react';
import {
  ProductCost,
  ProductName,
  ShopItemContainer,
  ShopItemIconsContainer,
  ShopItemImg,
  ShopItemWrapper,
} from './ShopItem.styled';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/IProducts';
import { Busket } from '../../assets/icons/busket';
import { Eye } from '../../assets/icons/eye';
import { Heart } from '../../assets/icons/heart';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useAddToBusketMutation } from '../../store/api/busket/busket';

export const ShopItem = React.memo((product: IProduct) => {
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
});
