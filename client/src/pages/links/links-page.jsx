import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import APIService from '../../services/pages-service';
import HeroWrapper from '../../components/hero-wrapper';
import LinkCard from './linkCard';

const LinksPage = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedLinks = await APIService.fetchLinks();
      setLinks(fetchedLinks);
    })();
  }, []);

  return (
    <>
      <HeroWrapper
        title='Links'
        subtitle="Learn more about the company tools and systems."
        image='https://res.cloudinary.com/dipwpo4gx/image/upload/v1640192573/Hero%20Sections/links_qvf1dp.jpg'
        bgcolor='#1ac2e4'
      ></HeroWrapper>
      <Container>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={4}
        >
          {links.map(({ id, link, heading, details }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <LinkCard
                link={link}
                heading={heading}
                details={details}
              ></LinkCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default LinksPage;
