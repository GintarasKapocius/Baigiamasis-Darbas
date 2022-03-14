import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectAuth } from '../../store/auth';

import routes from '../../routing/routes';
import NavBarLogo from './navbar-logo';
import NavbarLink from './navbar-link';

const Navbar = () => {
  const [small, setSmall] = useState(false);
  const { loggedIn } = useSelector(selectAuth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () =>
          setSmall(window.pageYOffset > 80)
        );
      }
  }, []);

  const textColorChange = small || loggedIn ? '#263238' : 'white';

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <AppBar
        elevation={small ? 4 : 0}
        position='fixed'
        sx={{ bgcolor: small  ? 'white' : 'transparent' }}
      >
        <Container>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 3,
            }}
          >
            <NavbarLink to={loggedIn ? routes.AdminHomePage : routes.HomePage}>
              <NavBarLogo logocolor={small || loggedIn ? '#39aaf8' : 'white'} />
            </NavbarLink>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 4,
              }}
            >
              <NavbarLink
                to={loggedIn ? routes.AdminFaqPage : routes.FaqsPage}
                textcolor={textColorChange}
              >
                Faq
              </NavbarLink>
              <NavbarLink
                to={loggedIn ? routes.AdminLinksPage : routes.LinksPage}
                textcolor={textColorChange}
              >
                Links
              </NavbarLink>
              <NavbarLink
                to={loggedIn ? routes.AdminTeamsPage : routes.TeamsPage}
                textcolor={textColorChange}
              >
                Teams
              </NavbarLink>
              <NavbarLink
                to={loggedIn ? routes.AdminBlogPage : routes.BlogPage}
                textcolor={textColorChange}
              >
                Blog
              </NavbarLink>
              {loggedIn ? (
                <Button
                  color='lightBlue'
                  variant='contained'
                  sx={{ ml: 4, boxShadow: 0 }}
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

export default Navbar;
