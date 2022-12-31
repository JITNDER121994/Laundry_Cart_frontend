import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninComp from "./SigninComp";

import RegisterComp from "./RegisterComp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SigninComp />} />
          <Route exact path="/register" element={<RegisterComp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
  
export default App;
