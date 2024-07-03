//ContextAPI only helps to get rid of prop drilling, it doesn't solve the re-rendering of that state.

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "../store/atoms/count";
import { useMemo } from "react";

//What is State Management?
//A cleaner way to store the state of your app,also solves the problem of re-rendering in Context API

//State Management using Recoil
//Recoil-->A state management library for React; Recoil has a concept of an atom to store the state
//An atom can be defined outside the component
//We have to wrap the componenet which uses the Recoil just like in contextAPI

function App() {
  
  return (
    <>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
      
    </>
  );  
}
function Count() {
  return <div>
  <CountRender/>
  <Button /> 
  </div>;
  
}
function CountRender(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRendered/>
  </div>
}

function EvenCountRendered(){
  const count = useRecoilValue(countAtom);
  //Optimization-->We can use useMemo or Selector from recoil
  // const isEven = useMemo(()=>{return count%2 == 0;},[count]);

  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "It is odd" : null}
  </div>
}

function Button() {
  const [count,setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => {setCount(count+1)}}>Increase</button>

      <button onClick={() => {setCount(count-1)}}>Decrease</button>
    </div>
  );
}

export default App;
