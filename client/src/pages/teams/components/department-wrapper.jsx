import { Box } from "@mui/system"

import DepartmentCover from "./department-cover"
import TeamsWrapper from "./teams-wrapper"

const DepartmentWrapper = ({ title, leads, teams }) => {
    return (
        <Box sx={{ mb: 8 }}>
            <DepartmentCover title={title} leads={leads}></DepartmentCover>
            {teams.map((team, i) => {
                return (<TeamsWrapper key={team.id} {...team} divider={teams.length > 1 && i < (teams.length - 1)} />)
            })}
        </Box>
    )
}

export default DepartmentWrapper
