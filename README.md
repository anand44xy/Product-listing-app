# Product Listing App

This is a **Product Listing App** built with React.js, Axios, and React Router. The app fetches products and categories from the [DummyJSON API](https://dummyjson.com/products) and allows users to browse products based on categories. The app is fully responsive, ensuring smooth user experience on all device sizes.

## Live Demo

Visit the live app here: [Product Listing App](https://product-listing-app-weld.vercel.app/)

## Features

- **Product Listing**: View a list of all available products fetched from the DummyJSON API.
- **Category Filtering**: Filter products by selecting a category from the sidebar.
- **Responsive Design**: The app adapts to different screen sizes, including mobile, tablet, and desktop.
- **Dynamic Routing**: The app uses URL parameters to display category-specific products with `useParams()` from React Router.
- **Loading State**: Displays a loading message while fetching data from the API.
- **Scrollbars**: Category and product lists feature custom scrollbars for easy navigation.
- **Error Handling**: Handles errors gracefully, displaying a user-friendly message when data fetching fails.

## Categories Available

The app allows users to filter products based on the following categories:

- Smartphones
- Laptops
- Fragrances
- Skincare
- Groceries
- Home Decoration
- Furniture
- Lighting

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/product-listing-app.git
