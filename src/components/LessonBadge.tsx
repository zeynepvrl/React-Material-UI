import { Badge, Stack } from '@mui/material'
import React from 'react'           //Bir icon un üzerine sayı, text imkanı, bunların konumu rengi
import EmailIcon from '@mui/icons-material/Email';

export const LessonBadge = () => {
  return (
    <Stack direction="row" marginTop={30} spacing={3}>                              {/* row u yazmayınca 40 görünmüyor */}
        <Badge badgeContent={40} color='secondary'>
            <EmailIcon/>
        </Badge>

        <Badge badgeContent={50} max={40}>
            <EmailIcon/>
        </Badge>

        <Badge badgeContent={40} anchorOrigin={{vertical:"bottom", horizontal:"left"}}>
            <EmailIcon/>
        </Badge>
    </Stack>
  )
}
