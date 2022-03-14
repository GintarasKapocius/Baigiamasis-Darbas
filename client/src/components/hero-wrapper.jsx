import { styled } from '@mui/material/styles';
import { Typography, Container, Box } from "@mui/material"


const HeroWrapper = ({ title, subtitle, image, bgcolor }) => {

    const HeroWrapperBg = styled('div')(({ theme }) => ({
        color: 'white',
        width: "100%",
        height: theme.spacing(80),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: `${bgcolor}`,
        backgroundImage: `url('${image}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "39vw bottom",
        
        backgroundSize: "contain",
        marginBottom: theme.spacing(8),

        [theme.breakpoints.down("lg")]: {
            backgroundPosition: "25vw bottom",
          },


        [theme.breakpoints.down("md")]: {
            height: '80vh',
            backgroundPosition: "bottom center",
            backgroundSize: `150%`,
            justifyContent: "flex-start",
            paddingTop:theme.spacing(15),
          },


    }));
    return (
        <HeroWrapperBg>
            <Container>
                <Box sx={{ width: {xs: '100%',md:'50%' }}}>
                    <Typography variant='h1' component="h1" sx={{ mb: 2 }}>{title}</Typography>
                    <Typography variant='h6' component="p">{subtitle}</Typography>

                </Box>
                <Typography></Typography>
            </Container>
        </HeroWrapperBg>
    )
}
export default HeroWrapper
