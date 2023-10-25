import { sendPasswordResetEmail } from "firebase/auth";
import { useRef } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
sendPasswordResetEmail


const PasswordReset = () => {
    const emailRef = useRef();

    const handleResetForm = async (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, emailRef.current.value)
        .then(() => {
            alert("Check your email for password reset link!");
            setEmail("");
            navigate("..");
        }).catch(err => console.log(err.message));

    }

  return (
    <form
    onSubmit={handleResetForm}
    className='relative lg:w-[50%] md:w-[78%] w-[86%] h-auto mx-auto shadow py-8 pt-10 px-6 rounded-md flex flex-col text-center'
    >
        <Link 
        to="../signin"
        className="absolute top-2 left-6 p-2 text-xl"
        >
            <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        <h4 className='font-["Noto"] text-4xl font-semibold mb-2'>Password Reset</h4>
        <p className="mb-7">Enter the email address associated with your account and we'll send you a link to reset your password.</p>
        <div className="text-left mb-4">
            <label 
            htmlFor="resetEmail"
            className='block mb-[2px] font-medium'
            >Enter Email</label>
            <input 
            ref={emailRef}
            type="email" 
            name="resetEmail" 
            id="resetEmail" 
            placeholder="Enter email address"
            required 
            className='border-2 w-full px-3 py-[6px] outline-none rounded-sm'
            />
        </div>
        <button className='bg-black text-white self-center px-6 py-2 capitalize mb-2 font-["Roboto"] rounded-sm' type='submit'>send reset link</button>
    </form>
  )
}
export default PasswordReset