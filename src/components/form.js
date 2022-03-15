import React, {useState} from "react";
import PropTypes from "prop-types";
import {Input} from "./input.styled"
import {DeleteBtn } from "./contactList.styled"
import { useDispatch, useSelector } from "react-redux";
import contactOperations from "../contacts/contacts-operations"
import { getContacts } from "../contacts/contacts-selectors";


export default function Form (){
   const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const selector = useSelector(getContacts) 
    const dispatch = useDispatch()


   const hendleInputChange = e => {
        const {name, value} = e.target

        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
            default:
                return;
        }
        }
    
        const handleSubmit = e=> {
            e.preventDefault();

        const validator = name =>
            selector.find(contact => contact.name === name);

        validator(name)
            ? alert(`${name} is already in contacts`)
            : dispatch(contactOperations.addContact({name, number}));
             
        setName('')
        setNumber('')

        }
        
    
   
        return(
            <form onSubmit={handleSubmit}>
          <label>
            Name
            <br/>
          <Input
      type="text"
      value={name}
      onChange={hendleInputChange}
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    /></label><br/>
    <label>
        Number<br/>
    <Input
      type="tel"
      value={number}
      onChange={hendleInputChange}
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    /></label>
    <br/>
    <DeleteBtn type="submit" >Add contact</DeleteBtn>
    </form>
        )}


Form.propTypes={
    onSubmit:  PropTypes.func
}

// const mapDispatchToProps = dispatch => ({
//     onSubmit: (names, number) => dispatch(contacActions.addContact(names, number))
// })

