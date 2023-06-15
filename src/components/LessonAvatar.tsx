import { Avatar, AvatarGroup, Stack } from '@mui/material'
import React from 'react'        //AVATARIN İÇİNDE BUTON TEXT IMAGE VS OLABİLR BADGE OLUŞTURULABİLİR

export const LessonAvatar = () => {
  return (
    <Stack direction="row">
        <AvatarGroup sx={{marginRight:10}}>
            <Avatar src="https://randomuser.me/api/portraits/women/45.jpg" />
            <Avatar src='https://randomuser.me/api/portraits/men/41.jpg'/> 
        </AvatarGroup>

        <AvatarGroup max={5}>
            <Avatar sx={{bgcolor:'chocolate' , marginRight:10}}>C</Avatar>
            <Avatar sx={{width:50 , height:60}}>Z</Avatar>

            <Avatar variant='square'>Z</Avatar>
            <Avatar variant='square'>Z</Avatar>
            <Avatar variant='square'>Z</Avatar>
            <Avatar variant='square'>Z</Avatar>
            <Avatar variant='square'>Z</Avatar>
            
        </AvatarGroup>
    </Stack>
  )
}
