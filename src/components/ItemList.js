import { useDispatch } from "react-redux";
import { RESTAURANT_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
	console.log("itemList items==>", items);
	const dispatch = useDispatch();
	const handleAddItem = (item) => {
		// dispatch action for adding to store
		dispatch(addItem(item));
	}
	return (
		<div>
			{items.map((item) => (
				<div
					key={item.card.info.id}
					className="border-b-2 py-3 flex items-center justify-between"
				>
					<div className="w-10/12">
						<h3 className="font-semibold text-sm">{item?.card?.info?.name}</h3>
						<p className="text-sm">
							&#8377;
							{(item?.card?.info?.defaultPrice || item?.card?.info?.price) /
								100}
						</p>
						<p className="text-sm">
							⭐️ {item?.card?.info?.ratings?.aggregatedRating?.rating}
						</p>
						<p className="text-xs text-gray-600 mt-4">
							{item?.card?.info?.description}
						</p>
					</div>

					<div className="relative ml-4 w-2/12">
						{item?.card?.info?.imageId && (
							<img
								src={`${RESTAURANT_IMG_URL}${item.card.info.imageId}`}
								className="w-28"
								alt="Restaurant"
							/>
						)}
						<button className="bg-white text-gray-800 absolute px-4 py-2 rounded-lg bottom-0 text-xs" onClick={() => handleAddItem(item)}>
							+Add
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
