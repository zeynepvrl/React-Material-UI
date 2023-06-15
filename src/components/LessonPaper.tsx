import { Box, Paper } from '@mui/material'
import React from 'react'

export const LessonPaper = () => {
  return (
    <Box display={'flex'} flexWrap={'wrap'} gap={20}>
        <Paper sx={{width:100 , height:100}}></Paper>
        <Paper sx={{width:100 , height:100}}></Paper>
        <Paper sx={{width:100 , height:100}} variant='outlined' elevation={1}></Paper>
        <Paper sx={{width:100 , height:100}} square ></Paper>          {/*köşelerdeki hafif yuvarlaklığı giderir */}


        <Paper sx={{width:100 , height:100}} elevation={0}></Paper>
        <Paper sx={{width:100 , height:100}} elevation={1}></Paper>
        <Paper sx={{width:100 , height:100}} elevation={2}></Paper>
        <Paper sx={{width:100 , height:100}} elevation={3}></Paper>
    </Box>
  )
}
