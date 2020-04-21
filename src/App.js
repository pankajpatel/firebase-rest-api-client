import React, { useEffect, useState } from "react";
import Modal from "./components/Modal";
import CrudContext from "./AppContext";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import * as helpers from "./utils/helpers";
import ContactForm from "./components/ContactForm";
import objectFromFormData from "./utils/objectFromFormData";
import "./App.css";

const App = () => {
  const [contacts, updateContacts] = useState({});
  const [contactId, setContactId] = useState(null);
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  useEffect(() => {
    helpers.getContacts().then(updateContacts);
  }, []);

  const addContact = (contact) =>
    helpers.addContact(contact).then(() => {
      updateContacts({ ...contacts, contact });
    });

  const editContact = (id, contact) =>
    helpers.editContact(id, contact).then(() => {
      updateContacts({ ...contacts, ...{ [id]: contact } });
    });

  const deleteContact = (id) =>
    helpers.deleteContact(id).then(() => {
      delete contacts[id];
      updateContacts({ ...contacts });
    });

  const onClickEditContact = (id) => {
    setContactId(id);
    toggle();
  };

  const onSubmit = (formData) => {
    const data = objectFromFormData(formData);
    contactId ? editContact(contactId, data) : addContact(data);
    setContactId(null);
    toggle();
  };

  const getContactModal = () => {
    const contact = contacts[contactId];
    const props = { contact, onSubmit, key: contactId || "new" };
    const modalProps = {
      toggle,
      open,
      title: `${contact ? "Edit" : "Add"} Contact`,
    };
    return (
      <Modal {...modalProps}>
        <ContactForm {...props} />
      </Modal>
    );
  };

  return (
    <CrudContext.Provider
      value={{
        addContact,
        deleteContact,
        editContact: onClickEditContact,
      }}
    >
      <main className="container">
        <Header onClickAdd={toggle} />
        <Contacts
          contacts={contacts}
          onClickEditContact={onClickEditContact}
          onClickDeleteContact={deleteContact}
        />
        {open ? getContactModal() : null}
      </main>
    </CrudContext.Provider>
  );
};

export default App;
