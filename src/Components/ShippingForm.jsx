import { useNavigate } from "react-router-dom"
import { clearCart } from "../Features/Cart/cartSlice";
import { useDispatch } from "react-redux";

const ShippingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onShippingFormSubmit = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    navigate("/successful", {replace: true})
  }

  return (
    <div>
        <form
        autoComplete="on"
        className=" flex flex-col"
        onSubmit={onShippingFormSubmit}
        >
            <h4 className=" font-semibold font-['Raleway'] mt-5 mb-2 tracking-wide">Contact</h4>
            <div className="mb-2">
                <label 
                className="text-sm font-['Raleway'] tracking-wide"
                htmlFor="email">Email</label>
                <input 
                id="email"
                autoComplete="email"
                type="email" 
                placeholder="Email"
                className="block w-full bg-transparent border border-gray-300 rounded p-2 px-3 mt-1 outline-none"
                required
                 />
            </div>
            <div>
                <label 
                className="text-sm font-['Raleway'] tracking-wide"
                htmlFor="phone">Phone</label>
                <input 
                id="phone"
                autoComplete="on"
                type="text" 
                placeholder="Phone no."
                className="block w-full bg-transparent border border-gray-300 rounded p-2 px-3 mt-1 outline-none"
                required
                 />
            </div>
            <h4 className=" font-semibold font-['Raleway'] mt-5 mb-2 tracking-wide">Shipping Address</h4>
            <div className=" mb-2">
                <label 
                className=" font-['Raleway'] text-sm tracking-wide"
                htmlFor="region">Country/Region</label>
                <input type="text" name="region" id="region"
                autoComplete="country"
                placeholder="Country/Region"
                className="block w-full bg-transparent border border-gray-300 rounded p-2 px-3 mt-1 outline-none"
                required />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4 mb-2">
              <div className=" w-full">
                <label 
                className=" font-['Raleway'] text-sm tracking-wide"
                htmlFor="first-name">First name</label>
                <input type="text" name="first-name" id="first-name"
                autoComplete="given-name"
                placeholder="First name"
                className="block w-full bg-transparent border border-gray-300 rounded p-2 px-3 mt-1 outline-none"
                required />
              </div>
              <div className="w-full">
                <label 
                className=" font-['Raleway'] text-sm tracking-wide"
                htmlFor="last-name">Last name</label>
                <input type="text" name="region" id="last-name"
                autoComplete="family-name"
                placeholder="Last name"
                className="block w-full bg-transparent border border-gray-300 rounded p-2 px-3 mt-1 outline-none"
                required />
              </div>
            </div>
            <div className="w-full mb-2">
                <label 
                className=" font-['Raleway'] text-sm tracking-wide"
                htmlFor="address">Address</label>
                <input type="text" name="region" id="address"
                placeholder="Address"
                autoComplete="street-address"
                className="block w-full bg-transparent border border-gray-300 rounded p-2 px-3 mt-1 outline-none"
                required />
              </div>
            <div className="w-full mb-2">
                <label 
                className=" font-['Raleway'] text-sm tracking-wide"
                htmlFor="apartment">Apartment (optional)</label>
                <input type="text" name="apartment" id="apartment"
                autoComplete="on"
                placeholder="Apartment"
                className="block w-full bg-transparent border border-gray-300 rounded p-2 px-3 mt-1 outline-none" />
              </div>
              <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4 mb-2">
              <div className=" w-full">
                <label 
                className=" font-['Raleway'] text-sm tracking-wide"
                htmlFor="city">City</label>
                <input type="text" name="first-name" id="city"
                autoComplete="on"
                placeholder="City"
                className="block w-full bg-transparent border border-gray-300 rounded p-2 px-3 mt-1 outline-none"
                required />
              </div>
              <div className="w-full">
                <label 
                className=" font-['Raleway'] text-sm tracking-wide"
                htmlFor="state">State</label>
                <input type="text" name="state" id="state"
                autoComplete="family-name"
                placeholder="State"
                className="block w-full bg-transparent border border-gray-300 rounded p-2 px-3 mt-1 outline-none"
                required />
              </div>
              <div className="w-full">
                <label 
                className=" font-['Raleway'] text-sm tracking-wide"
                htmlFor="postal-code">Postal code</label>
                <input type="text" name="postal-code" id="postal-code"
                autoComplete="postal-code"
                placeholder="Postal code"
                className="block w-full bg-transparent border border-gray-300 rounded p-2 px-3 mt-1 outline-none"
                required />
              </div>
            </div>
            <button 
            className=" bg-gray-900 text-gray-50 p-[10px] px-[18px] md:p-2 md:px-4 rounded-sm mt-5 self-end font-['Roboto']">Continue to payment</button>
        </form>
    </div>
  )
}
export default ShippingForm