import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Windows Operating system</h1>
      <Newapp />
      <h1>Mobile Manufacturer</h1>
      <Newapp2 />
    </div>
  );
}
function Newapp(){
  const arr = ["iphone", "blackberrry", "windows", "iphone"]
  return <ul>
    {arr.map((e)=>(<li>{e}</li>))}
  </ul>
}
function Newapp2(){
  const arr = ["Samsung", "HTC", "Micromax", "Apple"]
  return <ul>
    {arr.map((e)=>(<li>{e}</li>))}
  </ul>
}
export default App;
