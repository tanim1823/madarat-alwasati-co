import { Link } from "react-router-dom";
import { useState } from "react";

const initialState = {
  username: "",
  email: "",
  subject: "",
  message: "",
};

const info = {
  address1: "Airport Road, The Business Gate Kingdom of Saudi Arab",
  address2: "P.B. BOX NO. 225129 RIYADH 11324 KINGDOM OF SAUDI ARAB",
  phone: `Comming soon`,
  email: `Comming Soon`,
};

const Contract = () => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = (event) => {
    setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table(state);
  };

  return (
    <>
      {/* Page Title */}
      <section className="page-title bg-dark">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Title */}
            <div className="title-column col-md-6 col-sm-8 col-xs-12">
              <h1>Contact Us</h1>
            </div>
            {/*Bread Crumb */}
            <div className="breadcrumb-column col-md-6 col-sm-4 col-xs-12">
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/*Contact Section*/}
      <section className="contact-section">
        <div className="container">
          <div className="row clearfix">
            {/*Column*/}
            <div className="column col-md-8 col-sm-12 col-xs-12">
              <h2>Send A Message</h2>
              <div className="contact-form">
                {/*Comment Form*/}
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="column col-md-6 col-sm-6 col-xs-12">
                      {/*Form Group*/}
                      <div className="form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Your Name*"
                          required=""
                          value={state.username}
                          onChange={handleChange}
                        />
                      </div>
                      {/*Form Group*/}
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          required=""
                          value={state.email}
                          onChange={handleChange}
                        />
                      </div>
                      {/*Form Group*/}
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required=""
                          value={state.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="column col-md-6 col-sm-6 col-xs-12">
                      {/*Form Group*/}
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          value={state.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="column col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          name="submit-form"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/*Column*/}
            <div className="column info-column col-md-4 col-sm-12 col-xs-12">
              <h2>Our Address</h2>
              <ul className="contact-info">
                <li>
                  <h4>E-mail</h4>
                  {info.email}
                </li>
                <li>
                  <h4>Phone</h4>
                  {info.phone}
                </li>
                <li>
                  <h4>Address</h4>
                  <span>{info.address1}</span>
                  <span>{info.address2}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*End Contact Section*/}
    </>
  );
};

export default Contract;
