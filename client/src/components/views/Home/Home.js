import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Paypal from '../../utils/Paypal';
// pages for this product
import Header from './section/Header';
import Aboutus from './section/Aboutus';
import {
    BrowserRouter as Router,
    Redirect,
  } from "react-router-dom";
  function App() {
    return (
      <div>
        <Header />
        <Aboutus />
    
        
      </div>
    );
  }
  
  export default App;
  