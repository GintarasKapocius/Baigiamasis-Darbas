
import { styled } from '@mui/material/styles';
import FullWidthContainer from '../../../components/layout/full-width-container';

const DepartmentCoverBg = styled(FullWidthContainer)(({ theme }) => ({
  display: 'flex',
  justifyContent: "center",
  flexDirection: 'column',
  width: "100%",
  [theme.breakpoints.up('xs')]: {
    height: 'auto',
  },
  [theme.breakpoints.up('md')]: {
    height: theme.spacing(60),
  },

}));

export default DepartmentCoverBg