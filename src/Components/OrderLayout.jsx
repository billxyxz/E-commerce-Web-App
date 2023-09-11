import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"

const OrderLayout = () => {
  const {cartItems} = useSelector(state => state.cart);
    function handleActive({isActive}){
        return {
          fontWeight: isActive ? "600" : "",
        } 
      }

  return (
    <section className=" w-full pt-24">
        <nav className=" mb-6 ml-12 lg:ml-[150px]">
            <ul className=" flex gap-2">
                <NavLink
                style={handleActive}
                >Cart</NavLink>
                <span><FontAwesomeIcon 
                icon={faChevronRight}
                className=" text-xs text-gray-700"
                 /></span>
                <NavLink
                to={cartItems.length > 0 ? "order-summary" : null}
                style={cartItems.length > 0 ? handleActive : {fontWeight: "normal"}}
                >Order summary</NavLink>
                <span><FontAwesomeIcon 
                icon={faChevronRight}
                className=" text-xs text-gray-700"
                 /></span>
                <NavLink
                to={cartItems.length > 0 ? "order-summary" : null}
                style={cartItems.length > 0 ? handleActive : {fontWeight: "normal"}}
                >Payment</NavLink>
            </ul>
        </nav>
        <Outlet />
    </section>
  )
}
export default OrderLayout;