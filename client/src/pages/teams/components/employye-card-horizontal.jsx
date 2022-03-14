import { Grid, Typography } from '@mui/material';
import EmployyelImg from './employye-image';

const employyeCardHorizontal = ({
  fullName,
  positiontitle,
  imgSrc,
  ...rest
}) => {
  return (
    <Grid sx={{ alignItems: 'center' }} container spacing={{ xs: 0, md: 4 }}>
      <Grid item xs={6} md={6}>
        <EmployyelImg imgSrc={imgSrc}></EmployyelImg>
      </Grid>
      <Grid item xs={6} md={6} pl={4} pb={{ xs: 4 }}>
        <Typography variant='h5' component='h5'>
          {fullName}
        </Typography>
        <Typography variant='h6' component='p'>
          {positiontitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default employyeCardHorizontal;
