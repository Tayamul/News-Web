import { createTheme } from "@mui/material"
import {purple} from "@mui/material/colors"

export const theme = createTheme({
  palette: {
    primary: { main: purple[500], dark: purple[800], light: purple[200]},
    secondary: {
      main: "#0fe0b6",
    }
  },
  
});
