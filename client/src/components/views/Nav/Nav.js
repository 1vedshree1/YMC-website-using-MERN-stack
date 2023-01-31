import React from 'react';

import "./Nav.css";
import {Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from "../../Config";
import { useSelector } from "react-redux";
import LoginPage from "../LoginPage/LoginPage";



function Nav(){

const user = useSelector(state => state.user)

const logoutHandler = () => {
  axios.get(`${USER_SERVER}/logout`).then(response => {
    if (response.status === 200) {
      
      return(
        alert("Logout Successfully")
      )
      
      
      
      
    } else {
      alert('Log Out Failed')
    }
  });
};


  
    

  
  

    
    

  if (user.userData && !user.userData.isAuth) {
    return (

    <div class="topnav" id="myTopnav">
    <div class="logonav">
    <a href="/home"><img src="https://assets.letsendorse.com/20170630/GklLWnfoQWOEjxpKrbV14988219421434.jpg"height="200px" width="200px"  ></img>YMC</a>
    </div>
    
    <a href="/home"> Home</a>
    <a href="/">Products</a>
    <a href="/contact">Contact</a>
    <div class="dropdown">
      <button class="dropbtn">Activities
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="/education">Educational</a>
      <a href="/health">Health</a>
      <a href="/disaster">Disaster</a>
      <a href="/livelihood">Livelihood</a>
    </div>
  </div>
  <a href="/about">About</a>
  
    
 <div class="leftnav">
 <a href="/login"><img src="https://flaticons.net/icon.php?slug_category=application&slug_icon=user-login" height="50px" width="50px"></img>Signin</a>
  <a href="/register"><img src="https://cdn-icons-png.flaticon.com/128/5599/5599530.png" height="50px" width="50px"></img>Signup</a>
 </div>
  
  </div>
        
)
   }
 
  else 
  {
    return (


      
  


      <div class="topnav" id="myTopnav">
    <div class="logonav">
    <a href="/home"><img src="https://assets.letsendorse.com/20170630/GklLWnfoQWOEjxpKrbV14988219421434.jpg"height="200px" width="200px"  ></img>YMC</a>
    </div>
    
    <a href="/home"> Home</a>
    <a href="/">Products</a>
    <a href="/contact">Contact</a>
    <div class="dropdown">
      <button class="dropbtn">Activities
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="/education">Educational</a>
      <a href="/health">Health</a>
      <a href="/disaster">Disaster</a>
      <a href="/livelihood">Livelihood</a>
    </div>
  </div>
  <a href="/about">About</a>
  


      
          <a href="/history">History</a>
        

        
          <a href="/product/upload">Upload</a>
        

        
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" style={{ marginRight: -22 , color:'#667777'}}>
              <img src= "https://cdn-icons-png.flaticon.com/512/1170/1170576.png" height="50px" width="50px"></img>
            </a>
          </Badge>

          <a onClick={logoutHandler}>Logout</a>
           
        </div>
      
    )
  }

  



}
export default Nav;