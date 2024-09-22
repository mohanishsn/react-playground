import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  console.log('window.navigator.onLine==>', window.navigator.onLine);
	const [status, setStatus] = useState(window.navigator.onLine);

	useEffect(() => {
		handleOnline = () => {
			setStatus(true);
		};

		handleOffline = () => {
			setStatus(false);
		};

		// check for online status
		window.addEventListener("online", handleOnline);

		// check for online status
		window.addEventListener("offline", handleOffline);
	}, []);

	// return status boolean value
	return status;
};

export default useOnlineStatus;
