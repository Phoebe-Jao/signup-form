import Input from "./Input";

const Form = () => {
  function handleFormSubmit() {
    alert('Sign up successful!');
  }

  return (
    <form action="" onSubmit={handleFormSubmit} className="bg-custom-white flex flex-col justify-center items-center px-10 max-sm:px-6 py-10 max-sm:py-6 rounded-[0.8rem]">
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input type="email" placeholder="Email Address" />
      <Input type="password" placeholder="Password" />
      <button type="submit" className="w-full text-custom-purple-700 bg-custom-yellow font-bold tracking-wide uppercase rounded-[0.5rem] py-4 cursor-pointer hover:opacity-75 transition-all duration-500">Claim your free trial</button>
      <p className="text-[0.7rem] text-custom-purple-700 tracking-wide pt-3 max-sm:pt-5 max-sm:text-center">By clicking the button, you are agreeing to <br className="max-sm:block min-[769px]:hidden" />our <a href="#" className="font-bold">Terms and Conditions</a></p>
    </form>
  )
}

export default Form;