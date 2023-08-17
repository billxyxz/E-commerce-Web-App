import { useRef, useState } from 'react'
import { useAuthContext } from '../Context/AuthContext'
import { Link, redirect, useNavigate } from 'react-router-dom'

const Signup = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const passwordConfirmRef = useRef('')
    const [error, setError] = useState('')
    const {signup} = useAuthContext()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match.')
        }
        
        try{
            setError('')
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('signin', {replace: true})
        }catch(err){
            setError(err.message)
            console.log(err.message);
        }

    }

  return (
    <form 
    className='lg:w-[50%] md:w-[78%] w-[80%] h-auto mx-auto shadow py-8 px-6 rounded-md flex flex-col' onSubmit={handleSubmit}
    >
                <p className='mb-2'>Welcome!</p>
                {/* {currentUser && currentUser.email} */}
                <h4 className='font-["Noto"] text-4xl font-semibold mb-3'>Sign Up</h4>
                {error && <h4 className=' bg-red-800 text-gray-900 p-3 mb-3'>{error}</h4>}
                <div className='mb-3'>
                    <label htmlFor="email" className='block mb-1 font-medium'>Email</label>
                    <input type="email" id='email' placeholder='Enter email address' className='border-2 w-full px-2 py-1 outline-none rounded-sm' ref={emailRef} required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="password" className='block mb-1 font-medium'>Password</label>
                    <input type="password" id='password' placeholder='Enter password' className='border-2 w-full px-2 py-1 outline-none rounded-sm' ref={passwordRef} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="checkPassword" className='block mb-1 font-medium'>Confirm Password</label>
                    <input type="password" id='checkPassword' placeholder='Re-enter password' className='border-2 w-full px-2 py-1 outline-none rounded-sm' ref={passwordConfirmRef} />
                </div>
                <button className='bg-black text-white self-center px-6 py-2 uppercase text-sm font-semibold mb-2' type='submit'>Signup</button>
                <p className='text-center' >Already have an account? <Link to='signin' replace>Login</Link> </p>
            </form>
  )
}
export default Signup