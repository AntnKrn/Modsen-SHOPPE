import React from 'react';
import { SearchInputWrapper, StyledInput } from './index.styled';
import { Search } from '../../assets/icons/search';

export const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <StyledInput $Color="gray" placeholder="Search..." />
      <div>
        <Search />
      </div>
    </SearchInputWrapper>
  );
};
