import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Successful = () => {

    useEffect(() => {
      window.scrollTo(0,0)
    }, []);
  
    return (
      <section className="flex flex-col items-center justify-center w-full h-screen text-center tracking-wider">
        <div 
        data-aos="zoom-out"
        >
        <FontAwesomeIcon 
          icon={faCircleCheck}
          className=" text-5xl mb-3 text-green-500"
          />
        </div>
          <article className="font-['Raleway'] mb-5">
            <div className=" mb-4">
              <h5 className="font-medium text-lg">Payment Successful</h5>
              <p className=" text-sm">Check your email for the receipt</p>
            </div>
            <p>For further inquiries, please email <span><a className="cursor-pointer underline-offset-2 underline text-sm" >billfashion@gmail.com</a></span></p>
          </article>
          <Link to="/" className="rounded-sm font-['Roboto'] bg-gray-900 text-gray-50 p-2 px-5">Continue To Home</Link>
      </section>
    )
  }
  export default Successful