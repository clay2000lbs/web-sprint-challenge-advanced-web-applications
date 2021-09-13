//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
//I am not familiar with this, therefore I got this code from Chris's sprint review.
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = (props) => {
    const { component:Component, ...rest } = props
    
    return (
        <Route 
            { ...rest}
            render={(renderProps) => {
                if(localStorage.getItem('token')) {
                    return <Component  {...renderProps}/>;
                } else {
                 return <Redirect to='/login' />
                }
            }}    
        />
    );
};