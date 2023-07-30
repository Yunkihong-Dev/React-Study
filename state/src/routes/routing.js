import { createBrowserRouter } from 'react-router-dom'
import UserListPage from '../pages/userListPage'
import SignIn from '../pages/signUpIn/components/Signin'
import Layout from '../components/Layout'

//export
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/',
                element:<SignIn/>
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