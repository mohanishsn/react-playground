import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // subscribing to the cart store slice
	const cartItems = useSelector((store) => {
		return store.cart.items || [];
	});

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

	return (
		<div className="menu w-1/2 mx-auto">
			<h1 className="font-bold text-lg text-center">Cart</h1>
			{/* cart items */}
			{!cartItems.length ? (
				<p className="text-center text-gray-500 mt-4">Your cart is empty!</p>
			) : (
				<div>
					<ItemList items={cartItems} />
					<button type="button" className="bg-black text-white text-xs py-2 px-3 rounded mt-2" onClick={() => handleClearCart()}>Clear Cart</button>
				</div>
			)}
		</div>
	);
};

export default Cart;
