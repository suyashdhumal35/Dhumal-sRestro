// Cart.js
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="flex flex-col gap-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold">{item?.name}</h3>
              <p className="text-sm text-gray-500">{item?.description}</p>
              <p className="text-orange-500 font-bold mt-2">₹{item?.price}</p>
            </div>
            <img
              src={item?.imageUrl}
              alt={item?.name}
              className="w-24 h-24 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
