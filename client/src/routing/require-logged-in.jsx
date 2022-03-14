import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from '../store/auth';
import routes from './routes';

const RequireLoggedIn = ({ children }) => {
  const { loggedIn } = useSelector(selectAuth);

  if (!loggedIn) {
    return <Navigate to={`${routes.LoginPage}`} />;
  }
  

  return children;
};

export default RequireLoggedIn;
