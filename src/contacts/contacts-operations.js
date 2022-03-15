import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import {
    // addContactRequest, addContactSuccess, addContactRejected,
    deleteContactRequest, deleteContactSuccess, deleteContactRejected,
    // fetchContactRequest, fetchContactSuccess, fetchContactRejected
} from "./contacts-actions";
import {fetchContact, addContacts} from './contact-API'
axios.defaults.baseURL = 'https://6201629bfdf50900172499d7.mockapi.io/contacts';



const fetchContacts = createAsyncThunk(
    'app/fetchContact',
    async () => {
    try {
        const contacts = await fetchContact()
            return contacts
    } catch (error) {
        return error}})


export const addContact = createAsyncThunk(
  'contacts/AddContact',
  async ({ name, number }) => {
    try {
      const contact = await addContacts(name, number);
      return contact;
    } catch (error) {
      return error;
    }
  },
);

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest())
    
    axios.delete(`/contacts/${contactId}`).then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactRejected(error)))
};


export default { addContact, deleteContact, fetchContacts };