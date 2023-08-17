import { useNavigate } from "react-router-dom"
import heroImg from "./../Assets/images/hero-img.png"
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  console.log(import.meta.env.VITE_FIREBASE_API_KEY)

  return (
    <section className="w-full relative justify-center min-h-[100vh]">
       <div className="flex align-middle h-[85vh] w-full bg-[#FFFEC4]  p-12 pt-24 md:pl-[150px] md:pr-[150px]">
        <div className="w-full md:w-1/2">
            <h3 className="sm:text-5xl text-4xl font-bold mb-4 font-['Noto']">
                Make your Fashion<br/>Look more<br/>Attractive. 
            </h3>
            <p className="text-md lg:mb-12 mb-8 max-w-[530px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam architecto sint labore recusandae inventore voluptatem id facere delectus quasi perspiciatis consequatur, natus placeat, cum vel animi distinctio. Nam, dolore voluptatum?</p>
            <button 
            onClick={() => navigate("shop")}
            className="bg-black text-white pt-2 pb-2 pl-4 pr-4"
            >Shop Now</button>
        </div>
        <div className="h-full w-1/2 hidden md:flex">
            <img src={heroImg} alt="hero image" className="h-full max-h-[500px] lg:w-[60%] md:w-[full] object-cover object-center ml-32" />
        </div>
       </div> 
    </section>
  )
}
export default Home