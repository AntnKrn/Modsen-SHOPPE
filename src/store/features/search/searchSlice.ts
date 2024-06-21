import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISearchedProducts {
  text: string;
  priceRange: number[];
  sort: string | null;
}

const initialState: ISearchedProducts = {
  text: '',
  priceRange: [0, 180],
  sort: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchByTitle: (state, action: PayloadAction<string>) => {
      state.text = action.payload.toLowerCase();
    },
    searchByPrice: (state, action: PayloadAction<number[]>) => {
      state.priceRange = [action.payload[0], action.payload[1]];
    },
    sort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { searchByTitle, sort, searchByPrice } = searchSlice.actions;

export default searchSlice.reducer;
