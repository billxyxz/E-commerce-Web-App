import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Error = () => {
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0,0)
    }, []);

  return (
    <section className="h-screen w-full p-12 pt-24 lg:pl-[150px] lg:pr-[150px] flex flex-col justify-center items-center">
        <h3 className=" text-8xl font-semibold font-['Noto'] mb-2">404</h3>
        <p className="mb-8">Oops...The page you are looking was not found</p>
        <button className=" outline outline-2 py-1 px-4" onClick={() => navigate("/")}>Back to Home</button>
    </section>
  )
}
export default Error