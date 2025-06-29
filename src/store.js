

import { configureStore, createSlice } from '@reduxjs/toolkit';

const counter = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1 },
    decrement: (state) => { state.count -= 1 },
    reset: (state) => { state.count = 0 },
  },
});

export const { increment, decrement, reset } = counter.actions;

const store = configureStore({
  reducer: { counter: counter.reducer },
});

export default store;
