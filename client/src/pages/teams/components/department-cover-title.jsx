import { Grid, Typography } from "@mui/material"

const DepartmentCoverTitle = ({ title }) => (
    <Grid item xs={12} md={6}>
        <Typography variant="h2" component="h2">{title}</Typography>
    </Grid>
)


export default DepartmentCoverTitle
