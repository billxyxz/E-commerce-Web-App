import illustration from './../Assets/images/shopping-illustration.png'
import { Outlet } from 'react-router-dom'


const Login = () => {
    
  return (
    <section className="w-full h-[100vh] flex">
        <div className="w-2/5 relative hidden md:block bg-[#FFFEC4]">
            <img src={illustration} alt="" className='absolute bottom-3 -right-[150px] w-[500px]' />
        </div>
        <div className="md:w-3/5 w-full flex justify-center items-center">
            <Outlet />
        </div>
    </section>
  )
}
export default Login