import React from "react";
import ContactCard from "./ContactCard";

const Contacts = ({ contacts, ...props }) => {
  return (
    <section>
      <div className="row">
        {Object.keys(contacts).map(key => (
          <ContactCard id={key} contact={contacts[key]} key={key} {...props} />
        ))}
      </div>
    </section>
  );
};

export default Contacts;
