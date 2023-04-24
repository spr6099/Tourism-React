import React from "react";
import "./header.css"

function Header() {
  return (
   
      <header className="w-full pb-2">
        <h3 >logo</h3>
        <ul className="components">
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </header>
   
  );
}

export default Header;
