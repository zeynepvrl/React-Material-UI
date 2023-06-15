import { Grid } from '@mui/material'
import React from 'react'

export const LessonGrid = () => {
  return (
    <Grid>                                            {/*  Kapsayıcı olarak Box kullanılırdin */}
      <Grid container>                                {/* container row görevi görüyor, eklemezsen alt alta sıralanırlar */}
        <Grid xs={12} md={8}>8birimlik</Grid>
        <Grid xs={12} md={4}>4 birimlik</Grid>        {/* 12 birim dolunca otamatik aşağı geçecektir */}
        <Grid xs={12} md={8}>8birimlik</Grid>         {/* xs cihaz ve üzeri için 12 , medium cihaz ve üzeri için 8 birimlik */}
        <Grid xs={12} md={4}>4 birimlik</Grid>
      </Grid>
      <Grid container>                                 {/*yeni satırınca 12 birimlik max grid dolmayınca geçmek için yeni component oluşturursun */}
        <Grid xs={8}>8birim</Grid>
        <Grid xs={4}>4birim</Grid>
      </Grid>
    </Grid>
  )
}
