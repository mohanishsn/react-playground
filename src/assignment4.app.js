import React from "react";
import ReactDOM from "react-dom/client";

/*

Header
  Logo
  Nav Items
Body
  Search
  RestaurantContainer
    RestaurantCard
      Image
      Name, Star Rating, Cuisine, Delivery Time
Footer
  About
  Contact
  Address
  Copyright text
*/

const HeaderComponent = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src="https://www.shutterstock.com/shutterstock/photos/1138419575/display_1500/stock-vector-food-chat-center-food-app-logo-food-delivery-business-logo-1138419575.jpg"
					alt="Logo"
				/>
			</div>
			<div className="nav-container">
				<ul className="nav-items">
					<li className="nav-item">Home</li>
					<li className="nav-item">Restaurants</li>
					<li className="nav-item">Cart</li>
				</ul>
			</div>
		</div>
	);
};

const SearchComponent = () => {
	return (
		<div className="search-section">
			<span>Search:</span>
			<input type="search" className="input-search" placeholder="Enter text" />
		</div>
	);
};

const resData = [
	{
		info: {
			id: "112487",
			name: "Chinese Wok",
			cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
			locality: "Virwani Industrial Premises",
			areaName: "Goregaon",
			costForTwo: "₹250 for two",
			cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
			avgRating: 4.2,
			parentId: "61955",
			avgRatingString: "4.2",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 37,
				lastMileTravel: 1.3,
				serviceability: "SERVICEABLE",
				slaString: "35-40 mins",
				lastMileTravelString: "1.3 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-26 02:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "Rxawards/_CATEGORY-Chinese.png",
						description: "Delivery!",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "Delivery!",
									imageId: "Rxawards/_CATEGORY-Chinese.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "ITEMS",
				subHeader: "AT ₹179",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/chinese-wok-virwani-industrial-premises-goregaon-mumbai-112487",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "333734",
			name: "Wow! Momo",
			cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
			locality: "Upper Govind Nagar",
			areaName: "Malad East",
			costForTwo: "₹300 for two",
			cuisines: [
				"Tibetan",
				"Healthy Food",
				"Asian",
				"Chinese",
				"Snacks",
				"Continental",
				"Desserts",
				"Beverages",
			],
			avgRating: 4.1,
			parentId: "1776",
			avgRatingString: "4.1",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 39,
				lastMileTravel: 1.9,
				serviceability: "SERVICEABLE",
				slaString: "35-40 mins",
				lastMileTravelString: "1.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-26 03:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "ITEMS",
				subHeader: "AT ₹99",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/wow-momo-upper-govind-nagar-malad-east-mumbai-333734",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "89517",
			name: "Pizza Hut",
			cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
			locality: "Goregaon East",
			areaName: "Goregaon East",
			costForTwo: "₹300 for two",
			cuisines: ["Pizzas"],
			avgRating: 4.1,
			parentId: "721",
			avgRatingString: "4.1",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 45,
				lastMileTravel: 1.8,
				serviceability: "SERVICEABLE",
				slaString: "45-50 mins",
				lastMileTravelString: "1.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-26 01:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "Rxawards/_CATEGORY-Pizza.png",
						description: "Delivery!",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "Delivery!",
									imageId: "Rxawards/_CATEGORY-Pizza.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/pizza-hut-goregaon-east-mumbai-89517",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "23673",
			name: "McDonald's",
			cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
			locality: "Anupam",
			areaName: "Goregaon",
			costForTwo: "₹400 for two",
			cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
			avgRating: 4.3,
			parentId: "630",
			avgRatingString: "4.3",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 30,
				lastMileTravel: 1.6,
				serviceability: "SERVICEABLE",
				slaString: "25-30 mins",
				lastMileTravelString: "1.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-26 01:45:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "Rxawards/_CATEGORY-Burger.png",
						description: "Delivery!",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "Delivery!",
									imageId: "Rxawards/_CATEGORY-Burger.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "ITEMS",
				subHeader: "AT ₹199",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/mcdonalds-anupam-goregaon-mumbai-23673",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "24509",
			name: "Domino's Pizza",
			cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
			locality: "R City, Ground Floor",
			areaName: "Goregaon",
			costForTwo: "₹400 for two",
			cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
			avgRating: 4.3,
			parentId: "2456",
			avgRatingString: "4.3",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 30,
				lastMileTravel: 1.8,
				serviceability: "SERVICEABLE",
				slaString: "30 mins",
				lastMileTravelString: "1.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-25 22:59:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "Rxawards/_CATEGORY-Pizza.png",
						description: "Delivery!",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "Delivery!",
									imageId: "Rxawards/_CATEGORY-Pizza.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹299",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/dominos-pizza-r-city-ground-floor-goregaon-mumbai-24509",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "497083",
			name: "Jimis Burger",
			cloudinaryImageId: "7fc108b2b8fdee5d9612d12d00413034",
			locality: "Virwani Gala No 85",
			areaName: "Jog Gor East",
			costForTwo: "₹600 for two",
			cuisines: ["Burgers", "Fast Food", "Beverages"],
			avgRating: 4.6,
			parentId: "8122",
			avgRatingString: "4.6",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 36,
				lastMileTravel: 0.9,
				serviceability: "SERVICEABLE",
				slaString: "35-40 mins",
				lastMileTravelString: "0.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-26 03:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "newg.png",
						description: "Gourmet",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "Gourmet",
									imageId: "newg.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				subHeader: "UPTO ₹100",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/jimis-burger-virwani-gala-no-85-jog-gor-east-mumbai-497083",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "112526",
			name: "NIC Ice Creams",
			cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
			locality: "Bhanu Shanti Complex",
			areaName: "Malad Kan East",
			costForTwo: "₹120 for two",
			cuisines: ["Ice Cream", "Desserts"],
			avgRating: 4.7,
			veg: true,
			parentId: "6249",
			avgRatingString: "4.7",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 30,
				lastMileTravel: 1.9,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "1.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-26 00:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "Rxawards/_CATEGORY-Ice-creams.png",
						description: "Delivery!",
					},
				],
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "Delivery!",
									imageId: "Rxawards/_CATEGORY-Ice-creams.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/nic-ice-creams-bhanu-shanti-complex-malad-kan-east-mumbai-112526",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "478802",
			name: "NOTO - Ice Creams & Desserts",
			cloudinaryImageId: "81ac87e5c89c16adc867be38ce5a1ba3",
			locality: "Aarey Road",
			areaName: "Jog Gor East",
			costForTwo: "₹250 for two",
			cuisines: ["Ice Cream"],
			avgRating: 4.3,
			veg: true,
			parentId: "468478",
			avgRatingString: "4.3",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 23,
				lastMileTravel: 0.8,
				serviceability: "SERVICEABLE",
				slaString: "20-25 mins",
				lastMileTravelString: "0.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-26 03:30:00",
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: "guiltfree/GF_Logo_android_3x",
						shortDescription: "brand",
						fontColor: "#7E808C",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: "",
									fontColor: "#7E808C",
									iconId: "guiltfree/GF_Logo_android_3x",
									shortDescription: "brand",
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "ITEMS",
				subHeader: "AT ₹59",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-aarey-road-jog-gor-east-mumbai-478802",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "5171",
			name: "Theobroma",
			cloudinaryImageId: "63dd75492c47fcec191132b8eb299ea5",
			locality: "Goregaon East",
			areaName: "Goregaon East",
			costForTwo: "₹400 for two",
			cuisines: ["Bakery", "Desserts"],
			avgRating: 4.6,
			parentId: "1040",
			avgRatingString: "4.6",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 25,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "20-25 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-25 23:59:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "Rxawards/_CATEGORY-Desserts.png",
						description: "Delivery!",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "Delivery!",
									imageId: "Rxawards/_CATEGORY-Desserts.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹1149",
				discountTag: "FLAT DEAL",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/theobroma-goregaon-east-mumbai-5171",
			type: "WEBLINK",
		},
	},
	{
		info: {
			id: "65667",
			name: "Starbucks Coffee",
			cloudinaryImageId: "2418209798927d733a50f5d2ebcc2aee",
			locality: "Starbucks Commerz 2",
			areaName: "Goregaon East",
			costForTwo: "₹400 for two",
			cuisines: [
				"Beverages",
				"Cafe",
				"Snacks",
				"Desserts",
				"Bakery",
				"Ice Cream",
			],
			avgRating: 4.4,
			parentId: "195515",
			avgRatingString: "4.4",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 24,
				serviceability: "SERVICEABLE",
				slaString: "20-25 mins",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-25 20:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
						description: "Delivery!",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "Delivery!",
									imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "20% OFF",
				subHeader: "UPTO ₹50",
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: "https://www.swiggy.com/restaurants/starbucks-coffee-starbucks-commerz-2-goregaon-east-mumbai-65667",
			type: "WEBLINK",
		},
	},
];

