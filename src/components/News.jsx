const News = () => {
  return (
    <>
      <div className="auto-container">
        {/* <!--Sec Title--> */}
        <div className="sec-title">
          <h2>Latest News</h2>
        </div>
        <div className="three-item-carousel owl-carousel owl-theme">
          {/* <!--News Block--> */}
          <div className="news-block">
            <div className="inner-box">
              <div className="image">
                <a href="blog-single.html">
                  <img src="images/resource/news-1.jpg" alt="" />
                </a>
              </div>
              <div className="lower-content">
                <div className="post-date">Posted on 24 May, 2017</div>
                <h3>
                  <a href="blog-single.html">
                    Provide qualtiy productivity with certified engineers
                  </a>
                </h3>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectet adipi elit sed do
                  eiusmod tempor incidid..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
