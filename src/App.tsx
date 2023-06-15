import React from "react";
import "./App.css";
import LesssonTypography from "./components/LesssonTypography";
import { LessonButton } from "./components/LessonButton";
import { LessonTextField } from "./components/LessonTextField";
import { LessonRadioGroup } from "./components/LessonRadioGroup";
import { LessonRadioExample } from "./components/LessonRadioExample";
import { LessonSelect } from "./components/LessonSelect";
import { LessonMultipleSelect } from "./components/LessonMultipleSelect";
import { LessonCheckBox } from "./components/LessonCheckBox";
import { LessonMultiCheckBox } from "./components/LessonMultiCheckBox";
import { LessenAutoComplete } from "./components/LessenAutoComplete";
import { LessonBox } from "./components/LessonBox";
import { LessonStack } from "./components/LessonStack";
import { LessonGrid } from "./components/LessonGrid";
import { LessonCard } from "./components/LessonCard";
import { LessonAccordion } from "./components/LessonAccordion";
import { LessonAppBar } from "./components/LessonAppBar";
import { LessonImageList } from "./components/LessonImageList";
import { LessonPaper } from "./components/LessonPaper";
import { LessonLink } from "./components/LessonLink";
import { LessonBreadCrumb } from "./components/LessonBreadCrumb";
import { LessonDrawer } from "./components/LessonDrawer";
import { LessonBadge } from "./components/LessonBadge";
import { LessonSpeedDial } from "./components/LessonSpeedDial";
import { LessonBottomNavigation } from "./components/LessonBottomNavigation";
import { LessonAvatar } from "./components/LessonAvatar";
import { LessonList } from "./components/LessonList";
import { LessonToolTip } from "./components/LessonToolTip";
import { LessonAlert } from "./components/LessonAlert";
import { LessonDialog } from "./components/LessonDialog";
import { LessonSnackBar } from "./components/LessonSnackBar";
import { LessonSpinner } from "./components/LessonSpinner";
import { LessonSkeleton } from "./components/LessonSkeleton";
import { LessonLoadingButton } from "./components/LessonLoadingButton";
import { LessonTable } from "./components/LessonTable";
import { LessonDateTimePicker } from "./components/LessonDateTimePicker";
import { LessonDateRange } from "./components/LessonDateRange";
import { LessonTabs } from "./components/LessonTabs";
import { LessonMasonry } from "./components/LessonMasonry";
import { LessonTimeLine } from "./components/LessonTimeLine";
import { LessonThemeCustomization } from "./components/LessonThemeCustomization";

import { createTheme, colors, ThemeProvider } from "@mui/material";

const themeDeneme = createTheme({
  palette: {
    secondary: {
      main: colors.brown[300], //bunu yaptıktan sonra bu değişimi algılanması için projeye provide etmen gerekir
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeDeneme}>
      <div className="App">
        {/* <LesssonTypography/> */}
        {/* <LessonButton/> */}
        {/* <LessonTextField/> */}
        {/* <LessonRadioGroup/> */}
        {/* <LessonRadioExample/> */}
        {/* <LessonSelect/> */}
        {/* <LessonMultipleSelect/> */}
        {/* <LessonCheckBox/> */}
        {/* <LessonMultiCheckBox/> */}
        {/* <LessenAutoComplete/> */}
        {/* <LessonBox/> */}
        {/* <LessonStack/> */}
        {/* <LessonGrid/> */}
        {/* <LessonCard/> */}
        {/* <LessonAccordion/> */}
        {/* <LessonAppBar/> */}
        {/* <LessonImageList/> */}
        {/* <LessonPaper/> */}
        {/* <LessonLink/> */}
        {/* <LessonBreadCrumb/> */}
        {/* <LessonDrawer/> */}
        {/* <LessonBadge/> */}
        {/* <LessonSpeedDial/> */}
        {/* <LessonBottomNavigation/> */}
        {/* <LessonAvatar/> */}
        {/* <LessonList/> */}
        {/* <LessonToolTip/> */}
        {/* <LessonAlert/> */}
        {/* <LessonDialog/> */}
        {/* <LessonSnackBar/> */}
        {/* <LessonSpinner/> */}
        {/* <LessonSkeleton/> */}
        {/* <LessonLoadingButton/> */}
        {/* <LessonTable/> */}
        {/* <LessonDateTimePicker/> */}
        {/* <LessonDateRange/> */}
        {/* <LessonTabs/> */}
        {/* <LessonMasonry/> */}
        {/* <LessonTimeLine/> */}
        <LessonThemeCustomization />
      </div>
    </ThemeProvider>
  );
}

export default App;
