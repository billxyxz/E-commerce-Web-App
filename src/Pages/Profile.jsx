import { useAuthContext } from "../Context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { clearCart } from "../Features/Cart/cartSlice"

const Profile = () => {
  const { currentUser, logout } = useAuthContext()
  const dispatch = useDispatch();
  const navigate = useNavigate()

  async function handleLogout(){
    try{
      await logout()
      dispatch(clearCart());
      navigate('/')
    }catch(err){
      console.log(err.message)
    }
  }

  
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <section className="w-full h-[100vh] p-12 pt-24 lg:pl-[150px] lg:pr-[150px]">
      <div className="w-full mx-auto max-w-[400px] h-auto">
        <div className="flex p-5 bg-slate-300 rounded mb-1">
          <div className=" w-[76px] min-w-[76px] aspect-square border-4 border-[#FFFEC4] rounded-full cursor-pointer mr-4">{/* Image */}
            <img src="" alt="" />
          </div>
          <div>{/* Text */}
            <h5 className="font-semibold mb-1">{currentUser.email}</h5>
            <p className="text-sm">Logged in: <span className="font-semibold">{currentUser.metadata.lastSignInTime}</span></p>
          </div>
        </div>
        <div className="w-full mx-auto max-w-[400px] h-auto px-6 bg-slate-200 rounded">
          <ul className="py-6">
            <li className="mb-2 font-semibold cursor-pointer">Profile</li>
            <li className="mb-2 font-semibold cursor-pointer">My Orders</li>
            <li className="mb-2 font-semibold cursor-pointer">Whislist</li>
            <li className="mb-2 font-semibold cursor-pointer">Notifications</li>
            <li className="font-semibold cursor-pointer">Payment Option</li>
          </ul>
          <div className=" border-t-2 border-gray-400 py-3">
            <Link className="font-semibold text-gray-400 text-lg hover:text-red-400" onClick={handleLogout}>Log out</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Profile