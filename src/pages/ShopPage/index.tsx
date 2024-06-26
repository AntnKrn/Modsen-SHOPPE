import React, { useState } from 'react';
import { ShopTheLatestText } from '../../components/ShopTheLatestText';
import { Divider } from '../../components/Divider';
import { CatalogContent, ShopPageMain } from './index.styled';
import { CatalogFilter } from '../../components/CatalogFilter';
import { ShopList } from '../../components/ShopList';
import { useSelector } from 'react-redux';
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from '../../store/api/products/product';
import { IProduct } from '../../interfaces/IProducts';
import { RootState } from '../../store/store';
import {
  FilterSVG,
  MobileFilterWrapper,
} from '../../components/CatalogFilter/index.styled';

export const ShopPage = () => {
  const filter = useSelector((state: RootState) => state.filter.filter);
  const seatchedText = useSelector((state: RootState) => state.search.text);
  const sortBy = useSelector((state: RootState) => state.search.sort);
  const filteredByPrice = useSelector(
    (state: RootState) => state.search.priceRange,
  );
  const { data, isSuccess } = filter
    ? useGetProductsByCategoryQuery(filter)
    : useGetProductsQuery('');

  const filterProducts = (data: IProduct[]) => {
    return data
      .filter((product: IProduct) =>
        product.title.toLowerCase().includes(seatchedText),
      )
      .filter(
        (product: IProduct) =>
          product.price > filteredByPrice[0] &&
          product.price < filteredByPrice[1],
      )
      .sort((a: IProduct, b: IProduct) => {
        if (sortBy === 'Ascending') return a.price - b.price;
        if (sortBy === 'Descending') return b.price - a.price;
        if (sortBy === null) return;
      });
  };
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
          <ShopList data={isSuccess && data ? filterProducts(data) : []} />
        </CatalogContent>
      </ShopPageMain>
    </>
  );
};
