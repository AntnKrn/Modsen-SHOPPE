import React from 'react';
import { CatalogFilterWrapper } from './CatalogFilter.styled';
import { Search } from '../../assets/icons/search';
import { ShopSelect } from '../ShopSelect/ShopSelect';
import { PriceInputFilter } from '../PriceInput/PriceInputFilter';
import { Input } from '../Input/Input';

/* Sort by предполагает реализацию сортировки по убыванию и возрастаю, также сортировка
может быть не указана, тогда поиск осуществляется без учета сортировки. 
Shop by предполагает выбор только определенной категории из выпадающего списка, 
также категория может быть не указана, тогда в этом случае поиск производится по всем категориям. 
Также есть возможность выбора диапазона цены, в зависимости от указания параметров, 
данные должны отображаться корректно. Если ничего не найдено, то должен отображаться альтернативный текст.
При нажатии на карточку, пользователь переходит на страницу Product. */

export const CatalogFilter = () => {
  return (
    <CatalogFilterWrapper>
      {/* <Input color="gray" placeholder="Search... ">
        <Search />
      </Input> */}
      <ShopSelect nameSelect="Shop by" options={['lalala', 'fdasfdas']} />
      <ShopSelect nameSelect="Sort by" options={['By high', 'By Low']} />
      <PriceInputFilter />
    </CatalogFilterWrapper>
  );
};
