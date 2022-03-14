/* eslint-disable */
import { VISITOR, ADMIN, LOGGED_IN } from './auth-types';

export default [
 
    {
    path: '/',
    pageName: 'PageLayout',
    children: [
      {
        path: 'login',
        pageName: 'LandingPageLayout',
        children:[
          {
            path: null,
            pageName: 'LoginPage',
          }
        ]
      },
      {
        path: 'admin',
        pageName: 'AdminHomePage',
        auth:  LOGGED_IN,
              },
          {
            path: 'admin-faq',
            pageName: 'AdminFaqPage',
            auth:  LOGGED_IN,
          },  
          {
            path: 'admin-links',
            pageName: 'AdminLinksPage',
            auth:  LOGGED_IN,
          },   
          {
            path: 'admin-teams',
            pageName: 'AdminTeamsPage',
            auth:  LOGGED_IN,
          },   
          {
            path: 'admin-blog',
            pageName: 'AdminBlogPage',
            auth:  LOGGED_IN,
          },    
      {
        path: null,
        pageName: 'HomePage',
      },
      {
        path: 'faq',
        pageName: 'FaqsPage',
      },
      {
        path: 'links',
        pageName: 'LinksPage',
      },
      {
        path: 'teams',
        pageName: 'TeamsPage',
      },
      {
        path: 'blog',
        pageName: 'BlogPage',
      },
      {
        path: '*',
        pageName: 'HomePage',
      },
    ],
  },
];
