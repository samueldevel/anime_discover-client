import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import LoginCard from "./components/LoginCard";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <LoginCard />
    </ThemeProvider>
  );
}
export default App;
