export const getContacts = state => state.contacts.contactReducer;
export const getFilter = state => state.contacts.filterReducer;

export const filterContacts = state => {
  const items = getContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};