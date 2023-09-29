import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAdmin, ...rest }) => {
  // Check if the user is authenticated and has admin privileges
  const isAuthenticated = localStorage.getItem('username') && localStorage.getItem('password');
  const isAdminUser = isAdmin && isAuthenticated;

  return (
    <Route
      {...rest}
      element={isAdminUser ? <Component /> : <Navigate to="/admin-control-panel" replace />}
    />
  );
};

export default PrivateRoute;



