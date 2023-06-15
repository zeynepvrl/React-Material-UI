import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

export const LessonMultiCheckBox = () => {
  const [languages, setLanguages] = useState<string[]>([])        //burda dizinin bir string değer olduğunu belirtmezsen includes fonksiyonu hata veriyor

  const handleSelectLanguagesChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     const index=languages.indexOf(e.target.value)           //tıkladığım CheckBox un value değerinin indexini döndürür eğer arrayde böyle bir value değeri yoksa -1 döndürür
     if(index===-1){
        setLanguages([...languages,e.target.value])
     }
     else{                                                     //else de seçiliyken kadırmayı isteme durumu
        setLanguages(languages.filter((perLanguage)=>perLanguage!=e.target.value))      //seçtiğim value değerine eşit olmayanları geri döndürüp set et
     }
  }

  return (
    <Box>
      <FormControl>
        <FormLabel>Bildiğiniz frontend dillerini seçiniz:</FormLabel>
        <FormGroup>
          <FormControlLabel
            value="react"                                         //burdaki value bu label seçili olduğunda tutulacak değeri temsil ediyor arkaplandaki
            label="React.js"
            control={
              <Checkbox
                checked={languages.includes('react')}             //includes fonksiyonu true veya false değeri return eder , belirtilen elemanın bulunup bulunmamasına göre
                onChange={handleSelectLanguagesChange}
              />
            }
          />

          <FormControlLabel
            value="vue"
            label="Vue"
            control={
              <Checkbox
                checked={languages.includes('vue')}
                onChange={handleSelectLanguagesChange}
              />
            }
          />

          <FormControlLabel
            value="flutter"
            label="Flutter"
            control={
              <Checkbox
                checked={languages.includes('flutter')}
                onChange={handleSelectLanguagesChange}
              />
            }
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
