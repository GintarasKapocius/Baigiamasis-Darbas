import React from 'react';
import { Box, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth';


const AdminHomePage = () => {
  const { user } = useSelector(selectAuth);
  console.log(user)
  const userName = user.fullName.split(' ')[0];
  return (
    <Box sx={{ width: "1", height: "100vh", display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: '#191c1f', textAlign: 'center' }}>
      <Typography variant='subtitle2' component={"h2"} color='black.main' sx={{ fontSize: ' 8rem' }}>{`Hey, ${userName}`}</Typography>
      <Typography variant='h5' sx={{ pt: 6, color: 'neutral.dark' }}>Welcome to admin page panel !!!</Typography>
    </Box>
  );
}

export default AdminHomePage;
