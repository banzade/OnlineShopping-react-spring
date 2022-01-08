import { Button } from 'bootstrap';
import ProductList from './User/UserProductList';
import React, { Component } from 'react';
import RegisterPage from './RegisterPage';
import { Link } from 'react-router-dom';



function BaseLocation(){
    return <div>

        <h1>Apna Bazaar</h1>
        <nav>
        <Link to='/registration'> Customer</Link>
        {/* <Link to='/admin'> Admin</Link> */}
        <Link to='/adminlogin'> Admin</Link>
        
        </nav>

        <div>
            {<ProductList/>}
        </div>


        </div>
}

export default BaseLocation;