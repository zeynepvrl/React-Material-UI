import { Box, MenuItem, TextField } from '@mui/material'
import {useState} from 'react'
import React from 'react'

export const LessonSelect = () => {
    const [SelectedValue, setSelectedValue] = useState('')
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSelectedValue(e.target.value)
    }
  return (
    <Box width="250px">
        <TextField label="Ülke Seçiniz" fullWidth select value={SelectedValue} onChange={handleChange}>
            <MenuItem value="TR">Türkiye</MenuItem>
            <MenuItem value="GR">Almanya</MenuItem>
            <MenuItem value="FR">Fransa</MenuItem>
        </TextField>
    </Box>
  )
}
