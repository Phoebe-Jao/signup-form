const Input = ({ type="text", placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} required className="w-full border-solid border-[1px] border-custom-purple-500 rounded pl-7 max-sm:pl-5 py-4 mb-5 max-sm:mb-[0.9rem] font-medium outline-none" />
  )
}

export default Input;