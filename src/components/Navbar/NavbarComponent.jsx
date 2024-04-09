import React, { useState } from "react";
import Logo from "../Assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css";

export function NavbarComponent() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/"> <img src={Logo} /> </Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}
