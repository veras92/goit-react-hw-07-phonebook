import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    filterContacts(state, action) {
      console.log(action.payload);

      state.value = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
