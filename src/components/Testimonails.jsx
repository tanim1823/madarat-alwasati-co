const Testimonails = () => {
  return (
    <>
      <div className="auto-container">
        {/* <!--Sec Title--> */}
        <div className="sec-title light centered">
          <h2>Customer Love Us!</h2>
        </div>
        <div className="two-item-carousel owl-carousel owl-theme">
          {/* <!--Testimonial Block--> */}
          <div className="testimonial-block">
            <div className="quote-icon">
              <span className="icon fa fa-quote-left"></span>
            </div>
            <div className="inner-box">
              <div className="text">
                The heights by great mens reached kept were attained by sudden
                flight but they while companion she were tooiling upward in the
                night with some details.
              </div>
              <div className="lower-box clearfix">
                <div className="pull-left">
                  <h3>Ash lee</h3>
                  <div className="designation">Senior UI/UX Designer </div>
                </div>
                <div className="pull-right">
                  <div className="rating">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
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

export default Testimonails;
