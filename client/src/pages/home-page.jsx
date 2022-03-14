import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HomePage = () => (
  <Box
    sx={{
      width: '1',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#39aaf8',
      color: 'common.white',
      textAlign: 'center',
    }}
  >
    <Container>
      <Typography variant='subtitle2' component={'h1'}>
        HandBook
      </Typography>
      <Typography variant='h6' sx={{ pt: 6 }}>
        Be the first to know about company news <br />
        and find answers to questions
      </Typography>
    </Container>
  </Box>
);

export default HomePage;
