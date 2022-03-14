import React, { useState, useEffect } from 'react';
import APIService from '../../services/pages-service';
import { Container, Grid } from '@mui/material';
import HeroWrapper from '../../components/hero-wrapper';
import BlogCard from './blog-card';

const BlogPage = () => {
  const [Blogarticles, setBlogArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedBlogArticles = await APIService.fetchBlogArticles();
      setBlogArticles(fetchedBlogArticles);
    })();
  }, []);
  return (
    <>
      <HeroWrapper
        title='Blog'
        subtitle='Find out what’s going on in our blog'
        image='https://res.cloudinary.com/dipwpo4gx/image/upload/v1640192624/Hero%20Sections/blog_u5zb5y.jpg'
        bgcolor='#008efb'
      ></HeroWrapper>
      <Container sx={{ mb: 8 }}>
        <Grid
          container
          justifyContent='flex-start'
          alignItems='stretch'
          spacing={4}
        >
          {Blogarticles.map(({ id, link, image, month, years, text }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <BlogCard
                link={link}
                image={image}
                month={month}
                years={years}
                text={text}
              ></BlogCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default BlogPage;
