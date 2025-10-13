const Input = ({ type="text", placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} required className="w-full border-solid border-[1px] border-custom-purple-500 rounded pl-7 py-4 mb-5 font-medium" />
  )
}

export default Input;