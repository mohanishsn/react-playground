import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";

const useRestaurant = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	fetchData = async () => {
		const res = await fetch(RESTAURANT_MENU_API + resId);
		const jsonRes = await res.json();
		setResInfo(jsonRes.data);
		console.log(jsonRes);
	};

	console.log("resInfo==>", resInfo);
	return resInfo;
};

export default useRestaurant;
