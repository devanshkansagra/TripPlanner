import { Route, Routes } from "react-router-dom";
import { Login } from "./views/Login";
import { Navbar } from "./views/Navbar";
import { Home } from "./views/Home";
import { Signup } from "./views/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
