import { Suspense, useEffect } from "react";
import { useLoaderData, defer, Await, Link, useSearchParams } from "react-router-dom";
import { getProducts } from "../firebase";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/Cart/cartSlice";
import Aos from "aos";
import 'aos/dist/aos.css'



export async function loader(){
    const data = getProducts();
    if(!data.ok){
      console.log("error")
    }
    //for a better UX defer the data so the data now becomes a promise
    //defer on accepts plain objects
    return defer({products: data });
  }

const Products = () => {
    const dispatch = useDispatch()
    
    const loaderData = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type");

    function handleCart(product){
      dispatch(addToCart(product));
    }


    useEffect(() => {
      window.scrollTo(0,0);

    }, []);
    
    function handleFilterChange(key, value){
      setSearchParams(prevParams => {
        if(value === null){
          prevParams.delete(key)
        }else{
          prevParams.set(key, value)
        }
        return prevParams;
      })
    //   setSearchParams(prevParams => {
    //     if (value === null) {
    //         prevParams.delete(key)
    //     } else {
    //         prevParams.set(key, value)
    //     }
    //     return prevParams
    // })
    }

  return (
    <section className="min-h-screen w-full p-12 pt-24 lg:pl-[150px] lg:pr-[150px] flex flex-col items-center ">
      <nav className="self-start mb-5 flex gap-6">
      <ul className="flex">
        <button
        onClick={() => handleFilterChange("type", null)}
        className={`p-2 hover:underline ${typeFilter === null && "underline underline-offset-2"} hover:underline-offset-2`}
        >All</button>
        <button 
        onClick={() => handleFilterChange("type", "male")}
        className={`p-2 hover:underline ${typeFilter === "male" && "underline underline-offset-2"} hover:underline-offset-2`}>Men</button>
        <button 
        onClick={() => handleFilterChange("type", "female")}
        className={`p-2 hover:underline ${typeFilter === "female" && "underline underline-offset-2"} hover:underline-offset-2`}>Women</button>
      </ul>
    </nav>
    {/* Suspense for when the data is being fetched */}
    <Suspense fallback={<div className="w-full h-[70vh] flex items-center justify-center">
      <h2 className="text-2xl font-medium tracking-widest animate-pulse">Loading...</h2>
    </div>}>
    {/* the data from the loader(loaderData) is now a promise, it has to be resolved, set the resolve prop in the Await equal to the products key in the loaderData object */}
    <Await resolve={loaderData.products}>
      {
        (loaderProducts) => {
          const productsList = typeFilter ? loaderProducts.filter(product => product.gender == typeFilter || product.gender == "unisex") : loaderProducts
          return (
          <div className="flex justify-start
           flex-wrap gap-12 w-full">

             {productsList.map(product => {
              return (
                  <div 
                  className="w-[300px] h-auto text-center" 
                  key={product.id}
                  data-aos='zoom-in'
                  data-aos-easing='ease-in'
                  data-aos-delay='50'
                  >
                    <Link 
                    to={product.id}
                    state={{
                      search: `?${searchParams.toString()}`,
                      type: typeFilter
                    }}
                    >
                    <div className="w-full aspect-square">
                    <img src={product.imgUrl} alt={product.name} className="w-full h-full object-fill mb-3" />
                    <h2 className=" text-base font-['Roboto'] text-black">{product.name}</h2>
                    <h4 className="font-medium">$<span className="text-lg font-semibold">{product.price}</span></h4>
                    </div>
                    </Link>
                    <button className="mt-3 border-2 border-black p-3 py-2" onClick={() => handleCart(product)}>Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> </button>
                  </div>
               )
            })}
          </div>
          )
        }
      }
    </Await>
    </Suspense>
    </section>
  )
}
export default Products