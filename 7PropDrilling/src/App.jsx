//Prop Drilling --->Getting props from Least Common Ancestor(Imagine as a binary tree)
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} />
      <Button count={count} setCount={setCount} />
    </>
  );  
}
function Count({ count }) {
  return <div>{count}</div>;
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
