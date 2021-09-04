import React from "react";

import './Header.css'

export const Header = () => {
    


return (
      <nav>
        <div className="nav-wrapper">
         <a href="#!" className="brand-logo center">
            Bit Persons
        </a>
          <ul className="right" >
            <li>
            <a href="#!" >About</a>
            </li>
            <li>
            <a href="#!" >
              <i class="material-icons">refresh</i>
            </a>
            </li>
            <li>
              <a href="#!">
                <i class="material-icons">view_module</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      )
}