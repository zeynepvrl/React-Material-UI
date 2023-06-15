import { Divider, Stack } from "@mui/material";
import React from "react";

export const LessonStack = () => {
  return (
    <Stack                                               /* Stack Box dan farklı olarak display özelliği var */
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"                           //yatay ve dikey hizalama
      alignItems="center"
      spacing={{ xs: 1, sm: 2, md: 4 }}
      divider={<Divider orientation="vertical" flexItem />}      /*flex direction row olduğu için yani yatay, divider a vertical yani doğrusal ataması yapmalısın */
    >
      <div>Item1</div>
      <div>Item2</div>
      <div>Item3</div>
    </Stack>
  );
};

/* flexItem prop'u, Divider bileşenine uygulanan bir özelliktir. flexItem prop'unu Divider bileşenine vererek,
 Divider'ın Stack bileşeni içinde esnek bir şekilde davranmasını sağlar.

Divider bileşeni, diğer bileşenleri birbirinden ayırmak veya bölümlere bölmek için kullanılır. Varsayılan
 olarak, Divider yatay bir çizgi şeklinde görüntülenir. Ancak, Stack bileşeninde kullanıldığında, yatay 
 çizgiler yerine dikey çizgiler kullanmak isteyebilirsiniz.

Divider bileşenine flexItem propunu vererek, çizginin Stack bileşeni içinde dikey olarak genişlemesini
 sağlarsınız. Bu, Divider'ın yatay boşlukları doldurarak dikey çizgiler oluşturmasını sağlar. flexItem prop'u,
  Divider bileşeninin Stack bileşenine uyum sağlamasını ve esnek bir şekilde davranmasını sağlar.

Yani, flexItem prop'u kullanılarak Divider bileşeni, diğer bileşenler arasında dikey bir çizgi oluşturacak 
şekilde genişleyebilir ve Stack bileşeninin içinde düzgün bir şekilde yer alabilir. */

/* sm, md ve xs gibi değerler, MUI (Material-UI) kütüphanesinde kullanılan ekran boyutlarını temsil eden ekran boyutu aralıklarıdır. Bu ekran boyutu aralıkları, responsive (duyarlı) tasarımlar oluşturmak için kullanılır.

xs: Extra küçük ekran boyutu için geçerlidir. Örneğin, cep telefonlarının dikey (portrait) modunda olduğu durumlar bu ekran boyutuna denk gelir.
sm: Küçük ekran boyutu için geçerlidir. Örneğin, cep telefonlarının yatay (landscape) modunda veya tabletlerin dikey modunda olduğu durumlar bu ekran boyutuna denk gelir.
md: Orta büyüklükte ekran boyutu için geçerlidir. Örneğin, tabletlerin yatay modunda olduğu durumlar bu ekran boyutuna denk gelir.
lg: Büyük ekran boyutu için geçerlidir. Örneğin, dizüstü bilgisayarlar veya masaüstü bilgisayarlar bu ekran boyutuna denk gelir.
Yukarıdaki kod örneğinde, Stack bileşenine verilen direction, spacing ve divider özelliklerinin yanı sıra direction, spacing ve divider özelliklerine ek olarak ekran boyutuna bağlı olarak değişen değerler de tanımlanmıştır. Bu, tasarımın farklı ekran boyutlarında nasıl görüneceğini kontrol etmek için kullanılır. Örneğin, küçük ekran boyutunda (sm) Stack bileşeni yatay (row) yönde ve 2 birim boşluk (spacing) ile düzenlenirken, orta ekran boyutunda (md) ve büyük ekran boyutunda (lg) ise dikey (column) yönde ve 4 birim boşluk ile düzenlenir.

Bu şekilde, farklı ekran boyutlarına duyarlı bir tasarım oluşturabilir ve bileşenlerin farklı ekran boyutlarına göre nasıl davranacağını kontrol edebilirsiniz. */
