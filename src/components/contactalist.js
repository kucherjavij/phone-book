import PropTypes from "prop-types";
import {  useDispatch, useSelector } from "react-redux";
import contactsOperations from "../contacts/contacts-operations"
import { filterContacts } from "../contacts/contacts-selectors"
import { useEffect } from "react";
import s from './contactList.module.css'

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
     {onRender.map(({name, number, id}) => (<li className={s.li} key={id}>
       {name} : {number} 
       <button
           type='button'
         onClick={() => dispatch(contactsOperations.deleteContact(id))}
        className={s.button}
       >Delete
       </button>
     </li>))}
   </ul></div>)
  
}
ContactList.propTypes={
  onRender:  PropTypes.array,
  deleteContacts: PropTypes.func
}

   
       


 
