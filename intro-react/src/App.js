import logo from './logo.svg';
import './App.css';

function App() {
  const array1 =["Andriod", "blackberry","iphone" , "window phone"]
  const array2 =["Samsung", "HTC","Micromax" , "Apple"]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
          {array1.map((e)=>(
            <First name={e}/>
          ))}
      </ul>
      <h1>Mobile Manufacturer</h1>
      <ul>
      {array2.map((e)=>(
            <Second name={e}/>
          ))}
      </ul>
    </div>
  );
}
function First({name}){
  return <li>{name}</li>
}
function Second({name}){
  return <li>{name}</li>
}
export default App;
