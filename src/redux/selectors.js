import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.value;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    console.log('contacts from selector', contacts);
    return contacts.filter(contact => {
      return contact.nameInput.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
