import React from 'react';
import { LineForFooterHeader } from '../LineForFooterHeader';
import {
  DesctiptionText,
  DesctiptionTextHeader,
  ProductDescriptionWrapper,
} from './index.styled';

interface IProductDescription {
  description: string;
}
export const ProductDescription = ({ description }: IProductDescription) => {
  return (
    <ProductDescriptionWrapper style={{ marginTop: '123px' }}>
      <DesctiptionTextHeader>Description</DesctiptionTextHeader>
      <LineForFooterHeader />
      <DesctiptionText>{description}</DesctiptionText>
    </ProductDescriptionWrapper>
  );
};
