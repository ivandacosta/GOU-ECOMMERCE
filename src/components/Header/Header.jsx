import React from "react";
import Nav from "../Navigation/Nav";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

//style
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="Logo">
        <h2>GOU</h2>
      </div>

      <Nav />

      <div className="Cart">
        <p>
          <FontAwesomeIcon icon={faCartShopping} /> 0
        </p>
      </div>
    </header>
  );
}

export default Header;
