//Prop Drilling --->Getting props from Least Common Ancestor(Imagine as a binary tree)
//Suppose there are 4 states c2,c2,c3 and c4; Suppose c4 needs prop which c1 has "Note that that prop doesn't need by c2 or c3" but they still have to pass it down to c4 

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} setCount={setCount} />
      
    </>
  );  
}
function Count({ count ,setCount}) {
  return <div>{count}
  <Button count={count} setCount={setCount} /> 
  </div>;
  
}

function Button({count,setCount}) {
  return (
    <div>
      <button onClick={() => {setCount(count+1)}}>Increase</button>

      <button onClick={() => {setCount(count-1)}}>Decrease</button>
    </div>
  );
}

export default App;
