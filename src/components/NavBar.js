import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Luxury Watches</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="nav navbar-nav">
                    <NavLink className="nav-link " to="/watches"><i class="fa fa-diamond" aria-hidden="true"></i> Watches <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-link" to="/profile"><i class="fa fa-user-circle" aria-hidden="true"></i> Profile</NavLink>
                    <NavLink className="nav-link" to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</NavLink>
                </div>
                <div className="nav navbar-nav ml-auto">
                    <NavLink className="nav-link" to="/signup" ><i class="fa fa-user-plus" aria-hidden="true"></i> Sign Up</NavLink>
                    <NavLink className="btn btn-outline-success" to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
