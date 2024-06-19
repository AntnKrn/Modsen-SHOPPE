import React from 'react';
import { ShopListWrapper } from './ShopList.styled';
import { useGetProductsQuery } from '../../store/Product/Product';
import { IProduct } from '../../interfaces/IProducts';
import { ShopItem } from '../ShopItem/ShopItem';

interface IShopTheLastList {
  quantityProducts?: number;
}

export const ShopList = ({ quantityProducts }: IShopTheLastList) => {
  const { data, isLoading } = useGetProductsQuery(quantityProducts);

  return (
    <ShopListWrapper>
      {isLoading
        ? null
        : data.map((item: IProduct) => <ShopItem key={item.title} {...item} />)}
    </ShopListWrapper>
  );
};
