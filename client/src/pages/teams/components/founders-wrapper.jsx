import React from 'react';

import { Container, Grid, Typography } from "@mui/material"
import DepartmentCoverBg from './department-cover-bg';
import EmployyeCard from './employye-card';



const FoundersWrapper = ({ title, leads }) => {
    return (
        (< DepartmentCoverBg sx={{ mb:{xs:0,md:8}, backgroundColor: "#white", color: "black" }}>
            <Container sx={{pb:6}}>
                <Typography variant="h2" component="h2" sx={{ mb: 4 }}>{title}</Typography>
                <Grid sx={{ alignItems: "center" }} container spacing={4}>
                    {leads.map((lead) => (
                        <Grid item xs={6} md={3} key={lead.id}>
                            <EmployyeCard {...lead} />
                        </Grid>))}
                </Grid>
            </Container>
        </DepartmentCoverBg >)
    )
}

export default FoundersWrapper;
