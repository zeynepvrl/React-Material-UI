import React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers";
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useState } from "react";

export const LessonDateTimePicker = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  console.log(value);
  return (
    <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          label="Tarih"
          renderInput={(params) => <TextField {...params} />}
        /> */}
        <TimePicker
          label="Time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    </Stack>
  );
};

/* @mui/x-date-pickers ve @mui/x-date-pickers-pro arasındaki fark, bunların MUI (Material-UI) tarafından sunulan iki farklı paket olduğu ve lisanslama ve bileşen içeriği açısından farklılık gösterdikleridir.

@mui/x-date-pickers:

Lisans: @mui/x-date-pickers paketi MIT lisansı altında sunulmaktadır, yani ücretsiz olarak kullanılabilir.
Bileşen İçeriği: Bu paket, bir tarih ve/veya saat düzenlemek için kullanılabilen tüm bileşenleri içerir. Temel tarih seçicileri, zaman seçicileri, takvimler ve ilgili yardımcı bileşenler gibi öğeleri içerebilir. Bu bileşenler, tarih ve/veya saat bilgilerini düzenlemek ve göstermek için kullanılabilir.
@mui/x-date-pickers-pro:

Lisans: @mui/x-date-pickers-pro paketi ise ticari bir lisans altında sunulur. Bu, bu paketin kullanımının ücretsiz olmadığı anlamına gelir ve ticari projelerde kullanılmak istendiğinde bir ücret ödenmesi gerekebilir.
Bileşen İçeriği: @mui/x-date-pickers-pro, @mui/x-date-pickers paketinin temel bileşenlerini içerirken, ayrıca tarih ve/veya saat aralıklarını düzenlemek için ek bileşenler de sağlar. Örneğin, tarih aralığı seçicileri veya zaman aralığı seçicileri gibi bileşenler bu paketin bir parçası olabilir.
Bu farklılıklar, MUI kullanıcılarına farklı ihtiyaçlara yönelik seçenekler sunmayı amaçlamaktadır. Ücretsiz bir seçenek olan @mui/x-date-pickers, temel tarih ve/veya saat düzenleme bileşenlerini içerirken, ticari projelerde daha gelişmiş tarih ve/veya saat aralıklarını düzenleme ihtiyacı olan kullanıcılar
için @mui/x-date-pickers-pro paketi sunulmaktadır. Ancak, hangi paketi kullanmanız gerektiğine karar vermeden önce, projenizin gereksinimlerini, kullanım senaryolarını ve uygun lisanslama şartlarını dikkate almanız önemlidir. */
//npm install @mui/x-date-pickers       date pickers ın sunduğu celali kalıbındaki zaman kütüphaneleri=>
//npm install date-fns-jalali --save
//npm install moment-jalaali


/* Bu bölüm, tarih ve saat değerlerini yerelleştirmek için gerekli olan bileşenleri sağlar. LocalizationProvider bileşeni, OpenUI5 kütüphanesinde bulunan bir bileşendir. Bu bileşen, yerel dil, tarih biçimi ve saat biçimi gibi yerelleştirme ayarlarını sağlar ve tarih/saat değerlerinin doğru şekilde işlenmesini sağlar.

dateAdapter={AdapterDayjs}: LocalizationProvider bileşenine, dateAdapter özelliği aracılığıyla bir adaptör bileşeni sağlanır. Bu adaptör, tarih ve saat değerlerini işlemek için kullanılır. Burada, AdapterDayjs adında bir Day.js adaptörü kullanılıyor. Day.js, hafif ve esnek bir JavaScript tarih işleme kütüphanesidir.

Yerel dil ayarları, LocalizationProvider bileşeninin etrafındaki bileşenler tarafından belirlenen dil ayarlarına dayanır. Tarayıcının dil ayarlarından otomatik olarak alınabilir veya belirli bir dil ayarı ayarlanabilir.

Bu şekilde, LocalizationProvider bileşeni, tarih ve saat değerlerinin yerel dil, saat dilimi ve tarih biçimiyle doğru bir şekilde görüntülenmesini ve işlenmesini sağlar. Bu, kullanıcıların tercih ettikleri dil ve saat dilimine uygun olarak tarih ve saatleri seçmelerine olanak tanır ve daha iyi bir kullanıcı deneyimi sunar.





User
burda bahsedilen adapter tam olarak nedir
ChatGPT
Bahsedilen "adapter" terimi, bir tarih işleme kütüphanesinin veya bileşeninin, farklı tarih işleme kütüphaneleri veya bileşenleriyle uyumlu olmasını sağlamak için kullanılan bir arayüzdür. Adapter, bir bileşenin veya kütüphanenin başka bir bileşen veya kütüphaneyle iletişim kurabilmesini sağlar.

Örneğin, bu kod örneğinde AdapterDayjs, Day.js kütüphanesi ile çalışmak için özel olarak tasarlanmış bir adaptör bileşenidir. LocalizationProvider bileşeni, tarih ve saat değerlerini işlemek için bu adaptörü kullanır.

Adapterler, genellikle farklı tarih işleme kütüphaneleri veya bileşenleri arasında uyumluluk sağlamak için kullanılır. Her bir tarih işleme kütüphanesi veya bileşen, kendi içerisinde belirli bir API ve tarih/saat temsili kullanır. Farklı kütüphaneler veya bileşenler arasında tarih ve saat değerlerini geçişken hale getirmek 
veya bir kütüphane/bileşenin özelliklerini diğerine aktarmak gerektiğinde, adapterler bu işlevi yerine getirir.

Adapterler, tarih ve saat değerlerini çevirme, formatlama, ayrıştırma veya işleme gibi işlemleri gerçekleştirir. Bu sayede, farklı kütüphaneler veya bileşenler arasında veri uyumluluğu sağlanır ve tarih/saat değerleri sorunsuz bir şekilde iletişim kurabilir.

Özetle, bir adapter, bir bileşenin veya kütüphanenin başka bir bileşen veya kütüphaneyle uyumlu çalışabilmesini sağlayan bir arayüzdür ve tarih/saat değerlerinin geçişkenliğini sağlar */
