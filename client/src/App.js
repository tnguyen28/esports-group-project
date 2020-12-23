import "./App.css";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

function App() {
  const [socket] = useState(() => io(":8000"));

  useEffect(() => {
    console.log("Is this running?");
    socket.on("Welcome", (data) => console.log(data));

    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
