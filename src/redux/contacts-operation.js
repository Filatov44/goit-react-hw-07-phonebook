import * as api from 'services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const isDublicate = ({ name, number }, contacts) => {
    const result = contacts.find(item => {
        return (
          name.toLowerCase() === item.name.toLowerCase() &&
          number.toLowerCase() === item.number.toLowerCase()
        );
    })
    return Boolean(result)
}

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
    },
    {
        condition: (data, { getState }) => {
    const { contacts } = getState();
    if (isDublicate(data, contacts.items)) {
        return toast.info(
        `Контакт с именем ${data.name} или с ${data.number} уже находится в телефонной книге`
      );
    }
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