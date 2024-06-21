import React, { useState } from 'react';
import { SearchInputWrapper, StyledInput } from './index.styled';
import { Search } from '../../assets/icons/search';
import { useDispatch } from 'react-redux';
import { searchByTitle } from '../../store/features/search/searchSlice';

export const SearchInput = ({ state }: { state: string }) => {
  const [searchText, setSearchText] = useState(state);

  const dispatch = useDispatch();

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    dispatch(searchByTitle(e.target.value));
  };
  return (
    <SearchInputWrapper>
      <StyledInput
        $Color="gray"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onChangeText(e)}
      />
      <div>
        <Search />
      </div>
    </SearchInputWrapper>
  );
};
