import logo from "./logo.svg";
import "./App.css";
import "./Style.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const changeVal = (val) => {
    setCount(count + val);
  };
  if (count < -10) {
    return <h3>Too much less value</h3>;
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      {count < 30 && (
        <div>
          <button onClick={() => changeVal(1)}>Add one value</button>
          <button onClick={() => changeVal(-1)}>Reduce one value</button>
          <br/>
          <button onClick={()=> changeVal(count)}>Double value</button>
        </div>
      )}
      <h4>Counter is {count %2 === 0 ? "EVEN":"ODD"}</h4>
      <h1 style={{ color: "red", fontFamily: "inherit" }}>lets go</h1>
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <h1 style={{ color: "green", fontSize: "50px" }}>
//         Windows Operating system
//       </h1>
//       <Newapp />
//       <h1 style={{ color: "blue", fontSize: "50px" }}>Mobile Manufacturer</h1>
//       <Newapp2 />
//     </div>
//   );
// }
function Newapp() {
  const arr = ["iphone", "blackberrry", "windows", "iphone"];
  return (
    <ul>
      {arr.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  );
}
function Newapp2() {
  const arr = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <ul>
      {arr.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  );
}
export default App;
