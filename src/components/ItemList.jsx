import React from 'react'
import { CDN_URL } from "./utils/constants";
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './utils/cartSlice';


const ItemList = ({items}) => {
    console.log("### items",items)
 
   
    console.log("### items", typeof items?.[0].card.info.price)
    const dispatch = useDispatch()
    const handleAddItem = (item) => {
      dispatch(addItem(item))
    
    }
  return (
    <div>
        {items?.map((item)=> (
        <div
        key={item?.card?.info?.id}
            className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'
        >
            <div>
            <div className='py-2'>
            <span>{item?.card?.info?.name}</span>
            <span>- ₹ {item?.card?.info?.price ?  item?.card?.info?.price/100 : item?.card?.info?.defaultPrice / 100 }</span>
            </div>
            <p className='text-xs'>{item?.card?.info?.description}</p>
        </div>
        <div className="w-3/12 p-4 relative">
  {/* Container for the image with fixed dimensions */}
  <div className="w-[156px] h-[144px] overflow-hidden rounded-lg mx-auto">
    <img 
      src={`${CDN_URL}${item?.card?.info?.imageId}`} 
      className="w-full h-full object-cover" 
    />
  </div>
  
  {/* Button positioned below the image */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
    <Button
      className="p-2 mx-5 rounded-lg bg-white shadow-lg text-green-500"
      label="Add"
      icon="pi pi-plus"
      iconPos="right"
      onClick={()=>{
        handleAddItem(item)
      }}
    />
  </div>
</div>


        </div>
        ))}
    </div>
  )
}

export default ItemList