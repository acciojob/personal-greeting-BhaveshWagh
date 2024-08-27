// src/App.js
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <p>Enter your name:</p>
      <input type="text" value={name} onChange={handleInputChange} />

      <p>{name ? `Hello ${name}!` : ""}</p>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import "./../styles/App.css";

// const App = () => {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       {/* Do not remove the main div */}
//       <label>
//         <p>Enter your name:{name && `Hello ${name}!`}</p>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       {/* <label>
//         <p>Enter your name:</p>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         ></input>
//       </label> */}
//       {/* {name !== "" && <p>Hello {name}!</p>} */}
//     </div>
//   );
// };

// export default App;
