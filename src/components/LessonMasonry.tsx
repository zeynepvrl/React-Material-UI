import { Masonry } from '@mui/lab'
import { Accordion, AccordionDetails, AccordionSummary, Paper } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

export const LessonMasonry = () => {
  return (
    <Masonry columns={3} spacing={2} >
        {heights.map((perHeight,index)=>(
            <Paper key={index}>
                <Accordion sx={{minHeight:perHeight}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>Accordion {index +1}</AccordionSummary>
                    <AccordionDetails>Content</AccordionDetails>
                </Accordion>
            </Paper>
        ))}
    </Masonry>
  )
}
