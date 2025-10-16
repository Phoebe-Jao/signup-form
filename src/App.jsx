import Form from './components/Form'
import { motion } from 'motion/react';

function App() {

  return (
    <main className='font-display relative min-h-screen max-sm:h-full bg-custom-gray-500 overflow-hidden'>
      <div className="min-h-screen max-sm:h-full w-full max-w-[69.3rem] max-sm:max-w-[87%] sm:px-6 mx-auto flex justify-between items-center gap-[1.9rem] max-sm:gap-6 max-sm:flex-col max-sm:py-[5.7rem]">
        <div className='w-1/2 max-sm:w-full'>
          <h1 className='max-sm:max-w-[23rem] text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-white text-[3.2rem] max-sm:text-3xl max-sm:text-center max-sm:mx-auto font-bold leading-none max-sm:leading-9 mb-8 max-sm:mb-6'>
            Unlimited Entertainment, <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-b from-primary to-custom-purple-100'>One Subscription</span>
          </h1>
          <p className='max-sm:max-w-11/12 text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-white text-[1.15rem] max-sm:text-[1rem] text-justify max-sm:mx-auto font-medium text-shadow-sm'>
            Stream movies, shows, and exclusive originals anytime, anywhere. Join now and dive into a world of endless stories— no ads, cancel anytime.
          </p>
        </div>
        <div className='w-1/2 max-sm:w-full'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ width: '100%' }}
          >
            <a href="#" className='w-full block text-custom-gray-500 text-center bg-linear-120 from-secondary to-primary transition-all duration-500 rounded-[0.5rem] mb-6 p-5'>
              <strong>Try it free 7 days</strong> then <br className='max-sm:block min-[769px]:hidden' />PHP 159.00/month thereafter
            </a>
          </motion.div>
          <Form />
        </div>
      </div>
    </main>
  )
}

export default App
