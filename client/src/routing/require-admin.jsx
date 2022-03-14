
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from '../store/auth';
import routes from './routes';

const RequireAdmin = ({ children }) => {
  const { loggedIn, user } = useSelector(selectAuth);

  if (!loggedIn) {
    return <Navigate to={`${routes.LoginPage}`} />;
  }

  if (user && user.role !== 'admin') {
    return <Navigate to={`${routes.LoginPage}`}/>;
  }

  return children;
};

export default RequireAdmin;