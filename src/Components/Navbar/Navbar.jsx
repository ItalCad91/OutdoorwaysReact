import { Link } from "react-router-dom";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"darkblue", marginBottom:"100px"}}>
  <div className="container-fluid">
    <img
    src="/images/Logo.png"
    alt="RR Systems"
    style={{ height: "50px", width: "auto" }}
    />
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="pages" to="/Home" style={{margin:"10px"}}>Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="pages dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color:"white", margin:"10px"}}
          >
            Categories
          </Link>
          <ul className="dropdown-menu">            
            <li>
            <Link className="pages dropdown-item" to="/Men" style={{margin:"10px"}}>Men</Link>
            </li>
            <li>
            <Link className="pages dropdown-item" to="/Women" style={{margin:"10px"}}>Women</Link>
            </li>
            <li>
            <Link className="pages dropdown-item" to="/Kids" style={{margin:"10px"}}>Kids</Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
            <Link className="dropdown-item" to="/Camping" style={{margin:"10px"}}>Camping</Link>
            </li>
          </ul>
        </li>        
        <li className="nav-item">
        <Link className="pages" to="/About" style={{margin:"10px"}}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="pages" to="/Contact" style={{margin:"10px"}}>Contact us</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
