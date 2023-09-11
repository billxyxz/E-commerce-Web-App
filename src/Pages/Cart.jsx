import { useDispatch, useSelector } from "react-redux"
import { clearCart, decrease, increase, removeItem } from "../Features/Cart/cartSlice"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Cart = () => {
  //For Modal pop-up
  const [openModal, setOpenModal] = useState(false)

  //Getting the required information from the redux cartSlice in the Features/Cart Folder
  const cartItems = useSelector(state => state.cart.cartItems)
  const cartItemsAmt = useSelector(state => state.cart.cartItemsAmt)
  //To dispatch an action
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function controlModal(){
    setOpenModal(true)
  }

  function handleClear(){
    //to dispatch the clear cart functionality setting state.cartItems = [];(empty)
    dispatch(clearCart());
    setOpenModal(false);
  }

    useEffect(() => {
      window.scrollTo(0,0)
    }, []);
    
    //Display for each cartItem in the large Screen, I used a table format display
    const cartItemsList = cartItems.map(item => {
      return(
        <tr key={item.id}>
          <td className="flex gap-[60px] pb-3 pr-7">
            <div className="w-[100px] min-w-[80px] h-[90px]">
              <img src={item.imgUrl} alt={item.name} className=" w-full h-full object-cover shrink-0" />
            </div>
            <div>
              <h4 className="font-medium text-lg">{item.name}</h4>
              <p className=" max-w-[400px] text-sm">{item.description}</p>
            </div>
          </td>
          <td className="pb-3 pr-7">
            <div className="flex">
              <button className=" w-8 flex items-center justify-center aspect-square border-2" onClick={() => dispatch(increase(item))}>+</button>
              <div className=" w-8 flex items-center justify-center aspect-square border-2">{item.itemQty}</div>
              <button className=" w-8 flex items-center justify-center aspect-square border-2" onClick={() => dispatch(decrease(item))}>-</button>
            </div>
          </td>
          <td className="pb-3 pr-7">
            <button onClick={() => dispatch(removeItem(item))} className=" text-red-500">Remove</button>
          </td>
          <td className="pb-3">
            <h5 className="font-semibold">${item.price}</h5>
          </td>
        </tr>
      )
    })

    //Display of each items in the cart, I used a flexBox for this
    const FlexCartListItems = cartItems.map(item => {
      return (
        <div className="flex w-full mb-8" key={item.id}>
          <div className="w-[80px] min-w-[70px] h-[80px] mr-8">
            <img src={item.imgUrl} alt={item.name} className="w-full object-cover shrink-0" />
          </div>
          <div className="w-full">
            <h4 className="font-semibold mb-1">{item.name}</h4>
            <div className="flex mb-1">
              <button className=" w-8 flex items-center justify-center aspect-square border-2 text-xl" onClick={() => dispatch(increase(item))}>+</button>
              <div className=" w-8 flex items-center justify-center aspect-square border-2">{item.itemQty}</div>
              <button className=" w-8 flex items-center justify-center aspect-square border-2 text-2xl" onClick={() => dispatch(decrease(item))}>-</button>
            </div>
            <div className="flex justify-between items-center w-full">
            <h5 className="font-semibold">$<span className="text-lg font-semibold">{item.price}</span></h5>
            <button className="text-red-500 text-sm" onClick={() => dispatch(removeItem(item))}>Remove</button>
            </div>
          </div>
        </div>
      )
    })
    //End;

  return (
    <>
    {/* Cart Container */}
    <section className="p-12 pt-0 min-h-screen lg:pl-[150px] lg:pr-[150px] flex flex-col">
      {/* Dynamic display for whether or not there is an item in cart */}
      {cartItems.length > 0 ? <div className="flex justify-between w-full items-center mb-9"><h4 className="text-xl font-['Noto'] font-semibold">You have {cartItems.length} item{cartItems.length > 1 ? "s" : ""} in cart</h4><button className=" text-red-400 hover:underline hover:underline-offset-2" onClick={() => controlModal()}>Clear Cart</button></div>  : <h4 className="text-xl font-['Noto'] font-semibold mb-6">No Items in Cart.</h4>} {/*END */}

      <div className="flex flex-col w-full h-auto">
        {cartItems.length > 0 && 
        <>
        {/* Display for when there is an item(s) in cart */}
         <div className="w-full hidden md:block">
          {/* The table heading display for large screen sizes */}
          <table className="w-full">
          <thead>
            <tr className=" font-normal">
              <td className=" lg:pl-40">Description</td>
              <td className="pb-5">Quantity</td>
              <td className="pb-5 ">Remove Item</td>
              <td className="pb-5">Price</td>
            </tr>
          </thead>
          <tbody>
            {/* Display of the cart items in the table for body for large screen size */}
            {cartItemsList}
          </tbody>
        </table>
        <div className="w-full flex justify-between">
        <div></div>
        <div className="flex lg:mr-[22px]">
          <p className="mr-2">Total: </p>
          <h4 className="font-semibold">${cartItemsAmt}</h4>
        </div>
      </div>
      </div>{/* END */}

      {/* Display(flexbox style) of the items in the cart for medium to mobile screen sizes */}
        <div className="md:hidden w-full max-w-sm">
          {FlexCartListItems}
          <div className="w-full flex justify-between">
            <div></div>
            <div className="flex">
              <p className="mr-2">Total: </p>
              <h4 className="font-semibold">${cartItemsAmt}</h4>
            </div>
          </div>
        </div>
        </>
        }
      </div>
      {cartItems.length > 0 && <button 
      onClick={() => navigate("order-summary")}
      className=" self-end bg-gray-900 text-gray-50 p-2 px-3 mt-7 rounded font-['Roboto']">Proceed to checkout</button>}
    </section>
    {/* Setting up a modal functionality for when a user clicks the 'CLEAR CART' button */}
    <div className={`absolute w-full h-full flex justify-center items-center bg-black bg-opacity-70 ${openModal ? "block" : "hidden"} top-0 left-0 z-20`}>
      <div className="w-auto h-auto bg-white text-black text-center relative py-10 px-10 rounded">
        <h4 className=" mb-4 font-['Rubik']">Sure you want to clear all cart items?</h4>
        <div className="w-full flex justify-center gap-4">
          <button className="border-2 border-red-600 px-7 py-2 rounded-full text-red-600 font-semibold"
          // dispatching the function that clears the cart which I wrote above 'handleCart' Function
           onClick={() => handleClear()}>Clear</button>
          <button className="border-2 border-black px-7 py-2 rounded-full font-semibold" onClick={() => setOpenModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
    </>
  )
}
export default Cart