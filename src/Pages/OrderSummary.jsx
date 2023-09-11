import { useSelector } from "react-redux"
import ShippingForm from "../Components/ShippingForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApplePay, faCcPaypal, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

const OrderSummary = () => {
    const { cartItems, cartItemsAmt} = useSelector(state => state.cart);

    const VAT = Number(0.08 * cartItemsAmt).toFixed(2);
    const TOTAL = Number(Number(VAT) + Number(cartItemsAmt)).toFixed(2);

    useEffect(() => {
        window.scrollTo(0,0)
      }, []);

    const cartItem = cartItems.map(item => {
        return (
            <div className=" flex gap-3 w-full">
                <img 
                src={item.imgUrl} 
                alt="item image"
                className=" w-[80px] aspect-square"
                 />
                 <article className="w-full">
                    <h4 className=" font-['Raleway'] font-medium  tracking-wide mb-1">{item.name}</h4>
                    <article className=" flex  justify-between">
                      <p className="mb-1 font-['Raleway'] text-sm">x<span className=" text-lg">{item.itemQty}</span></p>
                      <p className="font-['Roboto'] text-right">${item.price}
                      <span className="block text-sm font-light">${item.unitPrice} each</span>
                      </p>
                    </article>
                 </article>
            </div>
        )
    })

  return (
    <section className="p-12  lg:pl-[150px] lg:pr-[150px] flex flex-col-reverse gap-12 md:gap-24 md:flex-row h-full bg-gray-50">
        <div 
        data-aos="zoom-in"
        className="w-full md:w-4/7 lg:w-3/5 h-full">
            <p className="text-center mb-4 tracking-wider">Express Checkout</p>
            <div className=" flex justify-center gap-3 mb-5">
                <button className=" p-2 px-5 bg-yellow-400 rounded flex justify-center items center">
                  <FontAwesomeIcon 
                  icon={faPaypal}
                  className=" h-7 mr-2"
                /> 
                <p className=" text-xl font-bold italic">Pay<span className=" text-blue-600">Pal</span></p>
                </button>
                <button className="p-1 px-4 bg-gray-900 text-gray-50 rounded flex justify-center items center"><FontAwesomeIcon 
                icon={faApplePay}
                className=" w-24 h-10"
                /></button>
            </div>
            <div className=" flex justify-center items-center gap-3 mb-7">
                <div className=" w-full h-[2px] bg-gray-300"></div>
                <span className=" font-['Inter']">OR</span>
                <div className= "w-full h-[2px] bg-gray-300"></div>
            </div>
            <ShippingForm />
        </div>
        <div 
        data-aos="zoom-in"
        className="w-full md:w-3/7 lg:w-2/5 h-full ">
            <div className=" mb-10">{/*flex for the cartItems  */}
              {cartItem}
            </div>
            <div className="w-full flex gap-3 mb-5">
                <input 
                type="text"
                placeholder="Discound Code"
                className=" bg-gray-200 p-3 rounded w-full outline-none border-none font-['Roboto']"
                 />
                <button className=" bg-gray-900 text-gray-50 p-3 px-5 rounded font-['Roboto']">Apply</button>
            </div>
            <article className="flex flex-col gap-1 mb-5">
                <div className=" flex justify-between ">
                    <span>Subtotal</span>
                    <span className=" font-medium font-['Raleway']">${cartItemsAmt}</span>
                </div>
                <div className=" flex justify-between">
                    <span>Shipping</span>
                    <span className=" font-medium font-['Raleway']">$0.00</span>
                </div>
                <div className=" flex justify-between">
                    <span>VAT(8%)</span>
                    <span className=" font-medium font-['Raleway']">${VAT}</span>
                </div>
            </article>
            <article className=" flex justify-between font-['Raleway'] font-semibold">{/*Total */}
              <span>Total</span>
              <span>${TOTAL}</span>
            </article>
        </div>
    </section>
  )
}
export default OrderSummary