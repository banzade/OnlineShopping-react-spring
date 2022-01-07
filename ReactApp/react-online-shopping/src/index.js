/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import UpdateProducts from './components/UpdateProducts';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductService from './services/ProductService';
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import ProductSearch from "./components/ProductSearch";
import ProfileView from "./components/ProfilePage";
import CreateProduct from './components/CreateProduct';
// import DeleteProduct from './components/DeleteProduct'


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
   <Route path="/search" element={<ProductSearch/>}/>
      
      

      <Route path="/registration" element={<RegisterPage/>}/>

      <Route path="/profile/:user"  element={<ProfileView/>}/>
      <Route path="/createproduct" element={<CreateProduct/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/updateproduct/:prodName" element={<UpdateProducts/>}/>
      
     <Route path ="/" element ={<App/>}>
     {/* <Route path ="/addproduct" element={<ListofProducts/>}/> */}
     {/* <Route path ="/updateproduct" element={<UpdateProducts/>}/> */}
     {/* <Route path ="/deleteproduct" element={<DeleteProduct/>}/> */}
       </Route>
      
   </Routes>
   </BrowserRouter>
   {/* <App/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
