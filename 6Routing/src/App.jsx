import { Suspense,lazy } from "react";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";

const Dashboard = lazy(()=>import('./components/Dashboard'))
const Landing = lazy(()=>import('./components/Landing'))


  function App() {
    return (
    //Using suspense API--->Asynchronous component fetch,data fetch
    <BrowserRouter>
    <AppBar></AppBar>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={'Loading...'}><Dashboard/></Suspense>}></Route>
        <Route path="/" element={<Suspense fallback={'Loading...'}><Landing/></Suspense>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
function AppBar() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>
          <button onClick={()=>{
            //window.location.href='/';
            navigate("/");
          }}>Landing Page</button>
          <button onClick={()=>{
            //window.location.href='/dashboard';
            navigate("/dashboard")
          }}>Dashboard Page</button>
        </div>
      </div>
    </>
  );
}

export default App;
