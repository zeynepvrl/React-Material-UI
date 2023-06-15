import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'

export const LessonBreadCrumb = () => {
  return (
    <Breadcrumbs separator="-" maxItems={3}>                                          {/* //separator default olarak / dir */}
    <Link href='https://github.com/zeynepvrl?tab=repositories' underline='none'>Anasayfa</Link>
    <Link href='https://github.com/zeynepvrl?tab=repositories' underline='none'>Blog</Link>
    <Link href='https://github.com/zeynepvrl?tab=repositories' underline='none'>Zeynep</Link>
    <Link href='https://github.com/zeynepvrl?tab=repositories' underline='none'>Zeynep</Link>
    <Link href='https://github.com/zeynepvrl?tab=repositories' underline='none'>Zeynep</Link>
    <Link href='https://github.com/zeynepvrl?tab=repositories' underline='none'>Zeynep</Link>
    <Link href='https://github.com/zeynepvrl?tab=repositories' underline='none'>Zeynep</Link>
    </Breadcrumbs>
  )
}
