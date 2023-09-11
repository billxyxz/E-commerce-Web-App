import { Link, useLoaderData, useLocation } from "react-router-dom"
import { getProduct } from "../firebase"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../Features/Cart/cartSlice"

export async function detailLoader({params}){
    //loader function has access to a params object with a key of "id"(we set that in the Route oath in the App.jsx file)
   const product = await getProduct(params.id)
   return product    //Loader function but always return something to avoid error
} 

const ProductDetailPage = () => {
    const loaderData = useLoaderData()
    const location = useLocation();
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    const productDetailEl = 
        <div className="flex sm:flex-row flex-col">
            <div className="w-full sm:w-1/2 aspect-square p-8">
                <img src={loaderData.imgUrl} alt={loaderData.name} className="w-full h-full object-fill" />
            </div>
            <div className="w-full sm:w-1/2 h-auto p-8">
                <h2 className="text-lg font-medium font-['Noto'] mb-1">{loaderData.name}</h2>
                <p className=" text-base font-light mb-2">{loaderData.description}</p>
                <p className="mb-2">Gender: <span className="uppercase font-['Noto']">{loaderData.gender}</span></p>
                <p className="mb-12 font-semibold">$<span className="text-lg font-semibold">{loaderData.price}</span></p>
                <button className="bg-black text-white w-full p-2 uppercase font-medium" onClick={() => dispatch(addToCart(loaderData))}>Add To Cart</button>
            </div>
        </div>
  return (
    <section className="h-auto w-full p-12 pt-24 lg:pl-[150px] lg:pr-[150px]">
        <Link 
        className="hover:underline hover:underline-offset-4 hover:text-blue-700"
        to={location.state ? `../shop/${location.state.search}` : ".."}
        ><FontAwesomeIcon icon={faChevronLeft} className=" text-xs"></FontAwesomeIcon> <span className="font-lg font-medium">Back</span></Link>
        {productDetailEl}
    </section>
  )
}
export default ProductDetailPage