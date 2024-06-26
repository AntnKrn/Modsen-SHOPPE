import React, { useEffect, useState } from 'react';
import { SearchInputWrapper, StyledInput, StyledSearch } from './index.styled';
import { useDispatch, useSelector } from 'react-redux';
import { searchByTitle } from '../../store/features/search/searchSlice';
import { useDebounce } from '../../hooks/useDebounce';
import { RootState } from '../../store/store';

export const SearchInput = () => {
  const searchedText = useSelector((state: RootState) => state.search.text);

  const [searchText, setSearchText] = useState(searchedText);

  const dispatch = useDispatch();
  const debouncedSearch = useDebounce(searchText);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    dispatch(searchByTitle(searchText));
  }, [debouncedSearch]);

  return (
    <SearchInputWrapper>
      <StyledInput
        placeholder="Search..."
        value={searchText}
        onChange={onChangeText}
      />
      <StyledSearch />
    </SearchInputWrapper>
  );
};
