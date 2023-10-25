import { useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuthContext } from "../Context/AuthContext"

const Signin = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [error, setError] = useState('')
    const {signin} = useAuthContext()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state || "/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            await signin(emailRef.current.value, passwordRef.current.value)
            navigate(redirectPath, {replace: true})
        }catch(err){
            setError(err.message)
            console.log(err.message);
        }

    }

  return (
    <form className='lg:w-[50%] md:w-[78%] w-[86%] h-auto mx-auto shadow py-8 px-6 rounded-md flex flex-col ' onSubmit={handleSubmit}
    >
                <p className='mb-2'>Welcome Back!</p>
                <h4 className='font-["Noto"] text-4xl font-semibold mb-3'>Sign In</h4>
                {error && <h4 className=' bg-red-800 text-gray-900 p-3 mb-3'>{error}</h4>}
                <div className='mb-3'>
                    <label htmlFor="email" className='block mb-1 font-medium'>Email</label>
                    <input type="email" id='email' placeholder='Enter email address' className='border-2 w-full px-3 py-[6px] outline-none rounded-sm' ref={emailRef} required />
                </div>
                <div className='mb-3 flex flex-col'>
                    <label htmlFor="password" className='block mb-1 font-medium'>Password</label>
                    <input type="password" id='password' placeholder='Enter password' className='border-2 w-full px-3 py-[6px] outline-none rounded-sm' ref={passwordRef} />
                    <Link to='forgot-password' className="text-sm self-end text-red-500 hover:underline hover:underline-offset-2 cursor-pointer">Forgot password?</Link>
                </div>
                <button className='bg-black text-white self-center px-6 py-2 uppercase mb-2 font-["Roboto"]' type='submit'>Signin</button>
                <p className='text-center' >Dont have an account? <Link to='../../login' replace className="hover:underline-offset-2 hover:underline hover:text-blue-400">Signup</Link></p>
            </form>
  )
}
export default Signin