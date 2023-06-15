import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';          //Material Icon dan import et
import React, { useState } from 'react'

export const LessonAppBar = () => {
    const [tıklananStackButtonu, setTıklananStackButtonu] = useState<null| HTMLElement>(null)
    const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
        setTıklananStackButtonu(event.currentTarget)
        console.log(tıklananStackButtonu)
    }

    const anChorelElementiVarmıControl=Boolean(tıklananStackButtonu)       //type casting varsa öyle bir element true olacak yoksa false

    const handleClose=()=>{
        setTıklananStackButtonu(null)                     //bu değer null olunca kapanacak
    }
  return (
    <AppBar>
        <Toolbar>
            <IconButton>
                <AppsIcon/> 
            </IconButton>
            <Typography variant='h6' component="div" sx={{marginRight:'auto'}}>Örnek Header</Typography>    {/* marginright auto olunca stack deki elemanlar en sağa yaslanacak */}
            <Stack direction='row'>                                                                         {/* bunu en sağa  yaslamak için ayrıca, buraya margin left auto ekleyebilirdin */}
                <Button sx={{color:'white'}}>Anasayfa</Button>
                <Button sx={{color:'white'}}>Hakkımızda</Button>
                <Button sx={{color:'white'}}>İletişim</Button>
                <Button sx={{color:'white'}}>Fiyatalar</Button>
                <Button sx={{color:'white'}} onClick={handleClick} >İndirimdekiler</Button>
            </Stack>

            <Menu anchorEl={tıklananStackButtonu} open={anChorelElementiVarmıControl} onClose={handleClose} >
                <MenuItem onClick={handleClose}>Kitaplar</MenuItem>
                <MenuItem onClick={handleClose}>Defterler</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}


/* event.currentTarget olayın tetiklendiği DOM öğesini temsil eder. Olay dinleyicisinin bağlı olduğu öğeyi temsil eder ve olayın yayımlandığı öğeyi ifade eden event.target ile aynı olabilir veya farklı olabilir.

Örneğin, bir düğme üzerinde bir tıklama olayı dinleyicisi tanımladığınızda, event.currentTarget düğme öğesini temsil ederken, event.target tıklama işleminin gerçekleştiği öğeyi temsil eder. Ancak, bu iki değer arasında farklılık olabilir, özellikle iç içe geçmiş öğelerin olduğu durumlarda.

event.currentTarget genellikle olay dinleyicisinde o anki işlem yapmak istediğiniz öğeye erişmek için kullanılır. Örneğin, bir düğmeye tıklandığında hangi düğmenin tetiklendiğini belirlemek veya düğmeyle ilişkili başka bir veriye erişmek için kullanılabilir.

Not: event.currentTarget ve event.target değerleri genellikle aynı olur, ancak olayın yayımlandığı öğenin farklı alt öğelerine tıklanırsa farklı olabilir. */