import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'


export const LessonTextField = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4} >
        <Stack direction="row" spacing={2} flexWrap='wrap'>
            <TextField label="Ad" variant='outlined'/>
            <TextField label="Ad" variant='filled'/>
            <TextField label="Ad" variant='standard'/>

            <TextField label="Ad" variant='outlined' size='small' color='error'/>

            <TextField label="Ad" variant='outlined' type='password' helperText="Lütfen isminizi giriniz"/>

            <TextField label="Ad" variant='outlined' type='password' disabled />    

            <TextField label="Ad" variant='outlined' type='password' helperText="Adınızı giriniz" InputProps={{readOnly:true}}/>   {/*disabled daki gibi soluk ve tıklanamaz olmasın ama yine de input girilemesin istiyorsan*/}

            <TextField label="Toplam" variant='standard' InputProps={{endAdornment:(<InputAdornment position='end'>TL</InputAdornment>)}} />
            <TextField label="Toplam" variant='standard' InputProps={{startAdornment:(<InputAdornment position='start'>#</InputAdornment>)}} />

            <TextField label="Şifre" variant='outlined' type='password' value={value} 
              onChange={(e)=>setValue(e.target.value)}
              helperText={value ? 'Şifrenizi kimseyle paylaşmaın' : 'Lütfen Şifrenizi giriniz'}
              />

              
        </Stack>
    </Stack>
  )
}
