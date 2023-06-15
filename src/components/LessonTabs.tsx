import { Tab, TabList, TabPanel, Tabs } from '@mui/joy'
import React from 'react'

export const LessonTabs = () => {
  return (
    <Tabs defaultValue={0}>
        <TabList>
            <Tab>First</Tab>
            <Tab>Second</Tab>
            <Tab>Third</Tab>
        </TabList>
        <TabPanel value={0}>Content First</TabPanel>
        <TabPanel value={1}>Content Second</TabPanel>
        <TabPanel value={2}>Content Thirds</TabPanel>
    </Tabs>
  )
}
//Material UI de How-to guaide içerisinde   npm install @mui/joy @emotion/react @emotion/styled
/* mui/joy ifadesi iki ayrı kütüphane olan "Material-UI" (mui) ve "React Joyride" (joy) kütüphanelerini ifade ediyor olabilir. Her birini ayrı ayrı ele alalım:

Material-UI (mui): Material-UI, React tabanlı web uygulamaları için bir UI (Kullanıcı Arayüzü) bileşen kütüphanesidir. Material Design kurallarına uygun olarak
 tasarlanmış bir dizi önceden oluşturulmuş ve yeniden kullanılabilir bileşen içerir. Bu bileşenler, modern ve şık bir görünüm elde etmek ve kullanıcı deneyimini
  geliştirmek için kullanılabilir. Material-UI, React geliştiricilerine hızlı bir şekilde kullanıcı arayüzü oluşturma imkanı sağlar.

React Joyride (joy): React Joyride, kullanıcıların bir web uygulamasında gezinme ve etkileşim konusunda rehberlik sağlamak için kullanılan bir kütüphanedir.
 Bu kütüphane, interaktif turlar ve rehberlik komponentleri oluşturmak için kullanılır. Kullanıcıları belirli özelliklere veya sayfalara yönlendirebilir, adımlar ve talimatlar 
 eşliğinde kullanıcı deneyimini geliştirebilir ve kullanıcılara uygulama hakkında daha fazla bilgi sağlayabilir.

Bu iki kütüphane bir arada kullanıldığında, Material-UI bileşenlerini kullanarak tasarlanmış bir web uygulamasında kullanıcılara Joyride rehberliği sunulabilir.
 Kullanıcılar, UI bileşenlerini keşfederken veya belirli özellikleri kullanırken rehberliğe tabi tutulabilirler. Bu, kullanıcıların uygulama içindeki önemli noktaları keşfetmelerine, 
 öğrenmelerine ve doğru şekilde etkileşimde bulunmalarına yardımcı olur. */