import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('contacts')) || [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    removeContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const selectContacts = state => state.contacts;

export default contactsSlice.reducer;
