
import database from '../database/index.js';

const { departments, departmentMembers, teams, teamMembers, users } = database.data;

const appendLeadsToDepartment = (department) => ({
    ...department,
    leads: departmentMembers
        .filter((lead) => lead.departmentId === department.id)
        .map(({ employeeId }) => users.find(({ id }) => id === employeeId))
})

const appendTeamsToDepartment = (department) => ({
    ...department,
    teams: teams
        .filter(({ departmentId }) => departmentId === department.id)
        .map((team) => ({
            ...team,
            members: teamMembers
                .filter((teamMember) => teamMember.teamId === team.id)
                .map(({ employeeId }) => users.find(({ id }) => id === employeeId))
        }))
})

export const getTeams = (req, res) => {
    const teams = departments
        .map(appendLeadsToDepartment)
        .map(appendTeamsToDepartment);
    res.status(200).json(teams);
}