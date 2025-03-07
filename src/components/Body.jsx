import React, { useState } from "react";
import { restaurantData } from "../constants/data";
import RestaurantCard from "./RestaurantCard";

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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-4">No restaurants found.</p>
                )}
            </div>

        </div>
    );
};

export default Body;