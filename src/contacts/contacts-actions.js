import { createAction } from '@reduxjs/toolkit'

// export const addContactRequest = createAction('app/addContactRequest')
// export const addContactSuccess = createAction('app/addContactSuccess')
// export const addContactRejected = createAction('app/addContactRejected')

export const deleteContactRequest = createAction('app/deleteContactRequest')
export const deleteContactSuccess = createAction('app/deleteContactSuccess')
export const deleteContactRejected = createAction('app/deleteContactRejected')

// export const fetchContactRequest = createAction('app/fetchContactRequest')
// export const fetchContactSuccess = createAction('app/fetchContactSuccess')
// export const fetchContactRejected = createAction('app/fetchContactRejected')

export const changeFilter = createAction('app/changeFilter')


