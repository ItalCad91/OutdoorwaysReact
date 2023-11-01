import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";

const NavbarContainer = styled.nav`
  background-color: darkblue;
  margin-bottom: 100px;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;

const NavToggler = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: darkblue;
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16m-7 6h7'/%3E%3C/svg%3E");
  }
`;

const NavItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 10px;
`;

const NavLink = styled(Link)`
  color: white !important; /* Ensure higher specificity to override Bootstrap styles */
  text-decoration: none !important; /* Ensure higher specificity to override Bootstrap styles */
`;

const NavLink2 = styled(Link)`
  color: black !important; /* Ensure higher specificity to override Bootstrap styles */
  text-decoration: none !important; /* Ensure higher specificity to override Bootstrap styles */
`;

const DropdownToggle = styled(NavLink)`
  cursor: pointer; /* Add cursor style for dropdown toggle */
`;

const DropdownMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  background-color: white;
`;

const DropdownItem = styled.li`
  margin: 10px;
  color: black !important; /* Override Bootstrap color */
  &:hover {
    background-color: transparent !important; /* Remove hover background color */
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SearchInput = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const Navbar = () => {
  return (
    <NavbarContainer className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link to="/home">
         <LogoImage
           src="/images/Logo.png"
           alt="RR Systems"
         />
        </Link>
        <NavToggler
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </NavToggler>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavItems className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem>
              <NavLink to="/Home" style={{ margin: '10px' }}>
                Home
              </NavLink>
            </NavItem>
            <NavItem className="nav-item dropdown">
              <DropdownToggle
                className="pages dropdown-toggle"
                to="/"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ margin: '10px' }}
              >
                Categories
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu">
                <DropdownItem className="pages dropdown-item" style={{ margin: '10px' }}>
                  <NavLink2 to="/Men">Men</NavLink2>
                </DropdownItem>
                <DropdownItem className="pages dropdown-item" style={{ margin: '10px' }}>
                  <NavLink2 to="/Women">Women</NavLink2>
                </DropdownItem>
                <DropdownItem className="pages dropdown-item" style={{ margin: '10px' }}>
                  <NavLink2 to="/Kids">Kids</NavLink2>
                </DropdownItem>
                <DropdownItem>
                  <hr className="dropdown-divider" />
                </DropdownItem>
                <DropdownItem className="pages dropdown-item" style={{ margin: '10px' }}>
                  <NavLink2 to="/Camping">Camping</NavLink2>
                </DropdownItem>
              </DropdownMenu>
            </NavItem>
            <NavItem>
              <NavLink to="/About" style={{ margin: '10px' }}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Contact" style={{ margin: '10px' }}>
                Contact us
              </NavLink>
            </NavItem>
          </NavItems>
          <SearchForm className="d-flex" role="search">
            <SearchInput
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </SearchForm>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
