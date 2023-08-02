import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './App.css'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import TodoStoreProvider from './context/todo'
import Layout from './components/Layout'
import MainPage from './pages/main'
import TodoPage from './pages/todo'

function App() {
	return (
		<TodoStoreProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<BrowserRouter>
					{/* HTML5를 지원하는 브라우저의 URL의 변화를 감지 */}
					<Routes>
						{/* 현재 URL과 path가 일치하는 컴포넌트만 보여주는 역할 */}
						<Route element={<Layout />}>
							<Route path="/" element={<MainPage />} />
							<Route path="/todo/:todoId" element={<TodoPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</TodoStoreProvider>
	)
}

export default App
