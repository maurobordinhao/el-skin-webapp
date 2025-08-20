import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  ready: boolean;
  message: string;
};

const initialState: AppState = {
  ready: true,
  message: 'Hello from Redux',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = appSlice.actions;
export default appSlice.reducer;
