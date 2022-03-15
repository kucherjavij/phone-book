import { combineReducers, createReducer } from "@reduxjs/toolkit"
import {
    changeFilter, deleteContactRequest, deleteContactSuccess, deleteContactRejected
} from "./contacts-actions"
import  operations from "./contacts-operations"

const contactReducer = createReducer([], {
    [operations.fetchContacts.fulfilled]: (_, {payload}) =>  payload,
    [operations.addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContactSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload)
})

const loading = createReducer(false, {
    [operations.addContact.pending]: () => true,
    [operations.addContact.fulfilled]: () => false,
    [operations.addContact.rejected]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactRejected]: () => false,
    [operations.fetchContacts.pending]: () => true,
    [operations.fetchContacts.fulfilled]: () => false,
    [operations.fetchContacts.rejected]: () => false,
})

const filterReducer = createReducer('', {
[changeFilter]: (_, {payload}) => payload
})

        export default combineReducers({
            contactReducer,
            filterReducer,
            loading
        })
