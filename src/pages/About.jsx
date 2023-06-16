import { Link } from "react-router-dom";

import aboutImage from "../assets/images/about.jpg";

const About = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      {/* Page Title */}
      <section className="page-title bg-dark">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Title */}
            <div className="title-column col-md-6 col-sm-8 col-xs-12">
              <h1>About Us</h1>
            </div>
            {/*Bread Crumb */}
            <div className="breadcrumb-column col-md-6 col-sm-4 col-xs-12">
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}

      {/* About FullWidth */}
      <section className="about-section">
        <div className="row">
          {/*Image Column*/}
          <div className="col-md-6">
            <div
              style={{
                marginTop: "100px",
                marginRight: "20px",
              }}
            >
              <img src={aboutImage} height={450} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              {/*Sec Title*/}
              <div className="sec-title">
                <h2>About Us</h2>
              </div>
              <div className="bold-text">
                MADARAT ALWASATI COMPANY Holding was established in Al-Riyadh in
                1420 AH, within a clear vision, which is working to be among the
                distinguished national companies in the Kingdom of Saudi Arabia
              </div>
              <div className="text">
                <p>
                  MAC works in contracting. trading. manpower, consultancy,
                  rental equipment ,real estate. We work with high standards
                  through which we aim to satisfy our customers through high
                  quality in the implementation of projects of any size and with
                  high accuracy. With in this policy, the company is proceeding
                  at a steady pace,on the path of growth,and significant
                  contribution in all regions of the Kingdom of Saudi Arabia MAC
                  also boastsm ultinational workin g hum an resources includin
                  ghighly qualified engineers, admnistrators, technicians, and
                  specialized workers. The policy of the Fou ndation is based on
                  the foundation of our suecess in m aintainin g the confidenee
                  of our custom erslies in un derstanding and meeting the
                  requirem entsofour customers, absolute commitment with the
                  client, and accuracy in implementation throughout the work
                  stages.
                </p>
                <p>
                  We are a leading Saudi group of m ultinational and local
                  service Organizations offering the stren gths and experience
                  of a multination al whilstretaining the agilityand
                  characteristics of a local company.
                </p>
              </div>
              <Link to="/services" className="theme-btn btn-style-one">
                See All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End About FullWidth */}

      {/*Fun Facts Section */}
      <section className="fun-facts-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Column*/}
            <div className="column count-box col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="inner">
                <div className="content">
                  <div className="count-outer">
                    <span className="count-text">1024</span>+
                  </div>
                  <div className="counter-title">Satisfied Client</div>
                </div>
              </div>
            </div>
            {/*Column*/}
            <div className="column count-box col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="inner">
                <div className="content">
                  <div className="count-outer">
                    <span className="count-text">1567</span>
                  </div>
                  <div className="counter-title">Completed Projects</div>
                </div>
              </div>
            </div>
            {/*Column*/}
            <div className="column count-box col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="inner">
                <div className="content">
                  <div className="count-outer">
                    <span className="count-text">57</span>+
                  </div>
                  <div className="counter-title">Award winner</div>
                </div>
              </div>
            </div>
            {/*Column*/}
            <div className="column count-box col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="inner">
                <div className="content">
                  <div className="count-outer">
                    <span className="count-text">540</span>
                  </div>
                  <div className="counter-title">Experienced Woker</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Fun Facts Section */}
    </div>
  );
};

export default About;
