import React from 'react';
import { ShopTheLatestText } from '../../components/ShopTheLatestText/ShopTheLatestText';
import { LineForFooterHeader } from '../../components/LineForFooterHeader/LineForFooterHeader';
import { CatalogContent } from './ShopPage.styled';
import { CatalogFilter } from '../../components/CatalogFilter/CatalogFilter';
import { ShopList } from '../../components/ShopList/ShopList';
import { useSelector } from 'react-redux';
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from '../../store/api/products/product';
import { IProduct } from '../../interfaces/IProducts';
import { RootState } from '../../store/store';

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

  return (
    <>
      <LineForFooterHeader />
      <main style={{ marginTop: '39px' }}>
        <ShopTheLatestText />
        <div style={{ marginBottom: '39px' }} />
        <CatalogContent>
          <CatalogFilter />
          <ShopList
            data={
              isSuccess
                ? data
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
                    })
                : []
            }
          />
        </CatalogContent>
      </main>
    </>
  );
};