const RestaurantCardComponent = (props) => {
	console.log(props);
	const { resData } = props;
	console.log(resData);
	const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
	return (
		<div className="res-card">
			<div className="res-logo-sec">
				<img
					src={
						"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
							cloudinaryImageId ||
						"https://img.freepik.com/free-photo/veg-biryani-veg-pulav-fried-rice-indian-food-generative-ai_1258-151587.jpg?t=st=1711310453~exp=1711314053~hmac=5ad4a3248d7a9efeb58ceed58dbf3ba8c3e49a4390e89888fa48deca5c15a45b&w=1800"
					}
				/>
			</div>
			<div className="res-info-sec">
				<h2 className="res-name">{name || "Restaurant Name"}</h2>
				<h4>{cuisines.join(', ') || "Restaurant Cuisine"}</h4>
				<h4>{avgRating || 0}</h4>
				<h4>{sla?.slaString || "NA"}</h4>
			</div>
		</div>
	);
};

const BodyComponent = () => {
	return (
		<div className="body">
			<SearchComponent />
			<div className="res-list">
				{resData.map((resObj) => {
					return <RestaurantCardComponent key={resObj.info.id} resData={resObj} />;
				})}
			</div>
		</div>
	);
};

const AppLayoutComponent = () => {
	return (
		<div className="app">
			<HeaderComponent />
			<BodyComponent />
		</div>
	);
};

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(<AppLayoutComponent />);
