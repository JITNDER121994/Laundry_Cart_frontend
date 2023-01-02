import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninComp from "./SigninComp";
import Home from "./Home";
import Catelog from "./Catelog";

import RegisterComp from "./RegisterComp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SigninComp />} />
          <Route exact path="/register" element={<RegisterComp />} />
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/catelog" element={<Catelog />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
  
export default App;
