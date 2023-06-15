import { Button, IconButton, Snackbar, SnackbarContent } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const LessonSnackBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const actioN = (
    <React.Fragment>                                                                   {/*  retundeki <></> ile aynı ama burda property olduğu için bu şekile yazılmalı */}
      <Button onClick={handleClose} color="secondary" size="small">Geri Al</Button>
      <IconButton>
        <CloseIcon onClick={handleClose} sx={{color:'white' }}/>
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Sil</Button>

      <Snackbar
        open={isOpen}
        message="Mesaj Bilgisi"
        action={actioN}
        onClose={handleClose}
        autoHideDuration={2000}                                           /* SnackBar ın içinde onClose u tanımlamazsan 2 saniye sonra kapanma da olmaz */
        anchorOrigin={{horizontal:'center' , vertical:'bottom'}}
      />
    </div>
  );
};
