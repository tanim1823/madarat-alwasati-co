const Members = () => {
  return (
    <>
      <div className="auto-container">
        {/* <!--Sec Title--> */}
        <div className="sec-title">
          <h2>Our Members</h2>
        </div>
        <div className="row clearfix">
          {/* <!--Team Member--> */}
          <div className="team-member col-md-6 col-sm-12 col-xs-12">
            <div className="inner-box">
              <div className="row clearfix">
                {/* <!--Image Column--> */}
                <div className="image-column col-md-5 col-sm-5 col-xs-12">
                  <div className="image">
                    <img src="images/resource/team-1.jpg" alt="" />
                  </div>
                </div>
                {/* <!--Content Column--> */}
                <div className="content-column col-md-7 col-sm-7 col-xs-12">
                  <div className="content-inner">
                    <div className="designation">Co-Founder</div>
                    <h3>
                      <a href="#">Rashedul Kabir</a>
                    </h3>
                    <div className="text">
                      She’s a graphic design graduate who felt the lure of
                      digital early on. An experts in web accessibility
                    </div>
                    <ul className="social-icon-one">
                      <li>
                        <a href="#">
                          <span className="fa fa-facebook"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-linkedin"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-pinterest-p"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
