import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory.jsx";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restName, categoryList } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restName?.card?.card?.text}</h1>

      {categoryList?.map((eachCat, index) => (
        <RestaurantCategory
          key={index}
          category={eachCat?.card?.card}
          showItems={showIndex === index}
          setShowIndex={() => setShowIndex((prev) => (prev === index ? null : index))} // Toggle logic
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
