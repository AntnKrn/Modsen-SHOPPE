import React from 'react';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import { SimilarItems } from './ProductPage.styled';
import { ShopList } from '../../components/ShopList/ShopList';
import { useParams } from 'react-router-dom';
import {
  useGetProductQuery,
  useGetProductsByLimitQuery,
} from '../../store/api/products/product';

export const ProductPage = () => {
  const { id } = useParams();
  const { data: product, isLoading: isProductLoading } = useGetProductQuery(id);
  const { data: similarProducts, isSuccess: isSimilarSuccess } =
    useGetProductsByLimitQuery(3);
  return (
    <main style={{ marginTop: '128px' }}>
      {isProductLoading ? null : (
        <>
          <ProductInfo {...product} />
          <ProductDescription description={product.description} />
        </>
      )}
      <SimilarItems>Similar Items</SimilarItems>
      <ShopList data={isSimilarSuccess ? similarProducts : []} />
      <div style={{ marginBottom: '250px' }} />
    </main>
  );
};
