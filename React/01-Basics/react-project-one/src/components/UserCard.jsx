import React from "react";
import avatar from "../assets/avatar.jpg";

// A component is like a normal fucntion of JS which return html code which we can use anywhere and also reuse it with parameters
function UserCard() {
  return (
    // In js class is reserved word so we cant use the normal class attribute of html here, instead we use "className"
    <div className="user-container">
      <p id="user-name">Anubhav Garg</p>
      <img id="user-img" src={avatar} alt="avatar" />
      <p id="user-description">Description of Anubhav Garg</p>
    </div>
  );
}

// the component is marked export so that we can import it anywhere in our program (like in root i.e main.jsx or in another component also).
export default UserCard;
