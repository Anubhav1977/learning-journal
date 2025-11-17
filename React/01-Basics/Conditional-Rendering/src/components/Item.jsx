import React from "react";

function Item(props) {
  // Early Return
  if (!props.isPacked) {
    return (
      <div>
        <p>{props.name} ❌</p>
      </div>
    );
  }

  // Ternary Operator
  return <>{props.isPacked ? <p>{props.name} 📦</p> : <p>{props.name}</p>}</>;

  // Logical Conditoinal Rendering
  // return (
  //   <div>
  //     <p>
  //       {/* AND operator - if "isPacked" is true then render "📦", else nothing */}
  //       {props.isPacked && "📦"} {props.name}
  //     </p>
  //   </div>
  // );

  // If Else Statement
  // if (props.isPacked) {
  //   return (
  //     <>
  //       <li>📦 {props.name}</li>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <li>{props.name}</li>
  //     </>
  //   );
  // }
}

export default Item;
