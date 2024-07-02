import React from 'react';
import { useParams } from 'react-router-dom';

import { ProductDescription } from '../../components/ProductDescription';
import { ProductInfo } from '../../components/ProductInfo';
import { ShopList } from '../../components/ShopList';
import {
  useGetProductQuery,
  useGetProductsByLimitQuery,
} from '../../store/api/products/product';

import { ProductPageMain, SimilarItems, SimilarShopList } from './index.styled';

export const ProductPage = () => {
  const { id } = useParams();
  const { data } = useGetProductQuery(Number(id));

  const { data: similarProducts, isSuccess: isSimilarSuccess } =
    useGetProductsByLimitQuery(3);
  return (
    <ProductPageMain>
      {data ? (
        <>
          <ProductInfo {...data} />
          <ProductDescription description={data.description} />
        </>
      ) : null}
      <SimilarItems>Similar Items</SimilarItems>
      <SimilarShopList>
        <ShopList data={isSimilarSuccess ? similarProducts : []} />
      </SimilarShopList>
    </ProductPageMain>
  );
};
