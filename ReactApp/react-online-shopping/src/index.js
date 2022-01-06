import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import ProductSearch from "./components/ProductSearch";
import ProfileView from "./components/ProfilePage";

import { BrowserRouter, Route, Routes } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<App/>}>
      <Route path="/search" element={<ProductSearch/>}/>
      
      

      <Route path="/registration" element={<RegisterPage/>}/>

      <Route path="/profile/:user"  element={<ProfileView/>}/>


      </Route>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>

    </BrowserRouter>

   

  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
