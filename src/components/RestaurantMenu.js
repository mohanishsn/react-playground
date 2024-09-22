import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const resInfo = useRestaurant(resId);

	if (!resId) {
		return <div>Restaurant not available</div>;
	}

	if (resInfo === null) return <Shimmer />;

	const { name, costForTwoMessage, cuisines } = resInfo.cards[2].card.card.info;
	const { itemCards } =
		resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
	console.log("itemCards==>", itemCards);

	if (!itemCards?.length) {
		return <div>No data available</div>;
	}

	return (
		<div className="menu">
			<h1>{name}</h1>
			<h3>
				{cuisines.join(", ")} - {costForTwoMessage}
			</h3>
			<ul>
				{itemCards.map((item) => {
					return (
						<li key={item.card.info.id}>
							{item.card.info.name} - Rs.
							{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
