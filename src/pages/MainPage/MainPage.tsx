import React from 'react';
import { Carousel } from '../../components/Carousel/Carousel';
import {
  BodyWrapper,
  ShopTheLastTextWrapper,
  ViewAllText,
} from './MainPage.styled';
import { ShopList } from '../../components/ShopList/ShopList';
import { ShopTheLatestText } from '../../components/ShopTheLatestText/ShopTheLatestText';
import { Link } from 'react-router-dom';
import { useGetProductsByLimitQuery } from '../../store/api/products/product';

export const MainPage = () => {
  const { data, isSuccess } = useGetProductsByLimitQuery(6);
  return (
    <BodyWrapper>
      <Carousel />
      <ShopTheLastTextWrapper>
        <ShopTheLatestText />
        <Link to="/shop">
          <ViewAllText>View All</ViewAllText>
        </Link>
      </ShopTheLastTextWrapper>
      <div style={{ marginBottom: '39px' }} />
      <ShopList data={isSuccess ? data : []} />
    </BodyWrapper>
  );
};
