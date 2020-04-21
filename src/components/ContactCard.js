import React, { useContext } from "react";
import AppContext from "../AppContext";

export default ({ contact, id }) => {
  const { editContact, deleteContact } = useContext(AppContext);
  if (!contact) {
    return null;
  }
  return (
    <div className="col-4 mt-3 mb-3">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title m-0">{contact.name || ""}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{contact.email}</li>
          <li className="list-group-item">
            {contact.address}, {contact.city}, {contact.zip}
          </li>
        </ul>
        <div className="card-footer">
          <button
            type="button"
            onClick={() => editContact(id)}
            className="btn btn-outline-primary btn-sm"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => deleteContact(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
