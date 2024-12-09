import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const PageHeader = () => {
	const [btnName, setBtnName] = useState("Login");
	const {userName} = useContext(UserContext);

	// subscribing to store using selector
	const cartItems = useSelector((store) => {
		return store.cart.items;
	});

	console.log('cartItems==>', cartItems);

	return (
		<div className="flex justify-between items-center shadow-md p-3 mb-4">
			<div className="logo-container">
				<img
					className="w-16"
					src="https://www.shutterstock.com/shutterstock/photos/1138419575/display_1500/stock-vector-food-chat-center-food-app-logo-food-delivery-business-logo-1138419575.jpg"
					alt="Logo"
				/>
			</div>
			<div className="nav-container">
				<ul className="nav-items flex">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item ml-3">
						<Link to="/about">About Us</Link>
					</li>
					<li className="nav-item ml-3">
						<Link to="/cart">Cart ({cartItems.length} items)</Link>
					</li>
					<li className="nav-item ml-3">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="nav-item ml-3">
						<Link
							to="/login"
							onClick={() => {
								btnName === "Logout"
									? setBtnName("Login")
									: setBtnName("Logout");
							}}
						>
							Login
						</Link>
					</li>
					<li className="font-bold">{userName}</li>
				</ul>
			</div>
		</div>
	);
};

export default PageHeader;
