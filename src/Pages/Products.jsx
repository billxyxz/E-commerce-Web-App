import { Suspense, useEffect, useRef } from "react";
import { useLoaderData, defer, Await, useSearchParams } from "react-router-dom";
import { getProducts } from "../firebase";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'aos/dist/aos.css'
import Skeleton from "../Components/Skeleton";
import ProductCard from "../Components/ProductCard";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



export const loader = async () => {
    const data = getProducts();
    if(!data.ok){
      console.log("error")
    }
    //for a better UX defer the data so the data now becomes a promise
    //defer on accepts plain objects
    return defer({products: data });
  }

const Products = () => {
    const searchRef = useRef()
    
    const loaderData = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type");


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
      searchRef.current.value = "";
    }

    const onSearchQueryChange = (key, value) => {
      setSearchParams(prevParams => {
        if(value === null){
          prevParams.delete(key)
        }else{
          prevParams.set(key, value)
        }
        return prevParams;
      })
    }

  return (
    <section className="min-h-screen w-full p-12 pt-24 lg:pl-[150px] lg:pr-[150px] flex flex-col items-center ">
      <ToastContainer className="top-20 max-w-[274px] mx-auto" />
      <nav className="self-start mb-5 flex flex-col gap-3">
        <div className="relative w-[270px] group">
        <input 
        ref={searchRef}
        onChange={(e) => onSearchQueryChange("type", e.target.value)}
        type="search" 
        name="searchQuery" 
        id="searchQuery" 
        placeholder="Search for items"
        className="outline-none border border-gray-600 rounded-sm p-2 px-3 pl-10 w-full"
        />
        <label htmlFor="searchQuery">
          <FontAwesomeIcon 
          icon={faMagnifyingGlass}
          className="absolute left-3 top-[50%] -translate-y-[50%] text-lg  text-gray-600"
          />
        </label>
        </div>
        <select 
        name="category" 
        id="category"
        defaultValue={null}
        onChange={(e) => handleFilterChange("type", e.target.value)}
        className="p-2 px-3 font-navlinks self-start"
        >
          <option value="">Select Category</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
    </nav>
    {/* Suspense for when the data is being fetched */}
    <Suspense fallback={<div className="w-full h-[70vh] flex justify-center flex-wrap gap-12 ">
      {
        Array.from({length: 7}, (_, i) => i + 1).map(idx => (
          <Skeleton className="w-[300px] md:w-[286px]" key={idx} />
        ))
      }
    </div>}>
    {/* the data from the loader(loaderData) is now a promise, it has to be resolved, set the resolve prop in the Await equal to the products key in the loaderData object */}
    <Await resolve={loaderData.products}>
      {
        (loaderProducts) => {
          const productsList = typeFilter ? loaderProducts.filter(product => product.gender == typeFilter || product.name.toLowerCase().includes(typeFilter.toLowerCase()) ) : loaderProducts
          return (
          <div className="flex justify-center
           flex-wrap gap-12 w-full">

             {productsList.map(product => {
              return (
                <ProductCard product={product} key={product.id} />
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