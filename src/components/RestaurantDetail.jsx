import React from "react";
import { useParams } from "react-router-dom";
import { restaurantData } from "../constants/data"; // Adjust path if needed

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurantData.find((r) => r.id === parseInt(id));

  if (!restaurant) return <h2 className="text-center text-xl mt-10">Restaurant not found</h2>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
      <p className="text-gray-500">{restaurant.cuisines.join(", ")}</p>
      <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-64 object-cover my-4 rounded-lg" />

      {/* Veg Menu */}
      <h2 className="text-2xl font-semibold mt-6">Veg Menu</h2>
      <div className="grid grid-cols-2 gap-4">
        {restaurant.vegMenu.map((item, index) => (
          <div key={index} className="bg-white shadow p-4 rounded-lg">
            <img src={item.imageUrl} alt={item.name} className="w-full h-32 object-cover rounded" />
            <h3 className="font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
            <p className="text-green-500 font-bold mt-1">₹{item.price}</p>
          </div>
        ))}
      </div>

      {/* Non-Veg Menu */}
      <h2 className="text-2xl font-semibold mt-6">Non-Veg Menu</h2>
      <div className="grid grid-cols-2 gap-4">
        {restaurant.nonVegMenu.map((item, index) => (
          <div key={index} className="bg-white shadow p-4 rounded-lg">
            <img src={item.imageUrl} alt={item.name} className="w-full h-32 object-cover rounded" />
            <h3 className="font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
            <p className="text-green-500 font-bold mt-1">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
