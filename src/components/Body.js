import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

filterTopRatedRestaurants = () => {};

const Body = () => {
	// local state variable - powerful variable
	let [resList, setResList] = useState([]);
	let [filteredResList, setFilteredResList] = useState([]);

	let [searchText, setSearchText] = useState("");

	const onlineStatus = useOnlineStatus()
	console.log('onlineStatus==>', onlineStatus);

	if (!onlineStatus) {
		return <div>Looks like you are offline. Please check your internet connection</div>
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
			jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
		setFilteredResList(
			jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	return resList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="search-filter-section">
				<div className="search-section">
					<input
						type="text"
						value={searchText}
						className="input-search"
						placeholder="Enter restaurant name"
						onChange={(e) => {
							setSearchText(e.target.value);
							console.log("searchtext1==>", searchText);
						}}
					/>
					<button
						className="btn search-btn"
						onClick={() => {
							console.log("searchText==>", searchText);
							console.log("resList==>", resList);
							let filteredList = resList.filter((resItem) => {
								return resItem.info.name
									.toLowerCase()
									.includes(searchText.toLowerCase());
							});

							console.log("filteredList==>", filteredList);
							setFilteredResList(filteredList);
						}}
					>
						Search
					</button>
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
			<div className="res-list">
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
