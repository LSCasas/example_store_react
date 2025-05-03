import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import LoginPage from './pages/LoginPages'
import HomePage from './pages/HomePage'
const router = createBrowserRouter([
  {
    path: '/',
    element: < HomePage />
  },
  {
    path: '/login',
    element: < LoginPage  />
  },
  {
    path: '/productos',
    element: <P> Productos</P>
  },
  {
    path: '/productos/:id',
    element: <P> Productos</P>
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
 

)
