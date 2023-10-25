import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'aos/dist/aos.css'
import { useDispatch } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom'
import { addToCart } from '../Features/Cart/cartSlice';
import { toast } from "react-toastify"



const ProductCard = ({product, dir}) => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")

    function handleCart(product){
        dispatch(addToCart(product));
        toast.success("Item added to cart!", {
            position: toast.POSITION.TOP_RIGHT
        })
      }

      const linkTo = dir ? `shop/${product.id}` : product.id
      const stateProp = dir ? false : {
        search: `?${searchParams.toString()}`,
        type: typeFilter
    }

  return (
    <div 
    className="w-[300px] md:w-[286px] h-auto text-center" 
    key={product.id}
    data-aos='zoom-in'
    data-aos-easing='ease-in'
    data-aos-delay='50'
    data-aos-duration="300"
    >
        <Link 
        to={linkTo}
        state={stateProp}
        >
            <div className="w-full aspect-square">
                <img src={product.imgUrl} alt={product.name} className="w-full h-full object-fill mb-3" />
                <h2 className=" text-base font-['Roboto'] text-black">{product.name}</h2>
                <h4 className="font-medium">$<span className="text-lg font-semibold">{product.price}</span></h4>
            </div>
        </Link>
        <button className="mt-3 border-2 border-black p-3 py-2" onClick={() => handleCart(product)}>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
    </div>
  )
}
export default ProductCard