import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import React from 'react'         //mui material dan değil mua material lab dan import edilir, install da edilmesi gerekir labın  npm install @mui/lab
import {useState} from 'react'

export const LessonLoadingButton = () => {
  const [value, setvalue] = useState(false)

  return (
    <Stack direction="row">
        <LoadingButton loading>Kaydet</LoadingButton>
        <LoadingButton loading variant='outlined'>Kaydet</LoadingButton>
        <LoadingButton loading={false} variant='outlined'>Kaydet</LoadingButton>

        <LoadingButton loading={value} onClick={()=>{setvalue(true)}} variant='outlined'>Kaydet</LoadingButton>


    </Stack>
  )
}
