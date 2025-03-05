import React, { useState } from "react";
import { restaurantData } from "../constants/data";


const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-64 object-cover"
        />
        {restaurant.promotion && (
          <span className="absolute top-2 left-0 bg-orange-500 text-white px-4 py-1 text-sm font-bold uppercase shadow-md">
            ⭐ Promotion
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{restaurant.name}</h2>
            <span className="bg-green-500 text-white px-3 py-1 text-sm rounded-md">
              ⭐ {restaurant.rating}
            </span>
          </div>
          <p className="text-gray-600">{restaurant.cuisines.join(", ")}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500">{restaurant.deliveryTime}</p>
          <p className="text-green-500 font-bold">{restaurant.costForTwoMessage}</p>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
