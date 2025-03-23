import { CDN_URL } from "./utils/constants";

const RestaurantCard = ({ resData,loadingCard }) => {
    return (
        <div className="m-4 p-4 w-[280px] bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            {/* Restaurant Image */}
            <img 
    className="w-full h-40 object-cover rounded-lg" 
   alt="res-logo"
   src={`${CDN_URL}${resData?.imagedID}`}
/>

{/* <img className="rounded-lg"alt="res-logo"src={`${CDN_URL}${resData?.imagedID}`}/> */}
            {/* Restaurant Info */}
            <div className="mt-3">
                <h3 className="font-bold text-lg text-gray-800 truncate">{resData?.name}</h3>
                <p className="text-gray-600 text-sm truncate">{resData?.cuisines}</p>

                {/* Ratings & Cost */}
                <div className="flex justify-between items-center mt-2">
                    <span className={`text-white text-sm font-semibold px-2 py-1 rounded-md ${
                        resData?.avgRating >= 4 ? "bg-green-600" : "bg-yellow-500"
                    }`}>
                        ⭐ {resData?.avgRating}
                    </span>
                    <span className="text-gray-700 font-semibold">{resData?.costForTwo}</span>
                </div>

                {/* Delivery Time */}
                <p className="text-gray-600 text-sm mt-1">🚴 {resData?.deliveryTime} mins</p>
            </div>
        </div>
    );
};

export default RestaurantCard;
