import { RESTAURANT_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { resData } = props;
	const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
	return (
		<div className="res-card">
			<div className="res-logo-sec">
				<img src={RESTAURANT_IMG_URL + cloudinaryImageId} />
			</div>
			<div className="res-info-sec">
				<h2 className="res-name">{name || "Restaurant Name"}</h2>
				<h4>{cuisines.join(", ") || "Restaurant Cuisine"}</h4>
				<h4>{avgRating || 0}</h4>
				<h4>{sla?.slaString || "NA"}</h4>
			</div>
		</div>
	);
};

export default RestaurantCard;
