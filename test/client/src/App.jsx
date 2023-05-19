import { useState } from "react";
import "./App.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/add" element={<Add/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
