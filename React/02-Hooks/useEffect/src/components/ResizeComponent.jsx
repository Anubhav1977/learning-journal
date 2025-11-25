import React, { useEffect, useState } from "react";

function ResizeComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    console.log("Event Listener Added");
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Event Listener Removed");
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //   It will only run on the first render

  return (
    <div>
      <h1>Windows Width : {windowWidth}</h1>
    </div>
  );
}

export default ResizeComponent;
