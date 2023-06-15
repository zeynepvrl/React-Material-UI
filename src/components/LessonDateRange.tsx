import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRange, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Dayjs } from "dayjs";

export const LessonDateRange = () => {
  const [valuee, setValuee] = React.useState<DateRange<Dayjs>>([null, null]); //normal import da edebilirsin
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        localeText={{ start: "Check-in", end: "Check-out" }}
        value={valuee}
        onChange={(newValuee) => setValuee(newValuee)}
      />
    </LocalizationProvider>
  );
};

/* Yukarıdaki kodda LocalizationProvider ile tarih ve saat işlemlerinde Day.js kullanıldığı belirtilmiştir.
 Bu sayede uygulama içindeki tarih ve saat işlemleri Day.js tarafından yönetilecektir. */
