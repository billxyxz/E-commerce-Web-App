const NewsLetter = () => {
  return (
    <div 
    className=' flex flex-col items-center justify-center py-16 bg-transparent text-gray-900'>
      <div
      data-aos='zoom-in'
      data-aos-easing='linear'
      data-aos-delay='100'
      className='flex flex-col items-center justify-center'
    >
        <h4 className='text-center font-["Roboto"] text-3xl font-semibold mb-2'>Join Our Newsletter</h4>
        <p className='text-center font-["Heebo"] mb-4'>Subscribe to our newsletter to recieve exclusive offers, latest news and updates </p>
        <div 
        className='w-full text-center flex flex-col justify-center items-center'>
          <input type="email" name="email" id="email" placeholder='Email address' className='border-2 border-gray-900 h-10 w-[300px] p-3 rounded mb-3 mx-auto' />
          <button className='bg-black text-white py-[10px] px-6 md:py-2 md:px-5 rounded font-["Roboto"]'>Subscribe</button>
        </div>
      </div>
     </div>
  )
}
export default NewsLetter