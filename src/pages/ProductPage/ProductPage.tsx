import React from 'react';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import { SimilarItems } from './ProductPage.styled';
import { ShopList } from '../../components/ShopList/ShopList';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../store/api/products/product';

export const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductQuery(id);

  return (
    <main style={{ marginTop: '128px' }}>
      {isLoading ? null : (
        <>
          <ProductInfo {...data} />
          <ProductDescription description={data.description} />
        </>
      )}
      <SimilarItems>Similar Items</SimilarItems>
      <ShopList quantityProducts="products?limit=3" />
      <div style={{ marginBottom: '250px' }} />
    </main>
  );
};
