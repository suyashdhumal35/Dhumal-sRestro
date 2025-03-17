import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Remove a single item from the cart
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item)); // Dispatch the action to remove item
  };

  // Clear all items from the cart
  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch the action to clear the cart
  };

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

            {/* Remove Button */}
            <button
              onClick={() => handleRemoveFromCart(item)} // Remove item from the cart
              className="ml-4 bg-red-500 text-white text-sm px-4 py-1 rounded-md shadow-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Clear Cart Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleClearCart} // Clear all items from the cart
          className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
