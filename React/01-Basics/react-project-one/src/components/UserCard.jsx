import "./UserCard.css";

// A component is like a normal fucntion of JS which return html code which we can use anywhere and also reuse it with parameters
function UserCard(props) {
  // props (properties) - used to send arguments in the props
  return (
    // In js class is reserved word so we cant use the normal class attribute of html here, instead we use "className"
    <div className="user-container" style={props.style}>
      <p id="user-name">{props.name}</p>
      <img id="user-img" src={props.img} alt={props.name} />
      <p id="user-description">{props.desc}</p>
    </div>
  );
}

// the component is marked export so that we can import it anywhere in our program (like in root i.e main.jsx or in another component also).
export default UserCard;
