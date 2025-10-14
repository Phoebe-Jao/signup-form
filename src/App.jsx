import Form from './components/Form'

function App() {

  return (
    <main className='relative min-h-screen max-sm:h-full bg-gradient-to-b from-custom-purple-500 to-custom-purple-700 overflow-hidden'>
      <img src="../public/images/bg-intro-desktop.png" alt="background overlay" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none min-sm:block max-sm:hidden" />
      <img src="../public/images/bg-intro-mobile.png" alt="background overlay" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none min-sm:hidden max-sm:block" />
      <div className="min-h-screen max-sm:h-full w-full max-w-[69.3rem] max-sm:max-w-[87%] sm:px-6 mx-auto flex justify-between items-center gap-[1.9rem] max-sm:gap-6 max-sm:flex-col max-sm:py-[5.7rem]">
        <div className='w-1/2 max-sm:w-full'>
          <h1 className='max-sm:max-w-[23rem] text-custom-white text-[3.2rem] max-sm:text-3xl max-sm:text-center max-sm:mx-auto font-bold leading-none max-sm:leading-9 mb-8 max-sm:mb-6'>Unlimited Entertainment, <br /><span className='text-custom-yellow'>One Subscription</span></h1>
          <p className='max-sm:max-w-11/12 text-custom-white text-[1.15rem] max-sm:text-[1rem] text-justify max-sm:mx-auto  font-medium'>
            Stream movies, shows, and exclusive originals anytime, anywhere. Join now and dive into a world of endless stories— no ads, cancel anytime.
          </p>
        </div>
        <div className='w-1/2 max-sm:w-full'>
          <a href="#" className='w-full block text-custom-white text-center hover:bg-custom-purple-100 bg-custom-purple-300 transition-all duration-500 rounded-[0.5rem] mb-6 p-5'>
            <strong>Try it free 7 days</strong> then <br className='max-sm:block min-[769px]:hidden' />$20/mo. thereafter
          </a>
          <Form />
        </div>
      </div>
    </main>
  )
}

export default App
