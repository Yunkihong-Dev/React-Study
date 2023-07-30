import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main'
import TodoPage from '../pages/todo'
import Layout from '../components/Layout'

//export
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/',
                element:<Main Page/>
            },
            {
                path: '/todo/:todoId',
                element:<TodoPage/>
            }  
        ]
    }
    
])

//기본값
export default router