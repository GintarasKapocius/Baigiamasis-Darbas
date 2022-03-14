import { Grid } from "@mui/material"
import EmployyeCard from "./employye-card"

const TeamMembersWrapper = ({ props }) => (
    <>
        <Grid item xs={6} md={3}>
            <EmployyeCard {...props}></EmployyeCard>
        </Grid>
    </>)
export default TeamMembersWrapper
