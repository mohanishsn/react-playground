import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

filterTopRatedRestaurants = () => {};

const Body = () => {
	const { userName, setUserName } = useContext(UserContext);
	// local state variable - powerful variable
	let [resList, setResList] = useState([]);
	let [filteredResList, setFilteredResList] = useState([]);
	let [searchText, setSearchText] = useState("");
	const onlineStatus = useOnlineStatus();

	if (!onlineStatus) {
		return (
			<div>
				Looks like you are offline. Please check your internet connection
			</div>
		);
	}

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		let data = await fetch(
			"https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.170306&lng=72.8606049&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const jsonData = await data.json();
		setResList(
			jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
		setFilteredResList(
			jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	return resList?.length === 0 ? (
		<Shimmer />
	) : (
		<div className="p-3">
			<div className="search-filter-section">
				<div className="search-section">
					<input
						type="text"
						value={searchText}
						className="input-search"
						placeholder="Enter restaurant name"
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-3"
						onClick={() => {
							let filteredList = resList.filter((resItem) => {
								return resItem.info.name
									.toLowerCase()
									.includes(searchText.toLowerCase());
							});

							setFilteredResList(filteredList);
						}}
					>
						Search
					</button>
				</div>

				<div className="search-section">
					<label>User name: </label>
					<input
						type="text"
						value={userName}
						className="input-search"
						placeholder="Enter user name"
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div className="filter">
					<button
						className="btn filter-btn"
						onClick={() => {
							let filteredList = resList.filter((resItem) => {
								return resItem.info.avgRating > 4.3;
							});
							setFilteredResList(filteredList);
						}}
					>
						Top Rated Restaurants
					</button>
				</div>
			</div>
			<div className="grid grid-cols-6 gap-5">
				{filteredResList.map((resObj) => (
					<Link key={resObj.info.id} to={"/restaurant/" + resObj.info.id}>
						<RestaurantCard resData={resObj} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
