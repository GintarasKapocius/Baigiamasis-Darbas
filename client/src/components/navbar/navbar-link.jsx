import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledLink  = styled(NavLink)(({theme,textcolor }) => ({
  textDecoration: 'none',
  color: textcolor,
  ':hover': {
    color: textcolor,
  },
  '&.active': {
    color: textcolor,
  },
  [theme.breakpoints.down("md")]: {
    width:'100%',
   display:'block',
   fontSize: '2.5rem',
   textAlign:'center',
  },
  
}));

const NavbarLink = ({ to,onClick, textcolor,children}) => (
  <StyledLink onClick={onClick} textcolor={textcolor} to={to}>{children}</StyledLink>
);

export default NavbarLink;