import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import BackHandIcon from '@mui/icons-material/BackHand';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import CakeIcon from '@mui/icons-material/Cake';

export const LessonSpeedDial = () => {
  return (
    <SpeedDial ariaLabel='Navigation' icon={<SpeedDialIcon openIcon={<ArrowUpwardIcon/>}/>}>
        <SpeedDialAction icon={<BackHandIcon/>} tooltipTitle="hand" tooltipOpen/>
        <SpeedDialAction icon={<BluetoothIcon/>} tooltipTitle="bluetooth" tooltipOpen/>
        <SpeedDialAction icon={<CakeIcon/>} tooltipTitle="cake" tooltipOpen/>
    </SpeedDial>
  )
}
