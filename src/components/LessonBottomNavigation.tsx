import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";

export const LessonBottomNavigation = () => {
    const [value, setValue] = useState(0)
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}               /* Actionlardki labellerin gözükmesi için showLabels eklemelisin  */
      showLabels
      value={value}                                                         /* value 0 1 veya 2 ye eşit olma durumuna göre Actionlarda gezinir */
      onChange={(event, ikinciParametresitıklananActionunindexi)=>{
        setValue(ikinciParametresitıklananActionunindexi)
      }}
    >
      <BottomNavigationAction icon={<CallIcon />} label="Call" />
      <BottomNavigationAction icon={<CameraAltIcon />} label="Camera" />
      <BottomNavigationAction icon={<ConnectedTvIcon />} label="Connect" />
    </BottomNavigation>
  );
};
//bottom 0 diyebilmek için position değeri belirlenmeli
/* position: "absolute" CSS özelliği, bir HTML öğesinin pozisyonunu belirtmek için kullanılır. Bu özellik, öğenin normal belge akışından çekilip, içinde yer aldığı en yakın üst öğeye (ebeveyn öğe) göre konumlandırılmasını sağlar.

position: "absolute" kullanıldığında, öğenin konumu left, right, top ve bottom özellikleriyle belirlenebilir. Bu özellikler, öğenin soldan, sağdan, yukarıdan ve aşağıdan olan uzaklığını piksel veya diğer birimlerle belirtmek için kullanılır.

Öğenin pozisyonu, ebeveyn öğenin normal akışına göre değil, tarayıcı penceresinin veya en yakın üst öğenin içeriğine göre belirlenir. Bu nedenle, position: "absolute" kullanıldığında, öğe diğer öğelerin üzerine çıkabilir veya öğelerin içinden taşabilir.

position: "absolute" ayrıca, öğenin diğer öğelerle çakışmasını engellemek için z-index değeriyle birlikte kullanılabilir. Z-index, bir öğenin yığınlama düzeninde diğer öğelerin önünde veya arkasında görüneceğini belirler. */
