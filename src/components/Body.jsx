import React, { useState } from "react";
import { restaurantData } from "../constants/data";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [showTopRestaurants, setShowTopRestaurants] = useState(false);

    // Filter restaurants based on search input and top restaurant filter
    const filteredRestaurants = restaurantData.filter((restaurant) => {
        const matchesSearch = restaurant.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesTopFilter = showTopRestaurants ? restaurant.rating > 4 : true;
        return matchesSearch && matchesTopFilter;
    });

    return (

        <div className="max-w-screen-xl mx-auto px-4 py-8 cursor-pointer">

            <h1 className="text-3xl font-bold mb-6 text-center">Restaurants</h1>

            {/* Search and Top Restaurant Button */}
            <div className="flex justify-center items-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search restaurants..."
                    className="border border-gray-300 px-4 py-2 rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600 transition"
                    onClick={() => setShowTopRestaurants(!showTopRestaurants)}
                >
                    {showTopRestaurants ? "Show All" : "Top Restaurants"}
                </button>
            </div>



            {/* Restaurant Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                        <div key={restaurant.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl">
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
                            <div className="p-4 flex flex-col justify-between ">
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
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-4">No restaurants found.</p>
                )}
            </div>
        </div>
    );
};

export default Body;
