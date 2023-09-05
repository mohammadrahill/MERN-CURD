import React from "react";
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/list' element={<List />}></Route>
          <Route path='/:id' element={<Home />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
