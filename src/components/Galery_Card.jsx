/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css"

const Galery_Card = ({galery}) => {
  console.log(galery)
    Aos.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <div className="col-span-2 row-span-2 shadow p-2 bg-white mt-1 mr-1">
   {galery?.image? <img   alt="Clothes hanging on a rack" className="w-96 h-full object-cover max-h-96 " src={galery?.image?.url}/>:<img alt="Clothes hanging on a rack" className="w-full h-full object-cover" src={galery?.image?.url}/>}
   </div>
  )
}

export default Galery_Card
