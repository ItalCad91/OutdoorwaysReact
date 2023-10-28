import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navClass">
      <div className="divClass">
        <img
          src="/images/Logo.png"
          alt="RR Systems"
          style={{ height: "50px", width: "auto" }}
        />
        <Link className="pages" to="/Home">
          Home
        </Link>
        <Link className="pages" to="/Men">
          Men
        </Link>
        <Link className="pages" to="/Women">
          Women
        </Link>
        <Link className="pages" to="/Kids">
          Kids
        </Link>
        <Link className="pages" to="/ContactUs">
          Contact Us
        </Link>
        <Link className="pages" to="/About">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
