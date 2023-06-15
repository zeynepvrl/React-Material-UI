import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, Typography } from '@mui/material';

export const LessonDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <IconButton size='large' onClick={()=>{setIsOpen(true)}}>
        <MenuIcon/>
    </IconButton>
    <Drawer open={isOpen} anchor='right' onClose={()=>setIsOpen(false)}>   {/*  box ın dışına tıklayınca onClose tetikleniyor  */}         {/*default olarak solda açılır bottom ya top olabilir*/}
        <Box width="300px" textAlign="center">
            <Typography variant='h6' component='div'>Panel Deneme</Typography>
        </Box>
    </Drawer>
    </>
  )
}


/* Bu React bileşeni, bir kenar çubuğunu (drawer) açıp kapamak için bir buton ve bir drawer bileşenini içerir. onClose olayı, drawer bileşeni kapatıldığında tetiklenir.

onClose olayı, drawer bileşeninin onClose özelliğine atanmış bir işlevi temsil eder. İşlev, drawer kapatıldığında tetiklenir ve drawer bileşeninin open özelliği false olarak güncellenir.

Örnekte, isOpen adında bir durum (state) kullanılır ve başlangıçta false değeriyle başlatılır. isOpen durumu, drawer'ın açık veya kapalı olduğunu izler.

Butonun onClick olayı tetiklendiğinde, setIsOpen(true) işlevi çağrılır ve isOpen durumu true olarak güncellenir, böylece drawer açılır.

Drawer bileşeni, open özelliğine isOpen durumunu geçirir, böylece drawer'ın açık veya kapalı olduğunu belirtir.

Drawer bileşeninin onClose özelliğine () => setIsOpen(false) işlevi atanır. Bu işlev, drawer kapatıldığında tetiklenir ve isOpen durumu false olarak güncellenir, böylece drawer kapanır.

Sonuç olarak, kullanıcı drawer'ı açmak için butona tıkladığında onClose olayı çalışmaz. Ancak, drawer açıkken, kullanıcı drawer'ın dışına tıklayarak veya drawer içindeki bir kapatma düğmesine tıklayarak drawer'ı 
kapattığında onClose olayı tetiklenir ve isOpen durumu false olarak güncellenir. */