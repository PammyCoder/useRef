
//create a meautable variable which will not re-render the components.
import { useState, useRef, useEffect} from 'react'
import './App.css'


function App() {
  const [myData, setMyData] = useState("");
  const count=useRef(0);
  console.log(count);

  useEffect(() => {
    count.current=count.current+1;
  });
  return (
    <>
    <input type="text" value={myData} onChange={(e) => setMyData(e.target.value)} />
    <p>The number of times render : {count.current} </p>
    </>
  )
}

export default App
