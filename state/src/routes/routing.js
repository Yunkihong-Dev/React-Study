import { createBrowserRouter } from 'react-router-dom'
import UserListPage from '../pages/UserListPage'
import LoginPage from '../pages/Signupin'
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