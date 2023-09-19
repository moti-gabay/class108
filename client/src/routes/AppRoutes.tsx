
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Category from '../components/layout/Category';
import CardLink from '../components/layout/CardLink';
import NotFound404 from '../pages/NotFound404';
import Layout from '../components/layout/Layout';



const AppRoutes = () => {
    const router = createBrowserRouter([
{
    path:"/",
    element:<Layout/>,
    children:[
        {path:"/", element:<Category/>},
        {path:"/cardLink",element:<CardLink/>}
    ]
},
{
    path:"*",
    element:<NotFound404/>
}
    ])


  return (
    <RouterProvider router={router}/>
  )
}
export default AppRoutes;