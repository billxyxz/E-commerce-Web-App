import { Link, NavLink, useNavigate } from "react-router-dom"
import { Hamburger, Close } from "../Assets/images/Icons/Icons"
import { useState } from "react"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import { useAuthContext } from "../Context/AuthContext"

const Navbar = () => {
  const [nav, showNav] = useState(false)
  const navigate = useNavigate()
  const cartItems = useSelector(state => state.cart.cartItems)
  const { currentUser, logout } = useAuthContext()

  function handleNav(){
    showNav(prev => !prev)
  }

  async function handleLogout(){
    try{
      await logout()
      console.log("You are logged out!")
    }catch(err){
      console.log(err.message)
    }
  }

  console.log(nav)

  function handleActive({isActive}){
    return {
      fontWeight: isActive ? "700" : "",
    } 
  }

  return (
    <nav className="flex justify-between h-16 md:h-[70px] fixed z-10 w-full items-center pr-12 pl-12 md:pr-[150px] md:pl-[150px] bg-[#FFFEC4]">
        <h3 className="text-2xl font-logo font-bold"><Link to=".">BillFashion</Link></h3>
        <ul className={`font-navlinks w-full sm:w-auto top-16 left-0 sm:top-0  items-center justify-center sm:h-auto p-16 sm:p-0 flex flex-col sm:flex-row bg-black sm:bg-transparent text-white sm:text-black sm:gap-6 gap-16 absolute sm:relative sm:translate-x-0 ${nav ? "" : "translate-x-full"} transition-transform`}>
           <NavLink 
           to="."
           style={handleActive}
           className="hover:underline hover:underline-offset-8 hover:font-bold"
          onClick={() => showNav(false)}>Home</NavLink>
           <NavLink 
           to="shop"
           style={handleActive}
           className="hover:underline hover:underline-offset-8 hover:font-bold"
           onClick={() => showNav(false)}
           >Shop</NavLink>
           <NavLink 
           to="about"
           className="hover:underline hover:underline-offset-8 hover:font-bold"
           style={handleActive}
           onClick={() => showNav(false)}
           >About Us</NavLink>
           {nav && <button className="hover:bg-black outline outline-2 hover:text-white pt-1 pb-1 pl-4 pr-4 rounded text-center " onClick={() => navigate('login')}>Login</button>}
        </ul>
        <div className="flex items-center gap-4">
        <div className="relative">
        <FontAwesomeIcon icon={faCartShopping} onClick={() => navigate('cart')} className=" cursor-pointer text-xl" />
        <div className=" w-[18px] h-[18px] rounded-full absolute bg-black -top-2 -right-2 text-white flex justify-center items-center text-center text-sm font-semibold">{cartItems.length}</div>
        </div>
        {nav ? <Close navController={handleNav} /> : <Hamburger navController={handleNav}  />}
        {currentUser?.email ? <button className="hover:bg-black outline outline-2 hover:text-white pt-1 pb-1 pl-4 pr-4 rounded text-center hidden sm:block text-red-600" onClick={handleLogout}>Logout</button> : <button className="hover:bg-black outline outline-2 hover:text-white pt-1 pb-1 pl-4 pr-4 rounded text-center hidden sm:block" onClick={() => navigate('login')}>Login</button>}
        </div>
    </nav>
  )
}
export default Navbar