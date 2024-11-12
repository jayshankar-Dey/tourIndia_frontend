
import axios from "axios"


import Footer from "../components/Footer"

import Navbar from "../components/Nav_bar"

import Ture_Card from "../components/Ture_Card"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"



const Tour = () => {
 const base="https://tourindia-backend-tc99.onrender.com/api"
  const[ture,setTure]=useState([])
  const[state,setState]=useState("")
  const[place,setPlace]=useState("")
  
  
  ///getTurisim
  const getTure=async()=>{
   
    const res=await axios.get(`${base}/Ture?name=${place}&state=${state}`)
    try {
      if(res.data.success){
        setTure(res.data.data)
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error("Server Error")
    }
    
  }

  

  useEffect(() => {
     getTure()
  }, [place,state])

   
  
  
  

  return (
    <>
    <section id="Tour" className=" overflow-y-scroll bg-zinc-100">
      <Navbar/>
    
      <div className="p-4 flex border mt-3  mx-auto shadow overflow-x-scroll justify-center items-center gap-x-2 bg-white md:w-[50rem] sm:flex-row flex-col rounded">
        <input type="text" className=" w-full p-2 outline-none border h-14 rounded" placeholder="State" value={state} onChange={(e)=>setState(e.target.value)} />
        <input type="text" className=" w-full p-2 outline-none border h-14 rounded" placeholder="Place"value={place} onChange={(e)=>setPlace(e.target.value)}/>
        <button className="text-xl"><ion-icon name="search-outline"></ion-icon></button>
      </div>
    </section>
 
{/* ///ture part */}
<section id="Ture" className=" bg-zinc-100">
  
   <div className="flex justify-center flex-wrap text-zinc-600 p-3  items-center font-bold md:text-2xl text-xl"> 
      <h1> Tour</h1>
    </div>
   <div className="lg:w-[80%]  justify-center  flex flex-wrap gap-x-4 p-3 w-full mx-auto">
    {
      ture.length===0?<h1 className="text-xl text-red-400 animate-bounce">Please Enter Valide Search..</h1> : ture.map((t,i)=><Ture_Card key={i} ture={t}/>)
    }
    </div>
 
   </section>



 

   <Footer/>
    </>
  )
}

export default Tour
