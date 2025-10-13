import Form from './components/Form'

function App() {

  return (
    <main className='bg-gradient-to-b from-custom-purple-500 to-custom-purple-700'>
      <div className="h-screen max-sm:h-full w-full max-w-[69.3rem] max-sm:max-w-[87%] sm:px-6 mx-auto flex justify-between items-center gap-[1.9rem] max-sm:gap-6 max-sm:flex-col max-sm:py-[5.7rem]">
        <div className='w-1/2 max-sm:w-full'>
          <h1 className='max-sm:max-w-[23rem] text-custom-white text-[3.3rem] max-sm:text-3xl max-sm:text-center max-sm:mx-auto font-bold leading-none max-sm:leading-9 mb-8 max-sm:mb-6'>Learn to code by watching others</h1>
          <p className='max-sm:max-w-11/12 text-custom-white text-[1.15rem] max-sm:text-[1rem] max-sm:text-justify max-sm:mx-auto  font-medium'>
            See how experienced developers solve problems in real-time. <br className='min-[48.063rem]:block max-sm:hidden' />
            Watching scripted tutorials in great, but understanding how developers think is invaluable.
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
