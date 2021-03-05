// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';
// import Signup from './components/Signup';
// import Footer from './components/Footer';
// import NavBar from './components/NavBar';
// import Profile from './components/Profile';
// import Welcome from './components/Welcome';
import Login from './components/Login';

// Components


function App() {
  // Set state values
 
  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <h1>MERN Authentication</h1>
      <Login />
    </div>
  );
}

export default App;
