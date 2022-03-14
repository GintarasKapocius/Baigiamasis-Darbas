import { Container, Grid } from "@mui/material"

import DepartmentCoverBg from "./department-cover-bg"
import DepartmentCoverTitle from "./department-cover-title"
import DepartmentCoverLead from "./department-cover-lead"

const DepartmentCover = ({ title, leads }) => {
    return(
    < DepartmentCoverBg sx={{ mb: 8, backgroundColor: "#39aaf8", color:"white" }}>
        <Container sx={{ alignItems: "center", py:6 }}>
            <Grid sx={{ alignItems: "center" }} container spacing={4}>
                <DepartmentCoverTitle title={title} />
                {leads.map((lead) => (<DepartmentCoverLead key={lead.id} props={lead}>
                </DepartmentCoverLead>))}
            </Grid>
        </Container>
    </DepartmentCoverBg >)
}

export default DepartmentCover
