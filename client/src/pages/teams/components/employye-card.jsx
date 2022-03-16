
import { Box, Typography } from "@mui/material"
import EmployyelImg from "./employye-image"

const EmployyeCard = ({ fullName, positiontitle, imgSrc, ...rest }) => {
    return (
        <Box>
            <EmployyelImg imgSrc={imgSrc} sx={{ mb: 3 }}></EmployyelImg>
            <Typography color='black.main' variant="h5" component="h5">{fullName}</Typography>
            <Typography color='neutral.dark' variant="body1" component="p">{positiontitle}</Typography>
        </Box>
    )
}

export default EmployyeCard
