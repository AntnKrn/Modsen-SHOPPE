import React, { useEffect, useState } from 'react';
import { SearchInputWrapper, StyledInput } from './index.styled';
import { Search } from '../../assets/icons/search';
import { useDispatch } from 'react-redux';
import { searchByTitle } from '../../store/features/search/searchSlice';
import { useDebounce } from '../../hooks/useDebounce';

export const SearchInput = ({ state }: { state: string }) => {
  const [searchText, setSearchText] = useState(state);

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
        $Color="gray"
        placeholder="Search..."
        value={searchText}
        onChange={onChangeText}
      />
      <div>
        <Search />
      </div>
    </SearchInputWrapper>
  );
};
