import React, { useContext } from "react";
import { UserContext } from "../App";

function ChildC() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Hello from child c</h1>
      <h3>{user.name}</h3>
    </div>
  );
}

export default ChildC;
