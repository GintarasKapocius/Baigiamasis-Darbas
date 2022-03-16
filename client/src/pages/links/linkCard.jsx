import React from 'react';
import { Card, CardContent, CardActionArea, Typography } from '@mui/material';

const LinkCard = ({ link, heading, details }) => (
    <Card elevation={3} sx={{ height: "100%", width: "100%" }}>
        <CardActionArea href={link} target="_blank" sx={{ height: "100%" }}>
            <CardContent sx={{ px: 3, py: 4 }}>
                <Typography gutterBottom variant="h5" color="black.main" component="div">
                    {heading}
                </Typography>
                <Typography variant="body1" color="neutral.dark">
                    {details}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

export default LinkCard;
