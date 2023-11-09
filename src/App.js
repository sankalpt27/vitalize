import React from 'react';
import './App.css';
import HomePage from './components/homepage'; // Adjust the import path accordingly
import logo from './assets/vitalize_logo.png'
import Navbar  from './components/Navbar';
import Home from './components/Home'
import { Browserouter as Router, Routes, Route, Link} from "react-router-dom";
import { useState } from 'react';
 
 
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar /> 
        <img src={logo} alt="Vitalize Logo" style={{ width: '200px', height: 'auto' }} />
        <h1 className='bg to-blue-600'>Welcome to Vitalize</h1>
        

      </div>

      <HomePage />

      {/* Rest of your application components */}
    </div>
  );
}

export default App;
