import React from 'react'
import { Typography } from '@mui/material';

function LesssonTypography() {
  return (
    <div>
       <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam</Typography> 
       <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam</Typography>
       <Typography variant='button'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam</Typography>

       <Typography variant='h1'>H1 Görünümü</Typography>
       <Typography variant='h2'>H2 Görünümü</Typography>
       <Typography variant='h3'>H3 Görünümü</Typography>
       <Typography variant='h4'>H4 Görünümü</Typography>
       <Typography variant='h5'>H5 Görünümü</Typography>
       <Typography variant='h6'>H6 Görünümü</Typography>
                                                                        {/* h1 css özelliklerini taşır ama html etiketi h4 olur */}
       <Typography variant='h1' component='h4'>H1 Görünümü</Typography>   {/*component propunu kullanarak, <Typography> bileşenini farklı HTML elementleriyle eşleştirebilir ve görünümünü belirleyebilirsiniz. */}
      
       <Typography variant='h1' component='h4' align='left'>H1 Görünümü</Typography>
       <Typography variant='h1' component='h4'align='right'>H1 Görünümü</Typography>
    </div>
  )
}

export default LesssonTypography

/* API dokümantasyonu, bir yazılım veya kütüphanenin programlama arayüzünü (API) açıklayan ve kullanımını anlatan
 bir kaynaktır. API, yazılım bileşenleri arasında iletişim ve etkileşim sağlayan bir arayüzdür. API dokümantasyonu,
  geliştiricilerin API'yi nasıl kullanacaklarını, işlevlerini, parametrelerini, dönüş değerlerini ve kullanım 
  örneklerini anlamalarına yardımcı olur.

Material-UI'nin API dokümantasyonu, Material-UI kütüphanesinin sunduğu bileşenlerin, özelliklerin, 
stil seçeneklerinin ve kullanım yönergelerinin ayrıntılı bir açıklamasını içerir. Bu dokümantasyon, 
geliştiricilere Material-UI bileşenlerini nasıl kullanacaklarını ve özelleştireceklerini öğretir. 
API dokümantasyonu, geliştiricilerin ihtiyaç duydukları bilgilere hızlı ve kolay bir şekilde erişmelerini sağlar. */

//MATERIAL UI CUSTOMİZATION > DEFAULT THEME de her şeyin default hali bulunuyor