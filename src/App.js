import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import HomeHeader from "./components/HomeHeader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomeHeader></HomeHeader>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/logowanie" element={<Login />}></Route>
          <Route path="/rejestracja" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
