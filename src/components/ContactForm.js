import React from "react";

const Form = ({ onSubmit, contact = {} }) => (
  <form
    autoComplete="off"
    onSubmit={e => {
      e.preventDefault();
      e.stopPropagation();
      onSubmit(new FormData(e.target));
    }}
  >
    <div className="form-row">
      <div className="form-group col-md-12">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          defaultValue={contact.name || ""}
        />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-12">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          defaultValue={contact.email || ""}
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="address">Address</label>
      <input
        type="text"
        className="form-control"
        id="address"
        name="address"
        defaultValue={contact.address || ""}
        placeholder="1234 Main St"
      />
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputCity">City</label>
        <input
          type="text"
          className="form-control"
          id="inputCity"
          name="city"
          defaultValue={contact.city || ""}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputZip">Zip</label>
        <input
          type="text"
          className="form-control"
          id="inputZip"
          name="zip"
          defaultValue={contact.zip || ""}
        />
      </div>
    </div>
    <div>
      <button type="submit" className="btn btn-primary">
        Save changes
      </button>
    </div>
  </form>
);

export default Form;
