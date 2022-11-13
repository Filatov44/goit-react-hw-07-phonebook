import * as api from 'services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';

export const fetchContacts = createAsyncThunk(
    'contacts/All',
    async (_, thunkApi) => {
        try {
            const data = await api.fetchContacts();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const data = await api.addContact(contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
    }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const data = await api.deleteContact(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);