import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import router from './routes/routing';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <RouterProvider router={router} />
    </ThemeProvider>
    // <BrowserRouter>
    // {/* HTML5를 지원하는 브우의 url의 변화를 감지 */}
    // <Routes>
    //   {/* 하워에 있는 Route 컴포넌트중 url과 path가 일치하는 컴포넌트만 보여주는 역할 */}
    //   <Route element={<Layout/>}>
    //     <Route path='/' element={<MainPage/>} />
    //     <Route path='/todo/:todoId' element={<TodoPage/>} />
    //   </Route>
    // </Routes>
    // </BrowserRouter>

    )
}

export default App;
