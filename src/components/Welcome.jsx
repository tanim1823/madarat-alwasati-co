const Welcome = () => {
  return (
    <>
      <div className="auto-container">
        {/* <!--Welcome Title--> */}
        <div className="welcome-title">
          <div className="row clearfix">
            <div className="column col-md-3 col-sm-12 col-xs-12">
              <h2>
                Welcome <br /> To Our Cons
                <span className="theme_color">pro</span>
              </h2>
            </div>
            <div className="column col-md-9 col-sm-12 col-xs-12">
              <div className="text">
                The Conspor Construction Company is a business unit within the
                Construction Division of Fletcher Building Limited, publicly
                listed on the England and Australian stock exchanges, with
                20,000 employes and market capitalisation of $9 billion.
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          {/* <!--Services Block--> */}
          <div className="services-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div
                className="image wow fadeIn"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <a href="service-detail.html">
                  <img src="images/resource/services-1.jpg" alt="" />
                </a>
              </div>
              <div className="lower-content">
                <a href="service-detail.html" className="arrow-box">
                  <span className="arrow flaticon-forward-arrow"></span>
                </a>
                <h3>
                  <a href="service-detail.html">Design & Build</a>
                </h3>
                <div className="text">
                  The addition of a 3,000-metric-ton press at Toyota Motor
                  Manufacturing, Texa' plant development as well as demolition
                  and subsequent
                </div>
              </div>
            </div>
          </div>

          {/* <!--Services Block--> */}
          <div className="services-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div
                className="image wow fadeIn"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <a href="service-detail.html">
                  <img src="images/resource/services-2.jpg" alt="" />
                </a>
              </div>
              <div className="lower-content">
                <a href="service-detail.html" className="arrow-box">
                  <span className="arrow flaticon-forward-arrow"></span>
                </a>
                <h3>
                  <a href="service-detail.html">General Construction</a>
                </h3>
                <div className="text">
                  The addition of a 3,000-metric-ton press at Toyota Motor
                  Manufacturing, Texa' plant development as well as demolition
                  and subsequent
                </div>
              </div>
            </div>
          </div>

          {/* <!--Services Block--> */}
          <div className="services-block col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div
                className="image wow fadeIn"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <a href="service-detail.html">
                  <img src="images/resource/services-3.jpg" alt="" />
                </a>
              </div>
              <div className="lower-content">
                <a href="service-detail.html" className="arrow-box">
                  <span className="arrow flaticon-forward-arrow"></span>
                </a>
                <h3>
                  <a href="service-detail.html">Effective Team Work</a>
                </h3>
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
    </>
  );
};

export default Welcome;
