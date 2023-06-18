import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      {/* Page Title */}
      <section className="page-title bg-dark">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Title */}
            <div className="title-column col-md-6 col-sm-8 col-xs-12">
              <h1>Our Projects</h1>
            </div>
            {/*Bread Crumb */}
            <div className="breadcrumb-column col-md-6 col-sm-4 col-xs-12">
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title */}
      <div className="container">
        <h1 className="display-4 my-4 text-center text-danger">
          On Developing mood, Coming soon.
        </h1>
      </div>
    </>
  );
};

export default Projects;
