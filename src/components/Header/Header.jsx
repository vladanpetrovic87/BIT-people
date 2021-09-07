import React from "react";


import './Header.css'

export const Header = (props) => {
   



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
               <a href="#!" onClick={props.onRefresh}>
                <i class="material-icons"  >refresh</i>
              
              </a>
            </li>
            <li>
              <a href="#!" >
                <a  onClick={props.onLayoutToggle}>
                
                {props.isListView 
                ?<i class="material-icons">view_module</i>
                :<i class="material-icons">view_list</i>}
                </a>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      )
}