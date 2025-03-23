import RestaurantCard from "./Restaurant";
import {useContext, useEffect, useState} from "react"
import Shimmer from "./Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "./utils/UserContext";

const Body = () => {
    const [listOfRest,setListOfRest]=useState([]);
    const [searchValue,setSearchValue] = useState([])
    const [originalList,setOriginalList]=useState([])
    const [loadingCard, setLoadingCard] = useState(false);

    const navigate = useNavigate()

    const userData = useContext(UserContext)
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async() => {
        // const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.440513&lng=78.36466759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        // const data = await fetch('https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.440513&lng=78.36466759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.440513&lng=78.36466759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        
        const convertedData = await data?.json()

        console.log("convertedData",convertedData)
        // console.log("eee",convertedData?.data?.cards?.[4])
        // console.log("deee",convertedData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        if(convertedData?.data?.cards && convertedData?.data?.cards?.length>0){
        let modifiedData = convertedData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((resta)=>{
            return {
                name:resta?.info?.name,
                cuisines:resta?.info?.cuisines?.join(","),
                imagedID:resta?.info?.cloudinaryImageId,
                avgRating:resta?.info?.avgRating,
                costForTwo:resta?.info?.costForTwo,
                deliveryTime:resta?.info?.sla?.deliveryTime,
                id:resta?.info?.id
            }
        })
        setListOfRest(modifiedData)
        setOriginalList(modifiedData)
    }else{
        setListOfRest([])
        setOriginalList([])
    }
    }
    console.log("original list",originalList)
    const handleOnChange = (e) => {
        let currentValue = e.target.value;
        console.log("currentValue",currentValue)
        let modifiedVal = currentValue.toLowerCase().trim()
        setSearchValue(modifiedVal)
        if(!modifiedVal){
            setListOfRest(originalList)
            return;
        }
        const filteredlist = listOfRest?.filter((each)=> {
            return(
                each?.name?.toLowerCase()?.includes(modifiedVal) ||
                each?.cuisines?.toLowerCase()?.includes(modifiedVal) || 
                String(each?.avgRating)?.toLowerCase()?.includes(modifiedVal) || 
                each?.costForTwo?.toLowerCase()?.includes(modifiedVal) || 
                String(each?.deliveryTime)?.toLowerCase()?.includes(modifiedVal)
            )
        })
        console.log("##filteres",filteredlist)
        setListOfRest(filteredlist)
    }

    const handleTopRated = () => {
        let filteredRestr = originalList?.filter(
          (eachRest) => Number(eachRest?.avgRating) > 4
        );
        setListOfRest(filteredRestr);
      };
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) return (
        <h1>Looks like you're offline!! Please Check your internet connection;</h1>
    )

    const handleCardClick = (id) => {
        setLoadingCard(true);
        setTimeout(() => {
          navigate(`/restaurants/${id}`);
        }, 800); // Simulate loading before navigation
      };
    return listOfRest?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body p-4">
          <div className="flex justify-center mb-6">
            <div className="search flex gap-4">
              <input
                className="border border-gray-300 rounded-lg px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                type="text"
                placeholder="Search for restaurants..."
                value={searchValue}
                onChange={handleOnChange}
              />
              <button
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
                onClick={handleTopRated}
              >
                Top Rated Restaurants
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
        {/* {loadingCard ? (
          <Shimmer />
        ) : ( */}
         { listOfRest?.map((resObj) => (
            <div key={resObj?.id} onClick={() => handleCardClick(resObj?.id)} className="cursor-pointer">
              <RestaurantCard resData={resObj} loadingCard={loadingCard} />
            </div>
          ))}
        {/* )} */}
      </div>
         
        </div>
      );
    

}

export default Body;

