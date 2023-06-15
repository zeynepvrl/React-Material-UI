import { IconButton, Tooltip } from '@mui/material'
import React from 'react'         //sitede karmaşık bir ifade olduğunda, üzerine gelindiğinde açıklama çıkacak, örn serverden dinamik bir data gelecek
import BackHandIcon from '@mui/icons-material/BackHand';

export const LessonToolTip = () => {
  return (
    <Tooltip title="Say Hi!" placement='right'>
        <IconButton>
            <BackHandIcon/>
        </IconButton>
    </Tooltip>
  )
}
