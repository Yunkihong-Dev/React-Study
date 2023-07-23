import { ThemeProvider } from "styled-components";
import {RouterProvider} from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import router from "./routes/routing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;