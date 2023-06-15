import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import {useState} from 'react'
import React from 'react'

export const LessonRadioExample = () => {
    const [value, setValue] = useState('')
    const [helperTextMessage, setHelperTextMessage] = useState('')
    const [isError, setIsError] = useState(false)

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{                             //onSubmit den sonra render olduğu için mesaj sadece 1 saniye gözüküyor, prevent default yapılmalı
        e.preventDefault();
        if(value==="canboz"){
            setHelperTextMessage('Doğru')
            setIsError(false)
        }
        else if(value==="tabikicanboz"){
            setHelperTextMessage("Kesinlikle Doğru")
            setIsError(false)
        }
        else{
            setHelperTextMessage("Bir seçim yapmadınız")
            setIsError(true)
        }
    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
  return (
    <form onSubmit={handleSubmit}>                                                         {/* button un type submit olduğu için tıklandığında form da submit olacak */}
        <FormControl error={isError}>
            <FormLabel>En İyi React eğitimini seçiniz</FormLabel>
            <RadioGroup value={value} onChange={handleChange}>
                <FormControlLabel label="Can Boz" value="canboz" control={<Radio/>}/>
                <FormControlLabel label="Tabiki Can Boz" value="tabikicanboz" control={<Radio/>}/>
            </RadioGroup>
            <FormHelperText>{helperTextMessage}</FormHelperText>
            <Button type='submit' variant='outlined'>Gönder</Button>
        </FormControl>
    </form>
  )
}
