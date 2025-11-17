import "./panel.css";

function Panel(props) {
  return (
    <>
      <div className="panel">
        <h4 id="title">{props.title}</h4>

        {props.isActive ? (
          <>
            <p id="content">{props.children}</p>
            <button id="hide-btn" onClick={props.onToggle}>
              Hide
            </button>
          </>
        ) : (
          <button id="show-btn" onClick={props.onToggle}>
            Show
          </button>
        )}
      </div>
      <hr />
    </>
  );
}

export default Panel;
