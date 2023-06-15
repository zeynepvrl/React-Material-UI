import { Alert, AlertTitle, Stack } from '@mui/material'
import React from 'react'

export const LessonAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert>Deneme</Alert>                                       {/* Default halde success dir */}
        <Alert severity='info'>Deneme</Alert>
        <Alert severity='success'>Deneme</Alert>
        <Alert severity='warning'>Deneme</Alert>
        <Alert severity='error'> <AlertTitle>Title Denemeb </AlertTitle> Deneme</Alert>
    </Stack>
  )
}
