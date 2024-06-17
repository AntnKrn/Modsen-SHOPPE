import React from 'react';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import { SimilarItems } from './ProductPage.styled';
import { ShopTheLastList } from '../../components/ShopTheLastList/ShopTheLastList';

export const ProductPage = () => {
  //const { productId } = useParams();
  return (
    <main style={{ marginTop: '128px' }}>
      <ProductInfo />
      <ProductDescription />
      <SimilarItems>Similar Items</SimilarItems>
      <ShopTheLastList />
      <div style={{ marginBottom: '250px' }} />
    </main>
  );
};
