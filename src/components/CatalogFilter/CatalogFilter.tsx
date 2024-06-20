import React from 'react';
import { CatalogFilterWrapper } from './CatalogFilter.styled';
import { PriceInputFilter } from '../PriceInput/PriceInputFilter';
import { Chooser } from '../Chooser/Chooser';
import { useGetCategoriesQuery } from '../../store/api/products/product';
import { SearchInput } from '../SearchInput';

export const CatalogFilter = () => {
  const { data, isLoading } = useGetCategoriesQuery(null);

  return (
    <CatalogFilterWrapper>
      <SearchInput />
      <Chooser chooserText="Shop By" options={isLoading ? [] : data} />
      <div style={{ margin: '8px 0px' }} />
      <Chooser chooserText="Sort By" options={['By high', 'By Low']} />
      <PriceInputFilter />
    </CatalogFilterWrapper>
  );
};
