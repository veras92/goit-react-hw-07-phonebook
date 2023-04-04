import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: [...action.payload.sort((a, b) => b.id - a.id)],
        };
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: [action.payload, ...state.items],
        };
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        console.log('payload on delete', action.payload);
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
