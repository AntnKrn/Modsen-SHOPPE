import React from 'react';

import { productType } from '../../types/product';
import { ShopItem } from '../ShopItem';

import { ShopListWrapper } from './index.styled';
import { shopListProps } from './types';

export const ShopList = ({ data }: shopListProps) => {
  return (
    <ShopListWrapper>
      {data.map((item: productType) => (
        <ShopItem key={item.title} {...item} />
      ))}
    </ShopListWrapper>
  );
};
