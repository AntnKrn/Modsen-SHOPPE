import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetCategoriesQuery } from '../../store/api/products/product';
import {
  clearFilter,
  setFilter,
} from '../../store/features/filter/filterSlice';
import { sort } from '../../store/features/search/searchSlice';
import { RootState } from '../../store/store';
import { Chooser } from '../Chooser';
import { PriceInputFilter } from '../PriceInput';
import { SearchInput } from '../SearchInput';

import {
  CatalogFilterWrapper,
  CloseMenuWrapper,
  StyledCloseMenu,
} from './index.styled';

interface ICatalogFilter {
  isFilterOpen: boolean;
  handleClose(): void;
}

export const CatalogFilter = ({
  isFilterOpen,
  handleClose,
}: ICatalogFilter) => {
  const sortByOptions = ['Ascending', 'Descending'];
  const filter = useSelector((state: RootState) => state.filter.filter);
  const sortBy = useSelector((state: RootState) => state.search.sort);
  const filteredByPrice = useSelector(
    (state: RootState) => state.search.priceRange,
  );

  const { data, isLoading } = useGetCategoriesQuery(null);

  const dispatch = useDispatch();

  const onClickShopBy = (option: string) => {
    option ? dispatch(setFilter(option)) : dispatch(clearFilter());
  };

  const onClickSortBy = (option: string) => {
    option ? dispatch(sort(option)) : dispatch(sort(null));
  };

  return (
    <CatalogFilterWrapper $isOpen={isFilterOpen}>
      <SearchInput />
      <CloseMenuWrapper onClick={handleClose}>
        <StyledCloseMenu />
      </CloseMenuWrapper>
      <Chooser
        state={filter}
        chooserText="Shop By"
        options={isLoading ? [] : data}
        onClick={onClickShopBy}
      />
      <Chooser
        state={sortBy}
        chooserText="Sort By"
        options={sortByOptions}
        onClick={onClickSortBy}
      />
      <PriceInputFilter state={filteredByPrice} />
    </CatalogFilterWrapper>
  );
};
