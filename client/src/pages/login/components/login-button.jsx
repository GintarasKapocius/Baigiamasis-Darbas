import React from 'react';
import { Button, Box,  } from '@mui/material';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';



const StyledButton = styled(Button)(({ theme,btnopacity}) => ({
  opacity:btnopacity,
  width:'100%',
    height:'4rem',
    color: 'ligthBlue.main',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
  }));

const LoginButton = ({loading, title,disabled}) => {
  const btnOpacity = loading ? 0.5: 1
  return (
    <Box>
      <StyledButton
      disabled={disabled}
      btnopacity={btnOpacity}
      sx={{mt:2}} type='submit'>
      {loading ? <CircularProgress color="lightBlue"/>: title}
      </StyledButton>
      </Box>
  )
};

export default LoginButton;
