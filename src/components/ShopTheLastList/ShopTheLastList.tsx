import React from 'react';
import { ShopTheLastListWrapper } from './ShopTheLastList.styled';
import { ShopTheLastItem } from '../ShopTheLastItem/ShopTheLastItem';
import { useGetProductsQuery } from '../../store/Product/Product';
import { IProduct } from '../../interfaces/IProducts';

interface IShopTheLastList {
  quantityProducts?: number;
}

export const ShopTheLastList = ({ quantityProducts }: IShopTheLastList) => {
  const { data, error, isLoading } = useGetProductsQuery(quantityProducts);

  return (
    <ShopTheLastListWrapper>
      {isLoading
        ? null
        : data.map((item: IProduct) => (
            <ShopTheLastItem key={item.title} {...item} />
          ))}
    </ShopTheLastListWrapper>
  );
};
