import PropTypes from "prop-types";
import {  useDispatch, useSelector } from "react-redux";
import { DeleteBtn, ContactListItem } from "./contactList.styled"
import contactsOperations from "../contacts/contacts-operations"
import { filterContacts } from "../contacts/contacts-selectors"
import { useEffect } from "react";

export default function ContactList() {
    const onRender = useSelector(filterContacts)
    const dispatch = useDispatch()

console.log(onRender);
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch]);

     return  (<div>
      <h2>Contacts</h2>
      <ul>
     {onRender.map(({name, phone, id}) => (<ContactListItem key={id}>
       {name} : {phone} 
       <DeleteBtn
           type='button'
           onClick={() => dispatch(contactsOperations.deleteContact(id))}>Delete
       </DeleteBtn>
     </ContactListItem>))}
   </ul></div>)
  
}
ContactList.propTypes={
  onRender:  PropTypes.array,
  deleteContacts: PropTypes.func
}

   
       


 
