// src/store/slices/searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchState = {
  term: string;
};

const initialState: SearchState = {
  term: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
    clearSearch(state) {
      state.term = '';
    },
  },
});

export const { setSearch, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;