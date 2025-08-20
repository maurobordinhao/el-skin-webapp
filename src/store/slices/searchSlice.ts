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
    setTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
    clearTerm(state) {
      state.term = '';
    },
  },
});

export const { setTerm, clearTerm } = searchSlice.actions;
export default searchSlice.reducer;
