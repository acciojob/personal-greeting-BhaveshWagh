import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div>
      {/* Do not remove the main div */}
      <label>
        <p>Enter your name:{name && `Hello ${name}!`}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {/* <label>
        <p>Enter your name:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label> */}
      {/* {name !== "" && <p>Hello {name}!</p>} */}
    </div>
  );
};

export default App;
