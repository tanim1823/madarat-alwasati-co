import { Link } from "react-router-dom";
import footerLogo from "../assets/images/footer-logo.png";
const data = {
  bio: "Madarat Alwasati Company holding was established in Al-Riyadh in 1420 AH, Contracting Tranding Manpower Consultancy Rental Equipment Real Estate",
  address1: "Airport Road, The Business Gate Kingdom of Saudi Arab",
  address2: "P.B. BOX NO. 225129 RIYADH 11324 KINGDOM OF SAUDI ARAB",
  phone: `Comming soon`,
  email: `Comming Soon`,
  //9:00pm - 5:00pm Sunday Closed
  time: `Comming Soon`,
  social_link: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
};
const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="widgets-section bg-dark">
        <div className="auto-container">
          <div className="row clearfix">
            {/* <!--Big Column--> */}
            <div className="big-column col-md-6 col-sm-12 col-xs-12">
              <div className="row clearfix">
                {/* <!--Footer Column--> */}
                <div className="footer-column col-md-7 col-sm-6 col-xs-12">
                  {/* <!--Logo Widget--> */}
                  <div className="footer-widget logo-widget">
                    <div className="widget-content">
                      <div className="footer-logo">
                        <Link to="/">
                          <img src={footerLogo} alt="" />
                        </Link>
                      </div>
                      <div className="text text-secondary my-2">{data.bio}</div>
                      <ul className="social-icon-two">
                        {Object.keys(data["social_link"]).length > 0 &&
                          Object.keys(data["social_link"]).map((name, id) => {
                            return (
                              <li key={id}>
                                <a
                                  target="_blank"
                                  rel="noreferrer"
                                  href={data.social_link[name]}
                                >
                                  <span className={`fa fa-${name}`}></span>
                                </a>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!--Footer Column / Links Widget--> */}
                <div className="mt-4 footer-column col-md-5 col-sm-6 col-xs-12">
                  <div className="footer-widget links-widget">
                    <h2 className="text-light">Quick Links</h2>
                    <div className="widget-content">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-secondary">
                        <li className="nav-item" onClick={scrollTop}>
                          <Link
                            to={`/`}
                            className="nav-link active"
                            aria-current="page"
                            onClick={scrollTop}
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item" onClick={scrollTop}>
                          <Link
                            to={`about`}
                            className="nav-link"
                            aria-expanded="false"
                          >
                            About Us
                          </Link>
                        </li>
                        <li className="nav-item" onClick={scrollTop}>
                          <Link
                            to={`mission_vision`}
                            className="nav-link"
                            aria-expanded="false"
                          >
                            Mission And Vision
                          </Link>
                        </li>
                        <li className="nav-item" onClick={scrollTop}>
                          <Link
                            to={`/protfolio`}
                            className="nav-link"
                            aria-expanded="false"
                          >
                            Protfolio
                          </Link>
                        </li>
                        <li className="nav-item" onClick={scrollTop}>
                          <Link to={`services`} className="nav-link">
                            Services
                          </Link>
                        </li>
                        <li className="nav-item" onClick={scrollTop}>
                          <Link to={`projects`} className="nav-link">
                            Projects
                          </Link>
                        </li>
                        <li className="nav-item" onClick={scrollTop}>
                          <Link to={`contract`} className="nav-link">
                            Contract Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--Big Column--> */}
            <div className="mt-4 big-column col-md-6 col-sm-12 col-xs-12">
              <div className="row clearfix">
                {/* <!--Footer Column--> */}
                <div className="footer-column col-md-6 col-sm-6 col-xs-12">
                  <div className="footer-widget address-widget">
                    <h2 className="text-light">Our Address</h2>
                    <div className="widget-content">
                      <ul className="list-style-one">
                        <li>
                          <span className="icon fa fa-map"></span>
                          {data.address1}
                        </li>
                        <li>
                          <span className="icon fa fa-map-marker"></span>
                          {data.address2}
                        </li>
                        <li>
                          <span className="icon fa fa-phone"></span>
                          {data.phone}
                        </li>
                        <li>
                          <span className="icon fa fa-envelope"></span>
                          {data.email}
                        </li>
                        <li>
                          <span className="icon fa fa-clock-o"></span>
                          {data.time}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!--Footer Column--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Footer Bottom--> */}
      <div className="footer-bottom bg-dark text-center py-2">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="column col-md-6 col-sm-6 col-xs-12 ">
              <div
                style={{
                  textAlign: "center",
                }}
                className="copyright text-light"
              >
                Copyright 2023{" "}
                <span className="text-warning">@Madarat Alwasati</span> Co. All
                Right Reserved
              </div>
            </div>
            <div className="column col-md-6 col-sm-6 col-xs-12 ">
              <ul className="footer-nav text-secondary">
                <li
                  onClick={scrollTop}
                  className="icon fa fa-long-arrow-up  border px-2 rounded bg-warning "
                ></li>
                {/* <li>
                  <a>Acces Webmail</a>
                </li>
                <li>
                  <a>Terms & Condition</a>
                </li>
                <li>
                  <a>Privacy</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
