import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, toggle }) => {
	return (
		<div className="category shadow-lg mb-4 shadow-neutral-200 bg-gray-50">
			<div
				className="accordion-header cursor-pointer p-3 flex items-center justify-between"
				onClick={toggle}
			>
				<h1 className="font-bold text-sm">
					{data?.title} ({data?.itemCards?.length})
				</h1>
				<span>{isOpen ? '˄' : '˅'}</span>
			</div>
			{isOpen && (
				<div className="accordion-body p-3">
					<ItemList items={data?.itemCards} />
				</div>
			)}
		</div>
	);
};

export default RestaurantCategory;
