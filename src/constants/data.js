export const restaurantData = [
    {
        id: 1,
        name: "The Food Place",
        cuisines: ["Italian", "Chinese"],
        costForTwoMessage: "₹500 for two",
        imageUrl: "https://images.unsplash.com/photo-1706954225466-4e1613feaa8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMHBhbGFjZXxlbnwwfHwwfHx8MA%3D%3D",
        promotion: true,
        deliveryTime: "30-40 mins",
        rating: 4.5, // ⭐ Rating out of 5

        vegMenu: [
            {
                name: "Pizza Margherita",
                description: "Classic Margherita pizza with fresh basil",
                price: 300,
                category: "Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?pizza"
            },
            {
                name: "Spaghetti Aglio e Olio",
                description: "Pasta with garlic and olive oil",
                price: 250,
                category: "Veg",
                servedBy: "1-2",
                imageUrl: "https://source.unsplash.com/400x300/?spaghetti"
            },
            {
                name: "Veg Lasagna",
                description: "Layers of pasta with cheese and vegetables",
                price: 350,
                category: "Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?lasagna"
            }
        ],

        nonVegMenu: [
            {
                name: "Chicken Lasagna",
                description: "Traditional Italian lasagna with cheese and meat",
                price: 400,
                category: "Non-Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?chickenlasagna"
            },
            {
                name: "Pepperoni Pizza",
                description: "Cheese pizza topped with spicy pepperoni",
                price: 350,
                category: "Non-Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?pepperonipizza"
            },
            {
                name: "Chicken Manchurian",
                description: "Spicy Chinese-style chicken in a tangy sauce",
                price: 280,
                category: "Non-Veg",
                servedBy: "1-2",
                imageUrl: "https://source.unsplash.com/400x300/?chickenmanchurian"
            }
        ],

        drinks: [
            {
                name: "Lemon Iced Tea",
                description: "Refreshing iced tea with a hint of lemon",
                price: 120,
                category: "Drink",
                servedBy: "1",
                imageUrl: "https://source.unsplash.com/400x300/?icedtea"
            },
            {
                name: "Cappuccino",
                description: "Hot coffee with steamed milk and frothy top",
                price: 150,
                category: "Drink",
                servedBy: "1",
                imageUrl: "https://source.unsplash.com/400x300/?cappuccino"
            }
        ],

        speciality: [
            {
                name: "Truffle Risotto",
                description: "Creamy risotto cooked with truffle oil and mushrooms",
                price: 500,
                category: "Speciality",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?risotto"
            }
        ]
    },

    {
        id: 2,
        name: "Spicy Bites",
        cuisines: ["Indian", "Fast Food"],
        costForTwoMessage: "₹300 for two",
        imageUrl: "https://images.unsplash.com/photo-1591120583691-49d2741e55da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BpY3klMjBiaXRzfGVufDB8fDB8fHww",
        promotion: false,
        deliveryTime: "25-35 mins",
        rating: 3.8, // ⭐ Rating out of 5

        vegMenu: [
            {
                name: "Paneer Tikka",
                description: "Grilled paneer with spices",
                price: 200,
                category: "Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?paneertikka"
            },
            {
                name: "Aloo Paratha",
                description: "Stuffed flatbread with spiced potatoes",
                price: 150,
                category: "Veg",
                servedBy: "1-2",
                imageUrl: "https://source.unsplash.com/400x300/?paratha"
            },
            {
                name: "Chole Bhature",
                description: "Chickpeas curry served with deep-fried bread",
                price: 180,
                category: "Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?cholebhature"
            }
        ],

        nonVegMenu: [
            {
                name: "Butter Chicken",
                description: "Creamy butter chicken served with naan",
                price: 350,
                category: "Non-Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?butterchicken"
            },
            {
                name: "Chicken Biryani",
                description: "Aromatic rice dish cooked with marinated chicken",
                price: 300,
                category: "Non-Veg",
                servedBy: "2-4",
                imageUrl: "https://source.unsplash.com/400x300/?chickenbiryani"
            },
            {
                name: "Mutton Rogan Josh",
                description: "Slow-cooked lamb curry with rich spices",
                price: 400,
                category: "Non-Veg",
                servedBy: "2-4",
                imageUrl: "https://source.unsplash.com/400x300/?muttoncurry"
            }
        ],

        drinks: [
            {
                name: "Mango Lassi",
                description: "Sweet and creamy mango yogurt drink",
                price: 100,
                category: "Drink",
                servedBy: "1",
                imageUrl: "https://source.unsplash.com/400x300/?mangolassi"
            },
            {
                name: "Masala Chai",
                description: "Traditional Indian spiced tea",
                price: 80,
                category: "Drink",
                servedBy: "1",
                imageUrl: "https://source.unsplash.com/400x300/?masalachai"
            }
        ],

        speciality: [
            {
                name: "Dal Makhani",
                description: "Slow-cooked black lentils with butter and cream",
                price: 280,
                category: "Speciality",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?dalmakhani"
            }
        ]
    },
    {
        id: 3,
        name: "KFC",
        cuisines: ["Fast Food", "American"],
        costForTwoMessage: "₹600 for two",
        imageUrl: "https://images.unsplash.com/photo-1583840726841-c35239a17b23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2ZjfGVufDB8fDB8fHww",
        promotion: true,
        deliveryTime: "20-30 mins",
        rating: 4.3,
        vegMenu: [
            {
                name: "Veg Strips",
                description: "Crispy vegetarian strips with signature seasoning",
                price: 180,
                category: "Veg",
                servedBy: "2",
                imageUrl: "https://source.unsplash.com/400x300/?vegstrips"
            },
            { name: "Paneer Zinger Burger", description: "Crispy paneer patty in a soft bun", price: 220, category: "Veg", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?paneerburger" },
            { name: "Crispy Veg Wrap", description: "Veg wrap with fresh veggies and sauce", price: 200, category: "Veg", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?vegwrap" }
        ],
        nonVegMenu: [
            { name: "Zinger Burger", description: "Crispy chicken fillet in a bun", price: 220, category: "Non-Veg", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?burger" },
            { name: "Hot Wings", description: "Spicy chicken wings", price: 250, category: "Non-Veg", servedBy: "2", imageUrl: "https://source.unsplash.com/400x300/?hotwings" },
            { name: "Chicken Popcorn", description: "Bite-sized crispy chicken pieces", price: 230, category: "Non-Veg", servedBy: "1-2", imageUrl: "https://source.unsplash.com/400x300/?chickenpopcorn" }
        ],
        drinks: [
            { name: "Pepsi", description: "Chilled soft drink", price: 80, category: "Drink", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?softdrink" },
            { name: "Mojito", description: "Refreshing lime and mint drink", price: 120, category: "Drink", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?mojito" },
            { name: "Cold Coffee", description: "Iced coffee with milk", price: 150, category: "Drink", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?coldcoffee" }
        ]
    },
    {
        id: 4,
        name: "Tandoori Nights",
        cuisines: ["Indian", "Mughlai"],
        costForTwoMessage: "₹450 for two",
        imageUrl: "https://images.unsplash.com/photo-1517984055083-fd6e1e788e54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRhbmRvb3JpfGVufDB8fDB8fHww",
        promotion: true,
        deliveryTime: "30-40 mins",
        rating: 4.2,
        vegMenu: [
            { name: "Paneer Butter Masala", description: "Cottage cheese in creamy tomato gravy", price: 280, category: "Veg", servedBy: "2-3", imageUrl: "https://source.unsplash.com/400x300/?paneer" },
            { name: "Dal Tadka", description: "Yellow lentils tempered with spices", price: 200, category: "Veg", servedBy: "2-3", imageUrl: "https://source.unsplash.com/400x300/?dal" },
            { name: "Veg Biryani", description: "Fragrant rice cooked with vegetables and spices", price: 250, category: "Veg", servedBy: "2", imageUrl: "https://source.unsplash.com/400x300/?vegbiryani" }
        ],
        nonVegMenu: [
            { name: "Tandoori Chicken", description: "Charcoal-grilled spicy chicken", price: 350, category: "Non-Veg", servedBy: "2-3", imageUrl: "https://source.unsplash.com/400x300/?tandoorichicken" },
            { name: "Mutton Korma", description: "Slow-cooked lamb curry with aromatic spices", price: 400, category: "Non-Veg", servedBy: "2-3", imageUrl: "https://source.unsplash.com/400x300/?muttonkorma" },
            { name: "Chicken Tikka", description: "Boneless chicken marinated and grilled", price: 320, category: "Non-Veg", servedBy: "2", imageUrl: "https://source.unsplash.com/400x300/?chickentikka" }
        ],
        drinks: [
            { name: "Lassi", description: "Sweet and creamy yogurt-based drink", price: 100, category: "Drink", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?lassi" },
            { name: "Buttermilk", description: "Spiced and refreshing yogurt drink", price: 80, category: "Drink", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?buttermilk" },
            { name: "Jaljeera", description: "Tangy cumin-flavored refreshing drink", price: 70, category: "Drink", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?jaljeera" }
        ]
    },
    {
        id: 5,
        name: "Sushi Delight",
        cuisines: ["Japanese", "Asian"],
        costForTwoMessage: "₹700 for two",
        imageUrl: "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VzaGl8ZW58MHx8MHx8fDA%3D",
        promotion: false,
        deliveryTime: "40-50 mins",
        rating: 4.6,
        vegMenu: [
            { name: "Avocado Sushi Roll", description: "Sushi roll with avocado and rice", price: 300, category: "Veg", servedBy: "1-2", imageUrl: "https://source.unsplash.com/400x300/?sushiroll" },
            { name: "Edamame", description: "Steamed and salted soybeans", price: 200, category: "Veg", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?edamame" },
            { name: "Vegetable Tempura", description: "Crispy fried vegetables in tempura batter", price: 280, category: "Veg", servedBy: "2-3", imageUrl: "https://source.unsplash.com/400x300/?tempura" }
        ],
        nonVegMenu: [
            { name: "Salmon Sushi", description: "Fresh salmon with seasoned rice", price: 400, category: "Non-Veg", servedBy: "1-2", imageUrl: "https://source.unsplash.com/400x300/?salmon" },
            { name: "Tuna Sashimi", description: "Thinly sliced raw tuna", price: 450, category: "Non-Veg", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?sashimi" },
            { name: "Shrimp Tempura", description: "Crispy fried shrimp", price: 350, category: "Non-Veg", servedBy: "2", imageUrl: "https://source.unsplash.com/400x300/?shrimp" }
        ],
        drinks: [
            { name: "Green Tea", description: "Hot and refreshing Japanese tea", price: 100, category: "Drink", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?greentea" },
            { name: "Sake", description: "Traditional Japanese rice wine", price: 500, category: "Drink", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?sake" },
            { name: "Matcha Latte", description: "Creamy matcha green tea latte", price: 250, category: "Drink", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?matcha" }
        ]
    },
    {
        id: 6,
        name: "Biryani Junction",
        cuisines: ["Indian", "Hyderabadi"],
        costForTwoMessage: "₹500 for two",
        imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
        promotion: true,
        deliveryTime: "35-45 mins",
        rating: 4.6,
        vegMenu: [
            { name: "Veg Biryani", description: "Fragrant rice cooked with vegetables and aromatic spices", price: 280, category: "Veg", servedBy: "2-3", imageUrl: "https://source.unsplash.com/400x300/?vegbiryani" },
            { name: "Paneer Biryani", description: "Spiced basmati rice with marinated paneer cubes", price: 320, category: "Veg", servedBy: "2-3", imageUrl: "https://source.unsplash.com/400x300/?paneerbiryani" }
        ],
        nonVegMenu: [
            { name: "Chicken Biryani", description: "Authentic Hyderabadi chicken biryani with flavorful spices", price: 350, category: "Non-Veg", servedBy: "2-4", imageUrl: "https://source.unsplash.com/400x300/?chickenbiryani" },
            { name: "Mutton Biryani", description: "Slow-cooked mutton biryani with rich spices", price: 450, category: "Non-Veg", servedBy: "2-4", imageUrl: "https://source.unsplash.com/400x300/?muttonbiryani" }
        ],
        drinks: [
            { name: "Sweet Lassi", description: "Thick and creamy sweet yogurt drink", price: 100, category: "Drink", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?lassi" },
            { name: "Masala Buttermilk", description: "Spiced buttermilk to refresh and cool down", price: 90, category: "Drink", servedBy: "1", imageUrl: "https://source.unsplash.com/400x300/?buttermilk" }
        ]
    },
    , {
        id: 7,
        name: "Biryani Junction",
        cuisines: ["Indian", "Mughlai"],
        costForTwoMessage: "₹450 for two",
        imageUrl: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
        promotion: true,
        deliveryTime: "30-40 mins",
        rating: 4.2,
        vegMenu: [
            {
                name: "Veg Biryani",
                description: "Fragrant basmati rice cooked with fresh vegetables and aromatic spices",
                price: 250,
                category: "Veg",
                servedBy: "1-2",
                imageUrl: "https://source.unsplash.com/400x300/?vegbiryani"
            },
            {
                name: "Paneer Biryani",
                description: "Delicious biryani with marinated paneer cubes",
                price: 300,
                category: "Veg",
                servedBy: "1-2",
                imageUrl: "https://source.unsplash.com/400x300/?paneerbiryani"
            }
        ],
        nonVegMenu: [
            {
                name: "Chicken Biryani",
                description: "Slow-cooked biryani with marinated chicken and aromatic spices",
                price: 350,
                category: "Non-Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?chickenbiryani"
            },
            {
                name: "Mutton Biryani",
                description: "Rich and flavorful biryani made with tender mutton pieces",
                price: 450,
                category: "Non-Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?muttonbiryani"
            }
        ],
        drinks: [
            {
                name: "Sweet Lassi",
                description: "Traditional Indian yogurt-based drink",
                price: 120,
                category: "Drink",
                servedBy: "1",
                imageUrl: "https://source.unsplash.com/400x300/?lassi"
            },
            {
                name: "Masala Buttermilk",
                description: "Spiced and refreshing buttermilk",
                price: 100,
                category: "Drink",
                servedBy: "1",
                imageUrl: "https://source.unsplash.com/400x300/?buttermilk"
            }
        ]
    },
    {
        id: 8,
        name: "Spice Delight",
        cuisines: ["Indian", "Tandoori"],
        costForTwoMessage: "₹500 for two",
        imageUrl: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        promotion: false,
        deliveryTime: "35-45 mins",
        rating: 4.1,
        vegMenu: [
            {
                name: "Paneer Tikka Masala",
                description: "Paneer cooked in a rich tomato-based gravy",
                price: 280,
                category: "Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?paneertikka"
            },
            {
                name: "Dal Tadka",
                description: "Lentils tempered with Indian spices",
                price: 200,
                category: "Veg",
                servedBy: "1-2",
                imageUrl: "https://source.unsplash.com/400x300/?dal"
            }
        ],
        nonVegMenu: [
            {
                name: "Tandoori Chicken",
                description: "Marinated chicken cooked in a clay oven",
                price: 400,
                category: "Non-Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?tandoorichicken"
            },
            {
                name: "Butter Chicken",
                description: "Creamy tomato-based chicken curry",
                price: 350,
                category: "Non-Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?butterchicken"
            }
        ],
        drinks: [
            {
                name: "Mango Shake",
                description: "Thick mango shake with ice cream",
                price: 150,
                category: "Drink",
                servedBy: "1",
                imageUrl: "https://source.unsplash.com/400x300/?mangoshake"
            },
            {
                name: "Masala Chai",
                description: "Indian spiced tea",
                price: 80,
                category: "Drink",
                servedBy: "1",
                imageUrl: "https://source.unsplash.com/400x300/?tea"
            }
        ]
    },
    {
        id: 9,
        name: "Ocean Breeze",
        cuisines: ["Seafood", "Continental"],
        costForTwoMessage: "₹600 for two",
        imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
        promotion: true,
        deliveryTime: "40-50 mins",
        rating: 4.3,
        vegMenu: [
            {
                name: "Grilled Veg Platter",
                description: "Assorted grilled vegetables with dips",
                price: 320,
                category: "Veg",
                servedBy: "2",
                imageUrl: "https://source.unsplash.com/400x300/?grilledveg"
            }
        ],
        nonVegMenu: [
            {
                name: "Garlic Butter Prawns",
                description: "Prawns tossed in garlic butter sauce",
                price: 450,
                category: "Non-Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?prawns"
            },
            {
                name: "Fish Tikka",
                description: "Grilled fish marinated with Indian spices",
                price: 380,
                category: "Non-Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?fishtikka"
            }
        ],
        drinks: [
            {
                name: "Virgin Mojito",
                description: "Lime and mint cooler",
                price: 120,
                category: "Drink",
                servedBy: "1",
                imageUrl: "https://source.unsplash.com/400x300/?mojito"
            }
        ]
    },
    {
        id: 10,
        name: "Biryani Express",
        cuisines: ["Indian", "Mughlai"],
        costForTwoMessage: "₹550 for two",
        imageUrl: "https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=500&auto=format&fit=crop&q=60",
        promotion: false,
        deliveryTime: "30-40 mins",
        rating: 4.5,
        vegMenu: [
            {
                name: "Paneer Biryani",
                description: "Spiced rice with marinated paneer cubes",
                price: 320,
                category: "Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?paneerbiryani"
            }
        ],
        nonVegMenu: [
            {
                name: "Hyderabadi Chicken Biryani",
                description: "Slow-cooked, aromatic chicken biryani",
                price: 400,
                category: "Non-Veg",
                servedBy: "2-3",
                imageUrl: "https://source.unsplash.com/400x300/?chickenbiryani"
            }
        ],
        drinks: [
            {
                name: "Sweet Lassi",
                description: "Traditional Indian yogurt drink",
                price: 100,
                category: "Drink",
                servedBy: "1",
                imageUrl: "https://source.unsplash.com/400x300/?lassi"
            }
        ]
    }
];
