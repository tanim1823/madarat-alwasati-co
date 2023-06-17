import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Header = () => {
    const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="navbar fixed-top navbar-dark navbar-expand-md bg-dark fixed-top">
      <div className="container-fluid">
        <span>
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt=""
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            />
            <span className="navbar-brand mb-0  h1">Madarat Alwasati Co.</span>
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Madarat Alwasati Company
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body bg-dark">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li onclick={scrollTop} className="nav-item" data-bs-dismiss="offcanvas">
                <Link to={`/`} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li onclick={scrollTop}  className="nav-item dropdown">
                <Link
                  to={`/about`}
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onclick={scrollTop}  data-bs-dismiss="offcanvas">
                    <Link to={`/about`} className="dropdown-item">
                      About us
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li onclick={scrollTop}  data-bs-dismiss="offcanvas">
                    <Link to={`/mission_vision`} className="dropdown-item">
                      Mission And Vision
                    </Link>
                  </li>
                  <li></li>
                  <li onclick={scrollTop}  data-bs-dismiss="offcanvas">
                    <Link to={`/Protfolio`} className="dropdown-item">
                      Protfolio
                    </Link>
                  </li>
                </ul>
              </li>
              <li onclick={scrollTop}  className="nav-item" data-bs-dismiss="offcanvas">
                <Link to={`/protfolio`} className="nav-link">
                  Protfolio
                </Link>
              </li>
              <li onclick={scrollTop}  className="nav-item" data-bs-dismiss="offcanvas">
                <Link to={`/services`} className="nav-link">
                  Services
                </Link>
              </li>
              <li onclick={scrollTop}  className="nav-item" data-bs-dismiss="offcanvas">
                <Link to={`/projects`} className="nav-link">
                  Projects
                </Link>
              </li>
              <li onclick={scrollTop}  className="nav-item" data-bs-dismiss="offcanvas">
                <Link to={`/contract`} className="nav-link">
                  Contract Us
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                Admin Panel
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
