import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const resInfo = useRestaurant(resId);

	// State to track the currently open accordion (by index or id)
	const [categoryIndex, setCategoryIndex] = useState(null);

	// Function to toggle accordion
	const toggleAccordion = (index) => {
		// If the same accordion is clicked, close it; otherwise, open the clicked accordion
		setCategoryIndex(categoryIndex === index ? null : index);
	};

	if (!resId) {
		return <div>Restaurant not available</div>;
	}

	if (resInfo === null) return <Shimmer />;

	console.log("resInfo==>", resInfo.cards[4].groupedCard.cardGroupMap.REGULAR);
	const { name, costForTwoMessage, cuisines } = resInfo.cards[2].card.card.info;
	const { itemCards } =
		resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
	const categoryCards =
		resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
			(item) =>
				item?.card?.card["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);
	console.log("categoryCards==>", categoryCards);

	if (!itemCards?.length) {
		return <div>No data available</div>;
	}

	return (
		<div className="menu w-1/2 mx-auto">
			<h1 className="font-bold text-lg text-center">{name}</h1>
			<h3 className="text-center">
				{cuisines.join(", ")} - {costForTwoMessage}
			</h3>
			{/* <ul className="mt-8">
				{itemCards.map((item) => {
					return (
						<li key={item.card.info.id}>
							{item.card.info.name} - Rs.
							{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
						</li>
					);
				})}
			</ul> */}
			{/* categories accordion */}
			<div className="mt-8">
				{categoryCards.map((category, index) => (
					<RestaurantCategory
						key={category?.card?.card.title}
						data={category?.card?.card}
						isOpen={categoryIndex === index} // Pass down whether this accordion is open
						toggle={() => toggleAccordion(index)} // Pass down the toggle function
					/>
				))}
			</div>
		</div>
	);
};

export default RestaurantMenu;
