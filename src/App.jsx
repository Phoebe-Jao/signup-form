import Form from './components/Form'

function App() {

  return (
    <main className='bg-gradient-to-b from-custom-purple-500 to-custom-purple-700'>
      <div className="h-screen w-full max-w-[69.3rem] sm:px-6 mx-auto flex justify-between items-center gap-[1.9rem]">
        <div className='w-1/2'>
          <h1 className='text-custom-white text-[3.3rem] font-bold leading-none mb-8'>Learn to code by watching others</h1>
          <p className='text-custom-white text-[1.15rem] font-medium'>
            See how experienced developers solve problems in real-time. <br />
            Watching scripted tutorials in great, but understanding how developers think is invaluable.
          </p>
        </div>
        <div className='w-1/2'>
          <a href="#" className='w-full block text-custom-white text-center hover:bg-custom-purple-100 bg-custom-purple-300 transition-all duration-300 rounded-[0.5rem] mb-6 p-5'>
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </a>
          <Form />
        </div>
      </div>
    </main>
  )
}

export default App
