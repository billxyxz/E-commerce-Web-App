import { useEffect, } from 'react'
import illustration from './../Assets/images/shopping-illustration.png'
import { Outlet } from 'react-router-dom'


const Login = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
    
  return (
    <section className="w-full h-[100vh] flex">
        <div className="w-2/5 relative hidden md:block bg-[#FFFEC4]">
            <img src={illustration} alt="" className="absolute bottom-3 w-[500px] transition-all duration-1000 delay-1000 -right-[150px]" />
        </div>
        <div className="md:w-3/5 w-full flex justify-center items-center">
            <Outlet />
        </div>
    </section>
  )
}
export default Login