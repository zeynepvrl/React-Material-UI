import { Box, MenuItem, TextField, selectClasses } from "@mui/material";
import { useState } from "react";
import React from "react";

export const LessonMultipleSelect = () => {
  const [SelectedValues, setSelectedValues] = useState<string[]>([]);
  console.log(SelectedValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValues(
      typeof e.target.value === "string"
        ? e.target.value.split(",")
        : e.target.value
    );
  };
  return (
    <Box width="250px">
      <TextField
        label="Ülke Seçiniz"
        fullWidth
        select
        SelectProps={{ multiple: true }}
        value={SelectedValues}
        onChange={handleChange}
      >
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="GR">Almanya</MenuItem>
        <MenuItem value="FR">Fransa</MenuItem>
      </TextField>
    </Box>
  );
};

/* Eğer e.target.value bir string türüne ait bir dizi ise (örneğin, "TR,GR,FR"),
 o zaman ilk koşul true olur ve split(",") ifadesi kullanılır. 
 Bu, virgülle ayrılmış dizeyi parçalayarak bir dizi oluşturur.
Eğer e.target.value yalnızca bir tekil string değeri ise (örneğin, "TR"), 
o zaman ilk koşul false olur ve ikinci koşul true olur. Bu durumda, e.target.value'yu doğruda
n setSelectedValues'a iletiyoruz. */