import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<div>
            <Header /><Home /></div>} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
