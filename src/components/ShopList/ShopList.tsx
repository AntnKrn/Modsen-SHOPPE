import React from 'react';
import { ShopListWrapper } from './ShopList.styled';
import { IProduct } from '../../interfaces/IProducts';
import { ShopItem } from '../ShopItem/ShopItem';

interface IShopTheLastList {
  data: IProduct[];
}

export const ShopList = ({ data }: IShopTheLastList) => {
  return (
    <ShopListWrapper>
      {data.map((item: IProduct) => (
        <ShopItem key={item.title} {...item} />
      ))}
    </ShopListWrapper>
  );
};
