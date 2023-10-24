import { Await, Link, defer, useLoaderData, useNavigate } from "react-router-dom"
import heroImg from "./../Assets/images/hero-img.png"
import { Suspense, useEffect, } from "react";
import 'aos/dist/aos.css'
import { getProducts } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/Cart/cartSlice";
import NewsLetter from "../Components/NewsLetter";
import Banner from "../Components/Banner";

export async function homeLoader(){
  const data = getProducts();
  if(!data.ok){
    console.log("error");
  }

  return defer({products: data})
}

const Home = () => {
  const navigate = useNavigate()
  const loaderData = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    //To make the page scroll to the top when it's routed to view
    window.scrollTo(0,0)

  }, []);

  return (
    //Hero Section Container
    <section className="w-full relative justify-center min-h-[100vh] overflow-x-hidden">
       <div className="flex align-middle h-auto w-full bg-[#FFFEC4]  p-12 pt-24 lg:pl-[150px] lg:pr-[150px]">
        <div 
        data-aos='zoom-in'
        data-aos-easing='ease-in'
        data-aos-duration='600'
        className=" w-full md:w-1/2">
            <h3 className="sm:text-5xl text-[40px] font-bold mb-3 md:mb-4  font-['Noto'] md:leading-tight leading-snug">
                Make your Fashion<br/>Look more<br/>Attractive. 
            </h3>
            <p className="text-md lg:mb-7 mb-5 max-w-[530px] lg:leading-normal">At BillFashion, we believe that fashion is not just about clothes; it's a reflection of your personality and a way to express yourself. That's why we're here to help you find the perfect outfit for every occasion.</p>
            <button 
            onClick={() => navigate("shop")}
            className="bg-black text-white font-['Roboto'] py-[10px] px-5 md:py-2 md:px-4 rounded-sm"
            >Shop Now</button>
        </div>
        {/* Hero Image */}
        <div 
        className="h-full w-1/2 hidden md:flex"
        data-aos='zoom-in'
        data-aos-easing='ease-in'
        data-aos-duration='600'
        >
            <img src={heroImg} alt="hero image" className="h-full max-h-[500px] lg:w-[63%] md:w-[full] object-cover object-center transition-all duration-1000 md:ml-24 lg:ml-32" />
        </div>
       </div> 
       {/* Container for the featured products */}
      <div className="w-full h-auto lg:pl-[150px] lg:pr-[150px] px-12 pt-8 bg-[#F8F6F4]">
        {/* Heading div */}
        <div className="flex flex-col md:flex-row gap-5 justify-start items-start md:justify-between md:items-center">
          <div className="flex items-center gap-2">
            <div className=" w-7 h-[3px] bg-[#303019] mt-[3px]"></div>
            <h4 className=" text-xl font-['Roboto'] font-medium">Featured Products</h4>
          </div>
          <Link 
          to='shop'
          className="hover:underline-offset-2 hover:underline"><span className="text-gray-900 font-['Roboto']">See all products</span><FontAwesomeIcon
          className=" text-xs"
          icon={faChevronRight} 
          ></FontAwesomeIcon></Link> 
        </div>
       <Suspense fallback={<div className="w-full h-[70vh] flex items-center justify-center">
        <h2 className="text-2xl font-medium tracking-widest animate-pulse">Loading...</h2>
        </div>}>
      <Await resolve={loaderData.products}>
        {
          (loaderProducts) => {
            const topProducts = loaderProducts.filter(product => product.tag === 'top')
            return (
              <div className="flex sm:justify-start justify-center
              flex-wrap gap-12 w-full py-10">
                {
                  topProducts.map(product => {
                    return (
                        <div 
                        className="w-[250px] h-auto text-center" 
                        key={product.id}
                        data-aos='zoom-in'
                        data-aos-easing='ease-in'
                        data-aos-delay='50'
                        >
                          <Link 
                          to={`shop/${product.id}`}
                          >
                          <div className="w-full aspect-square">
                          <img src={product.imgUrl} alt={product.name} className="w-full h-full object-fill mb-3" />
                          <h2 className=" text-base font-normal font-['Roboto'] text-black">{product.name}</h2>
                          <h4 className="font-medium">$<span className="text-lg font-semibold">{product.price}</span></h4>
                          </div>
                          </Link>
                          <button 
                          className="mt-3 border-2 border-black p-3 py-2"
                          onClick={() => dispatch(addToCart(product))}
                          >Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> </button>
                        </div>
                     )
                  })
                }
              </div>
            )
          }
        }
      </Await>
    </Suspense>
    <Banner />
    <NewsLetter />
    </div>
    </section>
  )
}
export default Home