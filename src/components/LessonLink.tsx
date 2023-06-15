import { Box, Link } from '@mui/material'
import React from 'react'

export const LessonLink = () => {
  return (
    <Box>
        <Link href='https://github.com/zeynepvrl?tab=repositories' underline='none'> Mükemmel Kodlar İçin Tıkla </Link>

        <Link href='https://github.com/zeynepvrl?tab=repositories' underline='hover'>Mükemmel Kodlar İçin Tıkla </Link>

        <Link href='https://github.com/zeynepvrl?tab=repositories' underline='always'>Mükemmel Kodlar İçin Tıkla</Link>

        <Link href='https://github.com/zeynepvrl?tab=repositories' component='button' onClick={()=>{console.log('zeyn')}}>Mükemmel Kodlar İçin Tıkla</Link>
    </Box>
  )
}
