import React from "react";
import { Stack, Button, ButtonGroup } from "@mui/material";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite"; //butonlara icon ekleyebilirsin

export const LessonButton = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>                                  {/*normalde direction default olarak row olur yan yan yana sıralar, ama stack da direction default olarak column ve alta alta sıralıyor yan yana olması için row olarak belirmak gerekiyor */}
        <Button variant="text">Text</Button>                      
        <Button variant="outlined">outlined</Button>
        <Button variant="contained">contained</Button>
      </Stack>


      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">XXXX</Button>               {/*  primary mavi rengini temsil eder */}
        <Button variant="contained" color="secondary">XXXX</Button>
        <Button variant="contained" color="warning">XXXX</Button>
      </Stack>

       {/* boyut */}
      <Stack direction="row" spacing={2} display="block">
        <Button variant="contained" color="primary" size="small">XXXX</Button>
        <Button variant="contained" color="secondary" size="medium">XXXX</Button>
        <Button variant="contained" color="warning" size="large">XXXX</Button>
      </Stack>


      {/* icon */}
      <Stack direction="row" spacing={2}>
        <AirlineSeatIndividualSuiteIcon color="error" />

        <Button
          variant="contained"
          startIcon={<AirlineSeatIndividualSuiteIcon />}            /*  endIcon  */
          onClick={() => alert("Tıklandı")}
        >
          Uyu
        </Button>
      </Stack>


    {/* Button Grubu */}
    <Stack spacing={4} direction="row">
        <ButtonGroup variant="outlined">
            <Button>XXXX</Button>
            <Button>XXXX</Button>
            <Button>XXXX</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained">
            <Button>XXXX</Button>
            <Button>XXXX</Button>
            <Button>XXXX</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" orientation="vertical" color="error" >
            <Button>XXXX</Button>
            <Button>XXXX</Button>
            <Button>XXXX</Button>
        </ButtonGroup>
    </Stack>
    </Stack>
  );
};

/* Özetlemek gerekirse, <Div> etiketi basit bir HTML bloğu oluşturmak için kullanılırken, <Stack> bileşeni daha
 karmaşık düzenler oluşturmak ve elemanları yığın şeklinde düzenlemek için kullanılır. <Stack> bileşeni, 
 Material-UI kütüphanesine özgüdür ve özel davranışları ve özellikleri vardır.

 Özetlemek gerekirse, <Stack> bileşeni, düzen oluşturmayı kolaylaştırır, kodun daha temiz ve anlaşılır olmasını 
 sağlar, özelleştirme seçenekleri sunar ve responsive tasarımı destekler. Bu avantajlar, daha verimli bir şekilde 
 kullanıcı arayüzü geliştirmenize yardımcı olabilir.
 */
