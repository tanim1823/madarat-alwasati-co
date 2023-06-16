const Modal = ({ title, description, value, className, id }) => {
  return (
    <div>
      {/* Button trigger modal */}
      <button
        style={{
          marginTop: "20px",
        }}
        type="button"
        className={className}
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
      >
        {value && value}
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id={`${id}`}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          // style={{
          //   width: "600px",
          //   height: "500px",
          // }}
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {title && title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{description && description}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
