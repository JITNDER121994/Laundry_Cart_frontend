import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninComp from "./SigninComp";
import Home from "./Home";

import RegisterComp from "./RegisterComp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SigninComp />} />
          <Route exact path="/register" element={<RegisterComp />} />
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
  
export default App;
