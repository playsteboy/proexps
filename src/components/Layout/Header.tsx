export default function Header({title , bgColor}) {
  return (
    <div className={`relative ${bgColor} transform skew-x-6 overflow-hidden w-1/2 h-28 flex items-center justify-center rounded-lg shadow-lg mt-10 text-[#F0F0F0]`}>
      <div className="transform -skew-x-6 p-10">
        <h1 className="text-5xl font-bold">
            {title}
        </h1>
      </div>
    </div>
  )
}