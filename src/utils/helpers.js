import { getData, postData, putData, deleteData } from "./fetch";

export const getContacts = () => getData("/contacts");
export const getContact = id => getData(`/contacts/${id}`);
export const addContact = contact => postData("/contacts/add", contact);
export const editContact = (id, contact) => putData(`/contacts/${id}`, contact);
export const deleteContact = id => deleteData(`/contacts/${id}`);
