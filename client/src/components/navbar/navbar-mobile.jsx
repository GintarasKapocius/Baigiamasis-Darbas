import React, { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectAuth } from '../../store/auth';

import routes from '../../routing/routes';
import NavBarLogo from './navbar-logo';
import NavbarLink from './navbar-link';

const NavbarMobile = () => {
  const [small, setSmall] = useState(false);
  const [open, setOpen] = useState(false);
  const { loggedIn } = useSelector(selectAuth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!loggedIn) {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () =>
          setSmall(window.pageYOffset > 80)
        );
      }
    }
  }, [loggedIn]);

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <AppBar
       elevation={small ? 4 : 0}
        position='fixed'
        sx={{ bgcolor: small  || open ? 'white' : 'transparent' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            bgcolor: open || small ? 'white' : 'inherit',
            px: 3,
            py: 3,
          }}
        >
          <NavbarLink
            to={loggedIn ? routes.AdminHomePage : routes.HomePage}
            onClick={() => setOpen(false)}
          >
            <NavBarLogo logocolor={open || small || loggedIn ? '#39aaf8' : 'white'} />
          </NavbarLink>
          <IconButton
            onClick={() => setOpen(!open)}
            size='large'
            edge='end'
            color={open || small || loggedIn  ? 'primary' : 'inherit'}
            sx={{ width: 48, height: 48 }}
          >
            <MenuIcon sx={{ mb: '2px' }} />
          </IconButton>
        </Box>
        <Container>
          <Toolbar
            sx={{
              display:  open ? 'flex': "none",
              flexDirection: 'column',
              width: '100%',
              height: '100vh',
            }}
          >
            <Box
              sx={{
                display: open ? 'flex' : 'none',
                flexDirection: 'column',
                gap: 2,
                justifyContent: 'center',
                pt: 10,
              }}
            >
              <NavbarLink
                to={loggedIn ? routes.AdminFaqPage : routes.FaqsPage}
                textcolor={'#263238'}
                onClick={() => setOpen(false)}
              >
                Faq
              </NavbarLink>
              <NavbarLink
                to={loggedIn ? routes.AdminLinksPage : routes.LinksPage}
                textcolor={'#263238'}
                onClick={() => setOpen(false)}
              >
                Links
              </NavbarLink>
              <NavbarLink
                to={loggedIn ? routes.AdminTeamsPage : routes.TeamsPage}
                textcolor={'#263238'}
                onClick={() => setOpen(false)}
              >
                Teams
              </NavbarLink>
              <NavbarLink
                to={loggedIn ? routes.AdminBlogPage : routes.BlogPage}
                textcolor={'#263238'}
                onClick={() => setOpen(false)}
              >
                Blog
              </NavbarLink>
              {loggedIn ? (
                <Button
                  size='large'
                  color='lightBlue'
                  variant='contained'
                  sx={{ mt: 4, boxShadow: 0 }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : null}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavbarMobile;
