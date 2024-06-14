import React from 'react';
import { ShopTheLastListWrapper } from './ShopTheLastList.styled';
import { ShopTheLastItem } from '../ShopTheLastItem/ShopTheLastItem';

export const ShowTheLastList = () => {
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
