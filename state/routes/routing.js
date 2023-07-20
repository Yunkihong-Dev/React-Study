import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import UserListPage from '../pages/UserListPage'
import Layout from '../components/Layout'

//export
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/',
                element:<LoginPage/>
            },
            {
                path: '/admin/userList',
                element:<UserListPage/>
            }  
        ]
    }
    
])

//기본값
export default router