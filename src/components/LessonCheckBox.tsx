import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

export const LessonCheckBox = () => {
  const [isAccept, setIsAccept] = useState(false);
  console.log(isAccept)
  
  return (
    <Box>
      <Box>
        <FormControl>                                             {/* FormControl zorunlu değil burda */}
          <FormLabel>Eğitim Durumunuz</FormLabel>
          <FormGroup row>
            <FormControlLabel disabled control={<Checkbox />} label="Lise" />

            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Üniversite"
            />

            <FormControlLabel control={<Checkbox />} label="İlkokul" />
          </FormGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAccept}                                       /* checked propsu kutunun durumunu belirliyor */
                  onChange={(e) => setIsAccept(e.target.checked)}       /* e.target.checked kutudaki durumu taşıyor true veya false olarak */
                />
              }
              label="Kullanım koşullarını kabul ediyorum"
            />
          </FormGroup>
        </FormControl>
      </Box>

    </Box>
  );
};
