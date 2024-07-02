import React from 'react';

import { IProduct } from '../../interfaces/IProducts';
import { ShopItem } from '../ShopItem';

import { ShopListWrapper } from './index.styled';

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
