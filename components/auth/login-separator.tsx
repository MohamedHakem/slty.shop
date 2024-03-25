export const LoginSeparator = () => {
  return (
    <div className="relative my-1">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border border-gray-300"></div>
        <div className="w-[30%]"></div>
        <div className="w-full border border-gray-300"></div>
      </div>
      <div className="relative flex justify-center text-md">
        <span className="bg-transparent px-2 font-normal text-gray-500">أو</span>
      </div>
    </div>
  )
}