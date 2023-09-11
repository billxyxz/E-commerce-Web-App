import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bannerImg from "../Assets/images/bannerImg.jpg"

const Banner = () => {
  return (
    <div className="mt-8 w-full flex flex-col md:flex-row rounded-full">
        <div className="w-full md:w-[45%] h-[280px] object-cover">
            <img src={bannerImg} alt="" className=" w-full h-full" />
        </div>
        <article className="w-full md:w-[55%] bg-gray-900  text-left text-gray-50 p-10">
            <p className=" uppercase text-gray-200">limited offer</p>
            <h5 className=" font-semibold text-4xl fo nt-['Roboto'] leading-tight mb-3">35% Off only this week and get special gift</h5>
            <button className=" flex items-center gap-2 bg-gray-50 text-gray-700 p-2 px-3 font-['Roboto'] rounded shadow-sm">Grab it now
                 <FontAwesomeIcon
                 icon={faArrowRight}
                 /></button>
        </article>
    </div>
  )
}
export default Banner