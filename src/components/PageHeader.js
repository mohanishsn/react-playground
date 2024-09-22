import { useState } from "react";
import { Link } from "react-router-dom";

const PageHeader = () => {
	const [btnName, setBtnName] = useState("Login");
	console.log("header rendered");

	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src="https://www.shutterstock.com/shutterstock/photos/1138419575/display_1500/stock-vector-food-chat-center-food-app-logo-food-delivery-business-logo-1138419575.jpg"
					alt="Logo"
				/>
			</div>
			<div className="nav-container">
				<ul className="nav-items">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/about">About Us</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="nav-item">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="nav-item">
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
				</ul>
			</div>
		</div>
	);
};

export default PageHeader;
