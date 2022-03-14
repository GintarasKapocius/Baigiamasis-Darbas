import React from 'react';
import { styled } from '@mui/material/styles';

const StyledSvg = styled('svg')(({
  theme, width, height, logocolor
}) => ({
  display: 'block',
  fill: logocolor,
  width: width ?? 48,
  height: height ?? 48,
}));

const NavBarLogo = (props) => (
  <StyledSvg {...props}>
 <path d="M18.3,25.2h4.5v4.5a4.5,4.5,0,1,1-4.5-4.5ZM48,24A24,24,0,1,1,24,0,24,24,0,0,1,48,24ZM36.5,18.3a6.8,6.8,0,0,0-13.6,0v4.5H18.4a6.79,6.79,0,1,0,6.8,6.8V18.3a4.5,4.5,0,0,1,9,0,4.44,4.44,0,0,1-4.5,4.5H26.3v2.3h3.4A6.74,6.74,0,0,0,36.5,18.3Z"/>
  </StyledSvg>
);

export default NavBarLogo;
