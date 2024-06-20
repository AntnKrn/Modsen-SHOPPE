import { createSlice } from '@reduxjs/toolkit';

interface IFilterState {
  filter: string;
}

const initialState: IFilterState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearFilter: (state) => {
      state.filter = '';
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;

export default filterSlice.reducer;
