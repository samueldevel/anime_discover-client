import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import LoginPage from "./page/LoginPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(226, 115, 18, 0.86)",
    },
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <LoginPage />
    </ThemeProvider>
  );
}
export default App;
