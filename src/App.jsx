import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import './index.css';
import Home from './Home'
import Navbar from './Navbar';
import MainSection from './MainSection';

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <MainSection/>
      </div>
    </>
  )
}

export default App
