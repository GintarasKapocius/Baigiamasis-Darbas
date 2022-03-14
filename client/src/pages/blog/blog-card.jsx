import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from '@mui/material';

const BlogCard = ({ link, image, month, years, text }) => (
  <Card sx={{ height: '100%', width: '100%' }}>
    <CardActionArea
      href={link}
      target='_blank'
      sx={{ height: '100%', width: '100%' }}
    >
      <CardMedia component='img' height='224' src={image} />
      <CardContent sx={{ px: 3, py: 4 }}>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          color='black.main'
        >
          {month} | {years}
        </Typography>
        <Typography variant='body' color='neutral.dark'>
          {text}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default BlogCard;
