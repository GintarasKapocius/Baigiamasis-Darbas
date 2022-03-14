import { styled } from '@mui/material/styles';

const FullHeightContainer = styled('div')(({ theme}) => ({
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'common.white',
    textAlign: 'center' 
  
  }))

export default FullHeightContainer;
