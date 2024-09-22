import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import PageHeader from "./components/PageHeader";
import Body from "./components/Body";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login";

// lazy loading Grocery path to create separate bundle for grocery
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
	return (
		<div className="app">
			<PageHeader />
			<Outlet />
		</div>
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
