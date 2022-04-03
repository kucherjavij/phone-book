import axios from "axios"


export async function fetchContact() {
  const { data } = await axios.get(`/contacts`);

  return data;
}

export async function addContacts(name, number) {
  const { data } = await axios.post(`/contacts`, {
    name,
    number,
  });
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
export default {fetchContact,addContacts,deleteContact}