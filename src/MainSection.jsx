import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import Green from "./Green";

export default function MainSection() {
    return (
        <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blue" element={<Blue/>}/>
          <Route path="/red" element={<Red/>}/>
          <Route path="/green" element={<Green/>}/>
        </Routes>
        </div>
    )
}