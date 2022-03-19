import axios from "axios"

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export async function fetchContact() {
  const { data } = await axios.get(`/contacts`);

  return data;
}

export async function addContacts(name, phone) {
  const { data } = await axios.post(`/contacts`, {
    name,
    phone,
  });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
export default {fetchContact,addContacts,deleteContact}