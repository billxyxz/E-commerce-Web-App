import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, removeItem } from "../Features/Cart/cartSlice"
import { useEffect } from "react"

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const cartItemsAmt = useSelector(state => state.cart.cartItemsAmt)
    const dispatch = useDispatch()

    useEffect(() => {
      window.scrollTo(0,0)
    }, []);
    
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

  return (
    <section className="w-full min-h-screen p-12 pt-24 md:pl-[150px] md:pr-[150px]">
      {cartItems.length > 0 ? <h4 className="text-xl font-['Noto'] font-semibold mb-9">You have {cartItems.length} item{cartItems.length > 1 ? "s" : ""} in cart</h4> : <h4 className="text-xl font-['Noto'] font-semibold mb-6">No Items in Cart.</h4>}
      <div className="flex flex-col w-full h-auto">
        {cartItems.length > 0 && 
        <>
        <div className="w-full hidden lg:block">
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
            {cartItemsList}
          </tbody>
        </table>
        <div className="w-full flex justify-between">
        <div></div>
        <div className="flex lg:mr-8">
          <p className="mr-2">Total: </p>
          <h4 className="font-semibold">${cartItemsAmt}</h4>
        </div>
      </div>
      </div>
        <div className="lg:hidden w-full max-w-sm">
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
    </section>
  )
}
export default Cart