import { Grid } from "@mui/material"
import EmployyeCardHorizontal from "./employye-card-horizontal"

const DepartmentCoverLead = ({ props }) => {
    return (< Grid item xs={12} md={6} >
        <EmployyeCardHorizontal {...props}>
        </EmployyeCardHorizontal>
    </Grid >)
}

export default DepartmentCoverLead
