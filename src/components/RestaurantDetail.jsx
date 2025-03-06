import { useParams } from "react-router-dom";
import { useState } from "react";
import { restaurantData } from "../constants/data";

const RestaurantDetail = () => {
    const { id } = useParams();
    const restaurant = restaurantData.find((res) => res.id === parseInt(id));

    if (!restaurant) {
        return <h2 className="text-center text-red-500 mt-10">Restaurant Not Found!</h2>;
    }

    // Define all menu categories dynamically
    const menuCategories = [
        { title: "Veg", items: restaurant?.vegMenu },
        { title: "Non-Veg", items: restaurant?.nonVegMenu },
        { title: "Drinks", items: restaurant?.drinks },
        { title: "Speciality", items: restaurant?.speciality },
    ];

    // State to track the expanded category
    const [expandedCategory, setExpandedCategory] = useState(null);

    const toggleCategory = (categoryTitle) => {
        setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Restaurant Header */}
            <img src={restaurant?.imageUrl} alt={restaurant?.name} className="w-full h-72 object-cover rounded-lg shadow-md" />
            <h1 className="text-3xl font-bold mt-4">{restaurant?.name}</h1>
            <p className="text-gray-600">{restaurant?.cuisines.join(", ")}</p>
            <p className="text-green-500 font-bold mt-2">{restaurant?.costForTwoMessage}</p>
            <p className="text-gray-500 mt-2">⏳ {restaurant?.deliveryTime}</p>

            {/* Menu Section */}
            {menuCategories?.map((category, index) => (
                category?.items?.length > 0 && (
                    <div key={index} className="mt-8">
                        {/* Clickable Category Title */}
                        <h2 
                            className="text-2xl font-semibold mb-4 cursor-pointer flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md"
                            onClick={() => toggleCategory(category.title)}
                        >
                            {category?.title}
                            <span className="text-xl">{expandedCategory === category.title ? "🔼" : "🔽"}</span>
                        </h2>

                        {/* Items List (Visible only when expanded) */}
                        {expandedCategory === category.title && (
                            <div className="flex flex-col gap-6">
                                {category?.items?.map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
                                        {/* Item Info */}
                                        <div className="flex-1 pr-4">
                                            <h3 className="text-lg font-semibold">{item?.name}</h3>
                                            <p className="text-sm text-gray-500">{item?.description}</p>
                                            <p className="text-orange-500 font-bold mt-2">₹{item?.price}</p>
                                        </div>

                                        {/* Item Image */}
                                        <img
                                            src={item?.imageUrl}
                                            alt={item?.name}
                                            className="w-32 h-24 object-cover rounded-md"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )
            ))}
        </div>
    );
};

export default RestaurantDetail;
