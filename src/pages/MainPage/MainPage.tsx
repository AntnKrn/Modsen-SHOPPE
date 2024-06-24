import React from 'react';
import { Carousel } from '../../components/Carousel/Carousel';
import {
  BodyWrapper,
  ImgWrapper,
  ShopTheLastTextWrapper,
  ViewAllText,
} from './MainPage.styled';
import { ShopList } from '../../components/ShopList/ShopList';
import { ShopTheLatestText } from '../../components/ShopTheLatestText/ShopTheLatestText';
import { Link } from 'react-router-dom';
import { useGetProductsByLimitQuery } from '../../store/api/products/product';
import { Loader } from '../../components/Loader/index.styled';

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
