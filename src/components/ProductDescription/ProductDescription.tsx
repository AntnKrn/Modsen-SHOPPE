import React from 'react';
import { LineForFooterHeader } from '../LineForFooterHeader/LineForFooterHeader';
import {
  DesctiptionText,
  DesctiptionTextHeader,
} from './ProductDescription.styled';

export const ProductDescription = () => {
  return (
    <div style={{ marginTop: '123px' }}>
      <DesctiptionTextHeader>Description</DesctiptionTextHeader>
      <LineForFooterHeader />
      <DesctiptionText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
        doloribus. Nesciunt dicta nobis reprehenderit numquam veniam asperiores
        recusandae in provident officia? Fuga laboriosam magnam sed quas facere
        qui quod? Ab! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Similique, officiis, suscipit, nemo fugiat incidunt libero dicta optio
        quisquam reiciendis vero laboriosam nisi sit laudantium quod itaque
        facere! Nostrum, dolores ipsa.
      </DesctiptionText>
    </div>
  );
};
