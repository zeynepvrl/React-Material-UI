import { Box } from "@mui/material";
import React from "react";

export const LessonBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "success.light",
        width: "100px",
        height: "100px",
        color: "white",
        padding: "20px",
        '&:hover':{
            backgroundColor:'error.main'
        }
      }}
    >
      LessonBox
    </Box>
  );
};

/* peki burdakı & işarreti ne anlama geliyor

& işareti, CSS kodunda özel bir anlama sahiptir ve "ebeveyn seçicisi" olarak adlandırılır.

Ebeveyn seçicisi, Sass veya Less gibi CSS preprocessors kullanırken veya CSS modülleriyle çalışırken 
sıkça kullanılan bir özelliktir.

& işareti, onu takip eden seçiciyi ebeveyn elementin seçicisi olarak işaretler. Bu, daha spesifik
 veya iç içe geçmiş elementlerin stillerini uygulamak için kullanışlıdır.

Örneğin, aşağıdaki CSS kodunda & işareti kullanılmıştır: 
.button {
  color: blue;
  
  &:hover {
    color: red;
  }
}
Yukarıdaki kodda, .button sınıfına sahip bir elementin üzerine gelindiğinde, &:hover ifadesi :hover pseudo-class seçicisini .button sınıfının ebeveyn seçicisi olarak temsil eder. Bu şekilde, .button üzerine gelindiğinde stil uygulanır.

Örneğin, aşağıdaki HTML ile bu CSS kodu kullanıldığında:
<button class="button">Click me</button>
Bu durumda, .button sınıfına sahip olan <button> elementi, üzerine gelindiğinde rengini kırmızıya
 değiştirecektir. Bu, &:hover seçicisi sayesinde gerçekleşir.

Yani, & işareti, iç içe geçmiş veya daha karmaşık seçici yapılarında ebeveyn elementin seçicisini
 temsil etmek için kullanılır. Bu şekilde, daha esnek ve modüler CSS kodları yazmanıza olanak sağlar.
*/


/* başka çeşit seçiciler de var mıdır

Evet, CSS'te farklı türde seçiciler bulunmaktadır. İşte bazı yaygın kullanılan seçici türleri:

Element Seçicileri: HTML elementlerini doğrudan seçmek için kullanılır.
 Örneğin, div, p, h1 gibi elementleri seçmek için kullanılır. Örnek: div { color: red; }

ID Seçicileri: Bir HTML elementine benzersiz bir kimlik (ID) atandığında,
 ID seçicileri ile o elementi seçebilirsiniz. ID seçicileri başına # işareti eklenerek kullanılır.
  Örnek: #myElement { background-color: yellow; }

Class Seçicileri: HTML elementlerine birden fazla elemente uygulanabilen aynı sınıf adını atayabilirsiniz.
 Class seçicileri başına . işareti eklenerek kullanılır. Örnek: .myClass { font-weight: bold; }

Attribute Seçicileri: Belirli bir HTML elementinin belirli bir özelliğine dayalı olarak elementleri
 seçmek için kullanılır. Örnek olarak, input[type="text"] seçici, type özelliği "text" olan tüm input
  elementlerini seçer. Örnek: input[type="text"] { border: 1px solid blue; }

Pseudo-Class Seçicileri: Elementlerin durumlarına veya belirli olaylara tepki olarak stil uygulamak
 için kullanılır. Örneğin, :hover pseudo-class seçicisi bir elementin üzerine gelindiğinde uygulanacak
  stil özelliklerini belirtir. Örnek: a:hover { text-decoration: underline; }

Pseudo-Element Seçicileri: Elementlerin belirli bir bölümünü hedeflemek için kullanılır. Örneğin, 
::before pseudo-element seçicisi bir elementin içeriğinin başlangıcına yeni bir öğe eklemek için kullanılır.
 Örnek: p::before { content: "Ön Ek: "; }

Bu seçiciler CSS'in gücünü artırır ve belirli elementleri veya element gruplarını hedeflemek için
 kullanılabilir. Doğru seçiciyi kullanmak, stil uygulamasını hedeflenen elementlerle sınırlı tutmak ve 
 istenen tasarımı oluşturmak için önemlidir. */