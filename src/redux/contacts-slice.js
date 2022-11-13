import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contacts-operation';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.isLoading = true;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.isLoading = true;
      store.error = payload;
    },
    [addContact.pending]: store => {
      store.isLoading = true;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.isLoading = true;
      store.error = payload;
    },
    [deleteContact.pending]: store => {
      store.isLoading = true;
    },
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload.id);
    },
    [deleteContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
})

export default contactsSlice.reducer;

export const { changeFilter } = filterSlice.actions;

//Оставлю как пример для локалсториджа

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { contacts: [], filter: '' },
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     changeFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const persistContactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact, changeFilter } =
//   contactsSlice.actions;

// export const getContacts = state => state.contacts.contacts;
// export const getFilter = state => state.contacts.filter;