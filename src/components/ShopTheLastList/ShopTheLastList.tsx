import React from 'react';
import { ShopTheLastListWrapper } from './ShopTheLastList.styled';
import { ShopTheLastItem } from '../ShopTheLastItem/ShopTheLastItem';

export const ShopTheLastList = () => {
  return (
    <ShopTheLastListWrapper>
      <ShopTheLastItem />
      <ShopTheLastItem />
      <ShopTheLastItem />
      <ShopTheLastItem />
      <ShopTheLastItem />
      <ShopTheLastItem />
    </ShopTheLastListWrapper>
  );
};
