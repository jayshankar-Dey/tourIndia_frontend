

const Loading = () => {
  return (
    <>
 <div className="flex items-center justify-center min-h-screen bg-[#cfcece35]">
  <div className="flex flex-col items-center">
   <div className="w-20 h-20 border-4 border-blue-500 border-dashed rounded-full animate-spin mb-4">
   </div>
   <p className="text-gray-700 text-lg">
    Loading, please wait...
   </p>
  </div>
 </div>
    </>
  )
}

export default Loading
