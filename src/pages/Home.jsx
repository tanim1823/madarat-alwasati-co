import HeaderSlider from "../components/HeaderSlider";
import Process from "../components/Process";
import { Link } from "react-router-dom";
/**Image import */
import traningImg from "../assets/images/services/traning.jpg";
import constructionImg from "../assets/images/services/construction.jpg";
import cleanImg from "../assets/images/services/clean.jpg";

const Home = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <HeaderSlider />
      {/* Welcome Section start */}
      <section className="welcome-section-two">
        <div className="auto-container">
          {/*Welcome Title*/}
          <div className="welcome-title">
            <div className="row clearfix">
              <div className="column col-md-3 col-sm-12 col-xs-12">
                <h2>
                  Welcome <br /> To Our{" "}
                  <span className="theme_color">Madarat Alwasati Co.</span>
                </h2>
              </div>
              <div className="column col-md-9 col-sm-12 col-xs-12">
                <div className="text">
                  MAC is a 100% Saudi owned Est. registered under the law of
                  Saudi Arab to support Industrial energy, Manufacturer
                  industry, Construction industry, and IT and Telecom
                  Manufacturer industry. We have experienced in manpower,
                  contracting, engineering and IT supply since last 15 years in
                  KSA and other gulf countries. Now we are providing our
                  services in KSA. Our objective is to work within the
                  well-recognized industrial, stell and solution integrators in
                  KSA, MAC has always prevailed over strong challenges and
                  intense market competition through its highlyprofessional
                  human resources, punctuality and providing the best prioducts
                  and services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Welcome Section end */}

      {/* Services section start */}
      <div className="row">
        {/*Column*/}
        <div className="column col-md-4 col-sm-6 col-xs-12">
          {/*Services Block Three*/}
          <div className="services-block-three">
            <div className="inner-box">
              <div className="content">
                <div className="icon-box">
                  <span className="icon flaticon-wheelbarrow" />
                </div>
                <h3>Design &amp; Build</h3>
                <div className="text">
                  The addition of a 3,000-metric-ton press at Toyota Motor
                  Manufacturing, Texa' plant development as well as demolition
                  and subsequent
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Column*/}
        <div className="column col-md-4 col-sm-6 col-xs-12">
          {/*Services Block Three*/}
          <div className="services-block-three">
            <div className="inner-box">
              <div className="content">
                <div className="icon-box">
                  <span className="icon flaticon-shovel-1" />
                </div>
                <h3>General Construction</h3>
                <div className="text">
                  The addition of a 3,000-metric-ton press at Toyota Motor
                  Manufacturing, Texa' plant development as well as demolition
                  and subsequent
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Column*/}
        <div className="column col-md-4 col-sm-6 col-xs-12">
          {/*Services Block Three*/}
          <div className="services-block-three">
            <div className="inner-box">
              <div className="content">
                <div className="icon-box">
                  <span className="icon flaticon-helmet-1" />
                </div>
                <h3>Effective Team Work</h3>
                <div className="text">
                  The addition of a 3,000-metric-ton press at Toyota Motor
                  Manufacturing, Texa' plant development as well as demolition
                  and subsequent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services section End */}

      {/*FullWidth Section*/}
      <section className="">
        <div className="outer-section clearfix">
          {/*Content Column*/}
          <div className="content-column text-center mb-4 bg-dark py-2 text-light">
            <div className="content-inner">
              <h2>
                Discover <br /> What We offer
              </h2>
              <div className="bold-text ">
                We provie all kind of construction services.
              </div>
              <div className="text mb-2">
                <span className="bold-text">Our Division</span> Contracting
                Tranding Manpower Consultancy Rental Equipment Real State
              </div>
              <Link
                onClick={scrollTop}
                to="/services"
                className="theme-btn btn-style-two"
              >
                See All Services
              </Link>
            </div>
          </div>
          {/*Gallery Column*/}
          <div className="gallery-column">
            <div className="row">
              {/*Default Portfolio Item*/}
              <div className="default-service-item col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="content-inner">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-helmet-1" />
                        </div>
                        <h3>
                          <a>Civil/Construction</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Default Portfolio Item*/}
              <div className="default-service-item col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="content-inner">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-tool" />
                        </div>
                        <h3>
                          <a>Electro-Mechanical Work</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Default Portfolio Item*/}
              <div className="default-service-item col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="content-inner">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-paint-bucket" />
                        </div>
                        <h3>
                          <a>Interior Designing</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Default Portfolio Item*/}
              <div className="default-service-item col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="content-inner">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-shovel-1" />
                        </div>
                        <h3>
                          <a>Architectural Work</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Default Portfolio Item*/}
              <div className="default-service-item col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="content-inner">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-tool" />
                        </div>
                        <h3>
                          <a>HVAC (Central AC Insta;llation)</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Default Portfolio Item*/}
              <div className="default-service-item col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="content-inner">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-tool" />
                        </div>
                        <h3>
                          <a>IT Solution</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Default Portfolio Item*/}
              <div className="default-service-item col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="content-inner">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-paint-bucket" />
                        </div>
                        <h3>
                          <a>Transportation</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Default Portfolio Item*/}
              <div className="default-service-item col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="content-inner">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-helmet-1" />
                        </div>
                        <h3>
                          <a>Infractructure</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Default Portfolio Item*/}
              <div className="default-service-item col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="content-inner">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-shovel-1" />
                        </div>
                        <h3>
                          <a>Landscaping</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End FullWidth Section*/}

      {/* Counter Section Start  */}

      <section className="counter-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Column*/}
            <div className="counter-column col-md-6 col-sm-12 col-xs-12">
              <div className="row clearfix">
                {/*Column*/}
                <div className="column count-box col-md-6 col-sm-6 col-xs-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer">
                        <span>1024</span>
                      </div>
                      <div className="counter-title">Satisfied Client</div>
                    </div>
                  </div>
                </div>
                {/*Column*/}
                <div className="column count-box col-md-6 col-sm-6 col-xs-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer">
                        <span>1567</span>
                      </div>
                      <div className="counter-title">Completed Projects</div>
                    </div>
                  </div>
                </div>
                {/*Column*/}
                <div className="column count-box col-md-6 col-sm-6 col-xs-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer">
                        <span>540</span>
                      </div>
                      <div className="counter-title">Expert Woker</div>
                    </div>
                  </div>
                </div>
                {/*Column*/}
                <div className="column count-box col-md-6 col-sm-6 col-xs-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer">
                        <span>57</span>+
                      </div>
                      <div className="counter-title">Award winner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Column*/}
            <div className="content-column col-md-6 col-sm-12 col-xs-12">
              <div className="content-inner">
                <h2>
                  {/* Leading Construction <br /> Company with Quality Services */}
                  CEO Message
                </h2>
                <div className="text">
                  <p>
                    First and foremost, we extended our sincare thanks and
                    gratitude for showing your interest towards our orgination.
                    It is my greate pleasure to introduce ourself as one of the
                    leading organizations operating in KSA. I would like to
                    bring it to the notice of our valued clients that
                  </p>
                  <p>
                    MADARAT ALWASATI CO. Holding with its competent staff
                    members, stands for quality service to meet our client's
                    desired demands.
                  </p>
                  <p>
                    We have continually been able to go above and beyonds our
                    stated goals and objectives by employing top-notch
                    individuals. Where we lead, and others follow is our tenet
                    of leadersjip.
                  </p>
                  <p>
                    While a very team member intregrates to company's
                    distinactive experioence and ides, M.Shahid and his
                    dependable Board of Directors actively steer the business.
                  </p>
                  <p>
                    Thinks it's important tokeep expanding our protfolio of
                    domestic, international and local assets while keeping a
                    sharp, entrepreneurial eye out for high value development
                    possibilities throughout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter Section End  */}

      {/* Services start */}
      <div className="border m-3 p-2 text-info">
        <h1 className="text-center text-secondary">Our Services</h1>
        <div className="mx-3 row row-cols-1 row-cols-md-3 g-1">
          <div className="col">
            <div
              className="card"
              style={{
                height: "400px",
              }}
            >
              <img
                height="300px"
                src={traningImg}
                className="card-img-top p-3"
                alt="Training & Consultancy"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Training & Consultancy
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{
                height: "400px",
              }}
            >
              <img
                height="300px"
                src={constructionImg}
                className="card-img-top p-3"
                alt="Constructions & Maintenance"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Constructions & Maintenance
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{
                height: "400px",
              }}
            >
              <img
                height="300px"
                src={cleanImg}
                className="card-img-top p-3"
                alt="Cleaning Services"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Cleaning Services</h5>
              </div>
            </div>
          </div>
        </div>
        <Link to="/services">
          <button onClick={scrollTop} className="btn btn-dark  btn-lg pt-2 m-3">
            Details about our services
          </button>
        </Link>
      </div>
      {/* Services end*/}

      <Process />
    </>
  );
};

export default Home;
