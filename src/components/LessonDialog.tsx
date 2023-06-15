import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

export const LessonDialog = () => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false)
  return (
    <>
    <Button onClick={()=>setDialogIsOpen(true)} >Open Dialog</Button>

    <Dialog open={dialogIsOpen} onClose={()=>setDialogIsOpen(false)}>
        <DialogTitle>TestTitle</DialogTitle>
        <DialogContent>
            <DialogContentText>LikeSubTitle</DialogContentText>
            <DialogActions>
                <Button onClick={()=>setDialogIsOpen(false)}>Yes</Button>
                <Button onClick={()=>setDialogIsOpen(false)}>No</Button>
            </DialogActions>
        </DialogContent>
    </Dialog>
    </>
  )
}
