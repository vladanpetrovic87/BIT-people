import React from "react";
import { hideMail } from "../../../utilities/utilities.js";

export const ListView = ( {users} ) => {
  return (
    <ul className="collection">
      {users.map((element) => (
        <li className="collection-item avatar">
          <img src={element.picture.thumbnail} alt="" className="circle" />
          <div className="userData">
            <p>{element.name.first} {element.name.last}</p>
            <p className="valign-wrapper"><i class="material-icons">email</i>
              email: {hideMail(element.email)}</p>
            <p className="valign-wrapper"><i class="material-icons">cake</i>
              {element.dob.date.slice(0, 10).split("-").reverse().join(".")}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
