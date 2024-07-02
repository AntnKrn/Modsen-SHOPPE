import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { CatalogFilter } from '../../components/CatalogFilter';
import {
  FilterSVG,
  MobileFilterWrapper,
} from '../../components/CatalogFilter/index.styled';
import { Divider } from '../../components/Divider';
import { ShopList } from '../../components/ShopList';
import { ShopTheLatestText } from '../../components/ShopTheLatestText';
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from '../../store/api/products/product';
import { RootState } from '../../store/store';

import { filterProducts } from './config';
import { CatalogContent, ShopPageMain } from './index.styled';

export const ShopPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filter = useSelector((state: RootState) => state.filter.filter);
  const searchedText = useSelector((state: RootState) => state.search.text);
  const sortBy = useSelector((state: RootState) => state.search.sort);
  const filteredByPrice = useSelector(
    (state: RootState) => state.search.priceRange,
  );
  const { data, isSuccess } = filter
    ? useGetProductsByCategoryQuery(filter)
    : useGetProductsQuery('');

  const handleClose = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <>
      <Divider />
      <ShopPageMain>
        <ShopTheLatestText />
        <CatalogContent>
          <MobileFilterWrapper>
            <FilterSVG onClick={handleClose} />
            <span>Filters</span>
          </MobileFilterWrapper>
          <CatalogFilter
            isFilterOpen={isFilterOpen}
            handleClose={handleClose}
          />
          <ShopList
            data={
              isSuccess && data
                ? filterProducts(data, searchedText, sortBy, filteredByPrice)
                : []
            }
          />
        </CatalogContent>
      </ShopPageMain>
    </>
  );
};
