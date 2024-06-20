import React from 'react';
import { ShopListWrapper } from './ShopList.styled';
import { IProduct } from '../../interfaces/IProducts';
import { ShopItem } from '../ShopItem/ShopItem';
import { useGetProductsQuery } from '../../store/api/products/product';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface IShopTheLastList {
  quantityProducts?: string;
}

export const ShopList = ({ quantityProducts }: IShopTheLastList) => {
  const filter = useSelector((state: RootState) => state.filter.filter);

  const { data, isLoading } = useGetProductsQuery(
    quantityProducts ? quantityProducts : `products/${filter}`,
  );

  return (
    <ShopListWrapper>
      {isLoading
        ? null
        : data.map((item: IProduct) => <ShopItem key={item.title} {...item} />)}
    </ShopListWrapper>
  );
};
