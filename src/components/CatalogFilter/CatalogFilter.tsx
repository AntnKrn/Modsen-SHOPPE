import React from 'react';
import { CatalogFilterWrapper } from './CatalogFilter.styled';
import { PriceInputFilter } from '../PriceInput/PriceInputFilter';
import { Chooser } from '../Chooser/Chooser';
import { useGetCategoriesQuery } from '../../store/api/products/product';
import { SearchInput } from '../SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilter,
  clearFilter,
} from '../../store/features/filter/filterSlice';
import { sort } from '../../store/features/search/searchSlice';
import { RootState } from '../../store/store';

export const CatalogFilter = () => {
  const filter = useSelector((state: RootState) => state.filter.filter);
  const seatchedText = useSelector((state: RootState) => state.search.text);
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
    <CatalogFilterWrapper>
      <SearchInput state={seatchedText} />
      <Chooser
        state={filter}
        chooserText="Shop By"
        options={isLoading ? [] : data}
        onClick={onClickShopBy}
      />
      <div style={{ margin: '8px 0px' }} />
      <Chooser
        state={sortBy}
        chooserText="Sort By"
        options={['Ascending', 'Descending']}
        onClick={onClickSortBy}
      />
      <PriceInputFilter state={filteredByPrice} />
    </CatalogFilterWrapper>
  );
};
