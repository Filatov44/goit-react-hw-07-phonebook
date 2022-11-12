import axios from "axios";

const intanceContact = axios.create({
  baseURL: 'https://636f7744f2ed5cb047ddd610.mockapi.io/api/contacts',
});

export const fetchContacts = async () => {
    const { data } = await intanceContact.get('/');
    console.log(data);
    return data;
};

export const addContact = async (contact) => {
    const { data } = await intanceContact.post('/', contact);
    return data;
};

export const deleteContact = async (id) => {
    const { data } = await intanceContact.delete(`/${id}`);
    return data;
}