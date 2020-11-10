import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="logo-link" to="/">
                <img src="https://octanecdn.com/jacobandcocom/jacobandcocom_669845198.svg" alt="Jacob &amp; Co" className="logo-image"/>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="nav navbar-nav">
                    <NavLink className="nav-link " to="/watches"><i className="fa fa-diamond" aria-hidden="true"></i> Watches <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-link" to="/About"><i className="fa fa-book" aria-hidden="true"></i> About Us</NavLink>
                    <NavLink className="nav-link" to="/login"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</NavLink>
                    
                </div>
                <div className="nav navbar-nav ml-auto">
                    <NavLink className="nav-link" to="/signup" ><i className="fa fa-user-plus" aria-hidden="true"></i> Sign Up</NavLink>
                    <br></br>
                    <NavLink className="btn btn-outline-success" to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart </NavLink>
                </div>
                <div className="dropdown" align-text='center'>
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Info
                    </button>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">Profile</Link>
                        <Link className="dropdown-item" to="past_orders">Order History</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
