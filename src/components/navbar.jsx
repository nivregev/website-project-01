const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
      <div Card class="container-fluid">
        <a class="navbar-brand" href="#">
          React <i className="bi bi-geo-fill"></i> App
        </a>
        <button
          class="navbar-toggler"
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
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                My-Cards
              </a>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto mb-2 mb-sm-0">
            <li class="nav-item me-0">
              <a class="nav-link disabled">Sing-In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Sing-Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
