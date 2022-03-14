import React from 'react';
import { Outlet } from 'react-router-dom';
import FullHeightContainer from './full-height-container';

const LandingPageLayout = ({children}) => (
    <FullHeightContainer>
        {children}
      <Outlet />
    </FullHeightContainer>
)

export default LandingPageLayout;
