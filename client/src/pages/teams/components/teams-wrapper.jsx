import { Typography, Container, Divider, Grid } from "@mui/material"
import TeamMembersWrapper from "./team-members-wrapper"

const TeamsWrapper = ({ title, members, divider }) => {
    return (
        <Container sx={{ mb: 8 }}>
            <Typography color='black.main' sx={{ mb: 4 }} variant="h3" component="h3">{title}</Typography>
            <Grid container spacing={4}>
                {members.map((member) => (<TeamMembersWrapper key={member.id} props={member} />))}
            </Grid>
            {divider ? <Divider sx={{ mt: 4 }} /> : null}
        </Container>
    )
}

export default TeamsWrapper