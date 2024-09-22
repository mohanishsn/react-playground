import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/img/logo.jpg";
import userIcon from "./assets/img/user-icon.jpg";

const SearchComponent = () => {
	return (
		<div className="search-section">
      <span>Search:</span>
			<input type="search" className="input-search" placeholder="Enter text" />
		</div>
	);
};

const HeaderComponent = () => {
	return (
		<div className="header">
			<img className="logo" src={logo} alt="Logo" />
			<SearchComponent />
			<div className="user-section">
				<img className="user-icon" src={userIcon} alt="User" />
			</div>
		</div>
	);
};

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(<HeaderComponent />);
