import { Route,Routes, BrowserRouter } from "react-router-dom";
import Home from './Components/Home/Home'
import Login from "./Components/Home/Login";
import Signup from "./Components/Home/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
