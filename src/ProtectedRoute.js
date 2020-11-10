import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component, render, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if(!this.state) return <Redirect to='/login' />
                return Component ? <Component {...props} /> : render(props)
            }}
        />
    );
}


export default ProtectedRoute;