import React, { useState } from "react";
import ItemList from "./ItemList";
import Shimmer from "./Shimmer"; // Import Shimmer for loading effect
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!showItems) {
      setLoading(true);
      setTimeout(() => setLoading(false), 500);
    }
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg">
      {/* Clickable Header */}
      <div
        className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100 transition-all rounded-lg"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {category?.title} ({category?.itemCards?.length || 0})
        </span>

        {/* Expand/Collapse Icon */}
        <i className={`fas fa-chevron-${showItems ? "up" : "down"} text-blue-500 text-xl`} />
        {/* <FontAwesomeIcon icon={showItems ? faChevronUp : faChevronDown} className="text-blue-500 text-xl" /> */}
        {/* <i className="text-blue-500 text-xl before:content-['\f078'] before:font-awesome"></i> */}

      </div>


      {/* Show shimmer while loading */}
      {showItems && (loading ? <Shimmer /> : <ItemList items={category?.itemCards} />)}
    </div>
  );
};

export default RestaurantCategory;
