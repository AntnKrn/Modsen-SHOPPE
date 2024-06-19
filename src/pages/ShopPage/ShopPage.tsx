import React from 'react';
import { ShopTheLatestText } from '../../components/ShopTheLatestText/ShopTheLatestText';
import { LineForFooterHeader } from '../../components/LineForFooterHeader/LineForFooterHeader';
import { CatalogContent } from './ShopPage.styled';
import { CatalogFilter } from '../../components/CatalogFilter/CatalogFilter';
import { ShopList } from '../../components/ShopList/ShopList';

export const ShopPage = () => {
  return (
    <>
      <LineForFooterHeader />
      <main style={{ marginTop: '39px' }}>
        <ShopTheLatestText />
        <div style={{ marginBottom: '39px' }} />
        <CatalogContent>
          <CatalogFilter />
          <ShopList />
        </CatalogContent>
      </main>
    </>
  );
};
