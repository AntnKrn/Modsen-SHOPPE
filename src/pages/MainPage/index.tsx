import React from 'react';
import { Link } from 'react-router-dom';

import { Carousel } from '../../components/Carousel';
import { Loader } from '../../components/Loader/index.styled';
import { ShopList } from '../../components/ShopList';
import { ShopTheLatestText } from '../../components/ShopTheLatestText';
import { useGetProductsByLimitQuery } from '../../store/api/products/product';

import {
  BodyWrapper,
  ImgWrapper,
  ShopTheLastTextWrapper,
  ViewAllText,
} from './index.styled';

export const MainPage = () => {
  const { data, isSuccess } = useGetProductsByLimitQuery(6);
  return (
    <BodyWrapper>
      <ImgWrapper>
        {isSuccess ? <Carousel products={data.slice(0, 5)} /> : <Loader />}
      </ImgWrapper>

      <ShopTheLastTextWrapper>
        <ShopTheLatestText />
        <Link to="/shop">
          <ViewAllText>View All</ViewAllText>
        </Link>
      </ShopTheLastTextWrapper>
      <div style={{ marginBottom: '39px' }} />
      {isSuccess ? <ShopList data={data} /> : <Loader />}
    </BodyWrapper>
  );
};
