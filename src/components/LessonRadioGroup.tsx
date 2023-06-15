import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'

export const LessonRadioGroup = () => {
    const [value, setValue] = useState('')                          //RadioGroup un değerini tutacak veya değiştirecek
    console.log(value)

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
  return (
    
    <FormControl>
        <FormLabel>Maaş Beklentinizi Seçiniz</FormLabel>
        <RadioGroup row name='Expected-Salary' value={value} onChange={handleChange}>
            <FormControlLabel label="2000$" value="2000$" color='error' control={<Radio color='error'/>}/>     {/*label kısmı gösterilecek kısım value kısım seçildiğinde tutalacak değer */}
            <FormControlLabel label="3000$" value="3000$" color='error' control={<Radio color='error'/>}/>     
            <FormControlLabel label="4000$" value="4000$" color='error' control={<Radio color='error'/>}/>     
        </RadioGroup>

        <FormHelperText>Yanlış Seçim</FormHelperText>
    </FormControl>
  )
}
