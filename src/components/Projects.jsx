const Projects = () => {
  return (
    <div className="auto-container">
      {/* <!--Porfolio Tabs--> */}
      <div className="project-tab">
        {/* <!--Sec Title--> */}
        <div className="clearfix">
          <div className="pull-left">
            <h2>Recent Projects</h2>
          </div>
          <div className="tab-btns-box pull-right">
            {/* <!--Tabs Header--> */}
            <div className="tabs-header">
              <ul className="product-tab-btns clearfix">
                <li className="p-tab-btn active-btn" data-tab="#p-tab-1">
                  ALL
                </li>
                <li className="p-tab-btn" data-tab="#p-tab-2">
                  Renovation
                </li>
                <li className="p-tab-btn" data-tab="#p-tab-3">
                  Isolation
                </li>
                <li className="p-tab-btn" data-tab="#p-tab-4">
                  Construction
                </li>
                <li className="p-tab-btn" data-tab="#p-tab-5">
                  architecutre
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!--Tabs Content-->   */}
        <div className="p-tabs-content">
          {/* <!--Portfolio Tab / Active Tab--> */}
          <div className="p-tab active-tab" id="p-tab-1">
            <div className="project-carousel owl-theme owl-carousel">
              {/* <!--Gallery Item--> */}
              <div className="gallery-item">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/gallery/3.jpg" alt="" />
                  </figure>
                  {/* <!--Overlay Box--> */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="images/gallery/3.jpg"
                          className="lightbox-image image-link"
                          data-fancybox-group="example-gallery"
                          title=""
                        >
                          <span className="icon fa fa-expand"></span>
                        </a>
                        <a href="project-detail.html" className="image-link">
                          <span className="icon fa fa-link"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Portfolio Tab--> */}
          <div className="p-tab" id="p-tab-2">
            <div className="project-carousel owl-theme owl-carousel">
              {/* <!--Gallery Item--> */}
              <div className="gallery-item">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/gallery/5.jpg" alt="" />
                  </figure>
                  {/* <!--Overlay Box--> */}
                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <a
                          href="images/gallery/4.jpg"
                          className="lightbox-image image-link"
                          data-fancybox-group="example-gallery"
                          title=""
                        >
                          <span className="icon fa fa-expand"></span>
                        </a>
                        <a href="project-detail.html" className="image-link">
                          <span className="icon fa fa-link"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
