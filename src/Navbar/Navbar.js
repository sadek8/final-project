import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-full h-20">
      <a className="navbar-brand" href="/">Galaxy Cinema</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>

          <NavDropdown title="Available movies" id="basic-nav-dropdown">
            <NavDropdown.Item href="/booking-summary-action">Action Movies</NavDropdown.Item>
            <NavDropdown.Item href="/booking-summary-horror">Horror movies</NavDropdown.Item>
            <NavDropdown.Item href="/booking-summary-comedy">Comedy Movies</NavDropdown.Item>
          </NavDropdown>

          <li className="nav-item">
            <a className="nav-link" href="/registration">Join Us</a>
          </li>
        </ul>

        <form className="d-flex ms-5" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;