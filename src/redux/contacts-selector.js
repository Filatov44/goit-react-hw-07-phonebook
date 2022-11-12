export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getState = ({ contacts }) => ({
  loading: contacts.loading,
  error: contacts.error,
});
