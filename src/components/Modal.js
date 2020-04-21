import React from "react";

export default ({ children, open, toggle, title = "Modal" }) => (
  <div
    className={`modal fade ${open ? "show" : ""}`}
    id="exampleModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="FormModal"
    aria-hidden="true"
    style={{
      background: "rgba(0, 0, 0, 0.4)",
      display: open ? "block" : "none"
    }}
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="FormModal">
            {title}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={toggle}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  </div>
);
