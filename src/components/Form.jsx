import Input from "./Input";
import { motion } from 'motion/react';

const Form = () => {
  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    for(let [key, value] of formData.entries()) {
      console.log({key, value});
      
    }
    
    alert('Sign up successful!');
  }

  return (
    <form action="" onSubmit={handleFormSubmit} className="bg-custom-gray-700 flex flex-col justify-center items-center px-10 max-sm:px-6 py-10 max-sm:py-6 rounded-[0.8rem] shadow-lg shadow-custom-purple-700">
      <Input name="firstName" placeholder="First Name" />
      <Input name="lastName" placeholder="Last Name" />
      <Input type="email" name="email" placeholder="Email Address" />
      <Input type="password" name="password" placeholder="Password" />
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ width: '100%' }}
      >
        <button type="submit" className="w-full text-custom-gray-700 bg-primary font-bold tracking-wide uppercase rounded-[0.5rem] py-4 cursor-pointer hover:opacity-75 transition-all duration-500">Claim your free trial</button>
      </motion.div>
      <p className="text-[0.7rem] text-white tracking-wide pt-3 max-sm:pt-5 max-sm:text-center">By clicking the button, you are agreeing to <br className="max-sm:block min-[769px]:hidden" />our <a href="#" className="font-bold">Terms and Conditions</a></p>
    </form>
  )
}

export default Form;