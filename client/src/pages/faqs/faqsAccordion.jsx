import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqsAccordion = ({ id, heading, details,expanded, handleChange }) => {
    
    return (
        <Accordion
        expanded={expanded === id}
        onChange={handleChange(id)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={id}
            >
                <Typography variant="h5"  color='black.main'>
                    {heading}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{pt:0}}>
                <Typography variant="h6" color='neutral.dark'>
                    {details}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default FaqsAccordion
