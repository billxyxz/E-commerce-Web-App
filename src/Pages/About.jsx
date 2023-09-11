import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import aboutBg from './../Assets/images/about-bg.png'
import serviceBg from './../Assets/images/service-bg.jpg'
import { faTruckFast, faMedal, faClock, faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import Contact from '../Components/Contact'
import NewsLetter from '../Components/NewsLetter'

const About = () => {
  const [isIntersect, setIsIntersect] = useState()
  const ref = useRef()

  console.log(isIntersect);

  useEffect(() => {
    window.scrollTo(0,0)

  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersect(entry.isIntersecting)
    },
    )
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersect]);
  
  return (
    <section className="min-h-[100vh] overflow-hidden">
        <div className="h-[26vh] sm:h-[20vh] md:h-[34vh] md:max-h-60 flex items-center justify-center bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${aboutBg})`}}>
          <h2 className="text-5xl sm:text-[72px] font-semibold text-white font-['Noto'] mt-10">About Us</h2>
        </div>
        <div className='w-full p-12 pt-24 pb-4 md:pl-[150px] md:pr-[150px]'>
          <div className='flex flex-col md:justify-center items-center justify-start gap-8 md:flex-row'>
          <img src={serviceBg} alt="" className={`w-[350px] h-[350px] sm:mx-0 aspect-square border-l-[10px] border-b-[10px] transition-all duration-[1200ms] ${isIntersect ? 'translate-x-0' : '-translate-x-[50%] opacity-0'} border-black object-fill`} ref={ref} />
          <article className={`min-h-[350px] flex transition-all duration-[1200ms] ${isIntersect ? 'translate-x-0' : 'translate-x-[50%] opacity-0'} flex-col`} ref={ref}>
            <h3 className='font-["Noto"] text-2xl font-semibold mb-3'>Know About Our Business History</h3>
            <p className='font-["Rubik"] font-extralight max-h-52 overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora esse in itaque quaerat provident repudiandae, aliquam praesentium ea libero ipsam eveniet debitis excepturi aut voluptates corporis perferendis eligendi vitae facere odio, harum accusantium perspiciatis alias molestiae? Quos harum rem itaque doloremque odit reprehenderit suscipit, nisi hic mollitia necessitatibus, placeat id sapiente quae fuga repellendus! Veritatis repellendus nemo corrupti commodi quam.</p>
            <button className="bg-black text-white pt-2 pb-2 pl-4 pr-4 place-self-start mt-10 font-['Roboto']">Learn more</button>
          </article>
          </div>
          <h3 className='text-center font-["Noto"] text-3xl font-semibold mt-16 mb-10'>Our Features</h3>
          <div 
          className='flex flex-wrap justify-center sm:justify-center gap-8 mb-16'>
            <div 
            data-aos='zoom-in'
            data-aos-easing='linear'
            className='w-[220px] h-[220px] bg-white text-black shadow-xl hover:border-b-2 hover:border-black transition-all duration-150 ease-linear text-center p-8 rounded-lg'>
              <FontAwesomeIcon icon={faTruckFast} className='text-4xl mb-4' />
              <h4 className='text-xl mb-1 font-["Noto"]'>Free Delivery</h4>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolores.</p>
            </div>
            <div 
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-delay='100'
            className='w-[220px] h-[220px] bg-white text-black shadow-xl hover:border-b-2 hover:border-black transition-all duration-150 ease-linear text-center p-8 rounded-lg'>
              <FontAwesomeIcon icon={faMedal} className='text-4xl mb-4' />
              <h4 className='text-xl mb-1 font-["Noto"]'> Quality Service</h4>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolores.</p>
            </div>
            <div
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-delay='200'
            className='w-[220px] h-[220px] bg-white text-black shadow-xl hover:border-b-2 hover:border-black transition-all duration-150 ease-linear text-center p-8 rounded-lg'>
              <FontAwesomeIcon icon={faMoneyBill1Wave} className='text-4xl mb-4' />
              <h4 className='text-xl mb-1 font-["Noto"]'>Cash Back</h4>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolores.</p>
            </div>
            <div 
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-delay='300'
            className='w-[220px] h-[220px] bg-white text-black shadow-xl hover:border-b-2 hover:border-black transition-all duration-150 ease-linear text-center p-8 rounded-lg'>
              <FontAwesomeIcon icon={faClock} className='text-4xl mb-4' />
              <h4 className='text-xl mb-1 font-["Noto"]'>24/7 Support</h4>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolores.</p>
            </div>
          </div>
        </div>
        <NewsLetter />
        <Contact />
    </section>
  )
}
export default About