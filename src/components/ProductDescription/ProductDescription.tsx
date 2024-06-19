import React from 'react';
import { LineForFooterHeader } from '../LineForFooterHeader/LineForFooterHeader';
import {
  DesctiptionText,
  DesctiptionTextHeader,
} from './ProductDescription.styled';

interface IProductDescription {
  description: string;
}
export const ProductDescription = ({ description }: IProductDescription) => {
  return (
    <div style={{ marginTop: '123px' }}>
      <DesctiptionTextHeader>Description</DesctiptionTextHeader>
      <LineForFooterHeader />
      <DesctiptionText>{description}</DesctiptionText>
    </div>
  );
};
