import logo from './logo.svg';
import './App.css';

import { Link, Outlet } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {useHistory} from 'react';


import ProductList from './components/ProductList'


function App(props) {

  // const history = useHistory()


return (

    <div>

      <div>
        <h2> Apna Bazaar</h2>
       </div>
     

     <div style={{backgroundColor:"yellow" }}>      

     <nav className="header">
      <Link to="/search">Search</Link> 
       {/* <Link to={{pathname:'/login',state:history}} >Login</Link>  */}
       <Link to="/login">Login</Link> 

        <Link to ="/createproduct"> Create Product </Link>

        <Link to ="/updateproduct"> Update Product </Link>

       <Link to="/registration">SignUp</Link>       
     </nav>



     </div>



     <div className="App" style={{ backgroundColor:"pink"}}>

     <Outlet/>
      
      {/* landing page */}
      <div> 
      <ProductList/>
      </div>



     </div>

        </div>
)
}

export default App;
