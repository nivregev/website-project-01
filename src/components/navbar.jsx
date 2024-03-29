import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
      <div Card className="container-fluid">
        <Link to="/" className="navbar-brand">
          Project01 <i className="bi bi-geo-fill"></i> App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink to="about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="my-cards" className="nav-link">
                My-Cards
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item me-0">
              <NavLink to="sign-in" className="nav-link ">
                Sign-In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="sign-up" className="nav-link ">
                Sign-Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
