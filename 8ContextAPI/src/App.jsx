//Passing props can become verbose and inconvenient when you need to pass the props deeply through the tree, To overcome from this we use Context API

import { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  //Wrap anyone that wants to use the teleported value inside a provider(A provider is that something which provides the context value later on)

  return (
    <>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
      
    </>
  );  
}
function Count({setCount}) {
  return <div>
  <CountRender/>
  <Button setCount={setCount} /> 
  </div>;
  
}
function CountRender(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Button({setCount}) {
  const count = useContext(CountContext)
  return (
    <div>
      <button onClick={() => {setCount(count+1)}}>Increase</button>

      <button onClick={() => {setCount(count-1)}}>Decrease</button>
    </div>
  );
}

export default App;
