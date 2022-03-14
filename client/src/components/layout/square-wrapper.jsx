import { styled } from '@mui/material/styles';

const SquareWrapper = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  ':before': {
    content: '" "',
    display: 'block',
    width: '100%',
    paddingTop: '100%',
  },
  '>*': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export default SquareWrapper;