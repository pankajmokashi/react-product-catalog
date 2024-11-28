# React Product Catalog

A **React Product Catalog** application built with **React (Vite)** and **Tailwind CSS**. This is a modern, responsive product catalog project with features such as product listing, filtering, sorting, and detailed views using reusable components and React Router.

---

## 🔗 Live Demo

Check out the live version of the application here: [React Product Catalog Live](https://react-product-catalog-one.vercel.app/)

## 📚 Libraries and Tools Used:
- **React (Vite**) - Fast React development environment.
- **Tailwind CSS** - For styling the application.
- **React Router DOM** - For routing and navigation.
- **PropTypes** - For type-checking component props.
- **Mock API** - [Mocky](https://designer.mocky.io/design) for fetching product data.


## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pankajmokahsi/react-product-catalog.git
   cd react-product-catalog
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```
   
5. **Run the application locally:*

    ```bash
   npm run dev
   ```
   
7. **Open in your browser:**

   Navigate to http://localhost:5173.


## 🛠 Application Features

1. **Product Listing:** Display all products in a grid or list layout with the following details:
- Product image
- Product name
- Product price
- A "View Details" button

2. **Product Details View**
- When "View Details" is clicked, show the product description and a larger image.
- Navigate back to the product listing using React Router.

3. **Search and Filter**
- A search bar to search products by name.
- A category filter to filter products by one or more categories.

4. Responsive Design
- Optimized for desktops, tablets, and mobile devices.

5. **Reusability**
- Components like ProductList, ProductItem, ProductDetails, SearchBar, and CategoryFilter are modular and reusable.

6. **State Management**
- Used React Context and React hooks (useState, useEffect) for managing component state.

### 🌟 Additional Enhancements

1. **Sort Products by Price**
- Allow users to sort products in ascending or descending order by price.

2. **Add to Cart Functionality**
- Users can add products to the cart for a seamless shopping experience.

3. **Dynamic Product Data**
- Integrated with a mock API [Mocky](https://run.mocky.io/v3/ed766f71-aa0f-4551-a3ac-500672c1cbab) to fetch product data, replacing static JSON files.


## 📸 Screenshots

**Product Listing**
![Product Listing](https://github.com/user-attachments/assets/e9bff683-3f9a-4413-a488-aa7af5c64696)

**Product Details**
![Product Details](https://github.com/user-attachments/assets/f214af2d-c246-4a31-a509-e8585c65ee91)

**Cart Details**
![Cart Details](https://github.com/user-attachments/assets/6aabea03-2155-4984-a25a-b57014c92f7a)

**Responsive View**
![Responsive View](https://github.com/user-attachments/assets/87c18ef4-fb79-4485-8acd-2402db02bd53)
