import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

export const LessonSpinner = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="secondary" />
      
      <CircularProgress variant="determinate" value={35}/>

      <LinearProgress/> 
      <LinearProgress variant="determinate" value={89}/>
    </Stack>
  );
};
