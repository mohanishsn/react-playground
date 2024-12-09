import { RESTAURANT_IMG_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
	const { resData } = props;
	const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
	const {userName} = useContext(UserContext)
	return (
		<div className="bg-gray-100 p-3 flex flex-col">
			<div className="res-logo-sec">
				<img src={RESTAURANT_IMG_URL + cloudinaryImageId} />
			</div>
			<div className="res-info-sec mt-2 flex-grow">
				<h2 className="res-name font-bold">{name || "Restaurant Name"}</h2>
				<h4>{cuisines.join(", ") || "Restaurant Cuisine"}</h4>
				<h4>{avgRating || 0}</h4>
				<h4>{sla?.slaString || "NA"}</h4>
				<h4>{userName}</h4>
			</div>
		</div>
	);
};

// higher order function to return RestaurantCard with promoted label

const promotedLabel = (RestaurantCard) => {
	return () => {
		return (
			<div>
				<label>Promoted</label>
				<RestaurantCard />
			</div>
		)
	}
}

export default RestaurantCard;
