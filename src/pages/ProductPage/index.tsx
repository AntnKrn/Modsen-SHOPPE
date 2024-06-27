import React from 'react';
import { ProductInfo } from '../../components/ProductInfo';
import { ProductDescription } from '../../components/ProductDescription';
import { ProductPageMain, SimilarItems, SimilarShopList } from './index.styled';
import { ShopList } from '../../components/ShopList';
import { useParams } from 'react-router-dom';
import {
  useGetProductQuery,
  useGetProductsByLimitQuery,
} from '../../store/api/products/product';

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
