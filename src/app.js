import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import PageHeader from "./components/PageHeader";
import Body from "./components/Body";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// lazy loading paths to create separate bundles
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
	const [userName, setUserName] = useState("");

	// dummy api call
	useEffect(() => {
		const data = { userName: "Mohanish Nagarkar" };
		setUserName(data.userName);
	}, []);

	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ userName, setUserName }}>
				<div className="app">
					<PageHeader />
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<h1>Loading about...</h1>}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: <ContactUs />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<h1>Loading groceries...</h1>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: (
					<Suspense fallback={<h1>Loading cart...</h1>}>
						<Cart />
					</Suspense>
				),
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);
const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<RouterProvider router={appRouter} />);
