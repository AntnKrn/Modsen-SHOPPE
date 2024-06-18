import React from 'react';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import { SimilarItems } from './ProductPage.styled';
import { ShopTheLastList } from '../../components/ShopTheLastList/ShopTheLastList';
import { useParams } from 'react-router-dom';
import { useGetProductMutation } from '../../store/Product/Product';

export const ProductPage = () => {
  const { productId } = useParams();
  return (
    <main style={{ marginTop: '128px' }}>
      <ProductInfo />
      <ProductDescription />
      <SimilarItems>Similar Items</SimilarItems>
      <ShopTheLastList quantityProducts={3} />
      <div style={{ marginBottom: '250px' }} />
    </main>
  );
};
