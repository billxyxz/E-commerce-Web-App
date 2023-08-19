import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home, { homeLoader } from './Pages/Home'
import About from './Pages/About'
import Products, { loader } from './Pages/Products'
import ProductDetailPage, { detailLoader } from './Pages/ProductDetailPage'
import Error from './Pages/Error'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import { AuthProvider } from './Context/AuthContext'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import Profile from './Pages/Profile'


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route index 
        element={<Home />} 
        loader={homeLoader}
        errorElement={<Error />}
        />
        <Route 
        path='about' 
        element={<About />} 
        />
        <Route 
        path='shop' 
        element={<Products />} 
        loader={loader}
        errorElement={<Error/>}
        />
        <Route 
        path='shop/:id'
        element={<ProductDetailPage />}
        loader={detailLoader}
        />
        <Route 
        path='*' 
        element={<Error />}
        />
        <Route 
        path='cart'
        element={<Cart />}
        />
        <Route
        path='login'
        element={<Login />}>
            <Route 
            index
            element={<Signup />}
            />
            <Route 
            path='signin'
            element={<Signin />}
            />
        </Route>
        <Route
        path='user'
        element={<Profile />}
         />
    </Route>
))

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    )
}

export default App
