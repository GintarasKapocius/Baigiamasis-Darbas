import { Outlet } from 'react-router-dom';
import FullWidthContainer from './full-width-container';
import Navbar from '../navbar/navbar';
import NavbarMobile from '../navbar/navbar-mobile';

import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth';

const PageLayout = ({ children }) => {
  const { loggedIn } = useSelector(selectAuth);
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <FullWidthContainer
        element="main"
        sx={{ bgcolor: loggedIn ? '#f3f4f5' : '#white', height: '100vh' }}>
        {children}
        <Outlet />
      </FullWidthContainer>
    </>
  );
}

export default PageLayout;