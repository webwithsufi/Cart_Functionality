# Cart Functionality Website

This project is a simple e-commerce website demonstrating cart functionality using HTML, CSS, and JavaScript. It features a product display, popular items section, search functionality, and a shopping cart.

**Live Demo:** [https://webwithsufi.github.io/Cart_Functionality/](https://webwithsufi.github.io/Cart_Functionality/)

## Features

-   **Product Display:** Shows a list of products with images, names, headlines, prices, and an "Add to Cart" button.
-   **Popular Items:** Displays a section of popular items.
-   **Search Functionality:** Allows users to search for products by name or headline.
-   **Shopping Cart:** A cart icon that toggles a display of added items.
-   **Responsive Navigation:** A navigation bar with links and a search input.

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript
-   Remix Icon (for cart icon)

## Getting Started

1.  **Clone the repository (if applicable):**

    ```bash
    git clone [repository URL]
    ```

2.  **Open `index.html` in your browser.**

## Project Structure
-   `index.html`: The main HTML file containing the structure of the website.
-   `style.css`: The CSS file for styling the website.
-   `script.js`: The JavaScript file for handling functionality like product display, search, and cart management.
-   `README.md`: This file.

## JavaScript Functionality

-   **`showProducts()`:** Populates the product display with items from the `products` array.
-   **`showPopular()`:** Populates the popular items section with items from the `popular` array.
-   **`search()`:** Implements the search functionality, filtering products based on user input.
-   **`addToCar()`:** Adds selected products to the `cart` array.
-   **`showCart()`:** Toggles the display of the shopping cart and populates it with items from the `cart` array.

## Data Structure

-   **`products` Array:** An array of objects representing products, each with `name`, `headline`, `price`, and `src` (image source).
-   **`popular` Array:** An array of objects representing popular items, similar to the `products` array.
-   **`cart` Array:** An array to store the products added to the cart.

## Customization

-   **Adding/Modifying Products:** Modify the `products` and `popular` arrays in `script.js` to add or change product information.
-   **Styling:** Customize the appearance of the website by modifying the `style.css` file.
-   **Adding Functionality:** Extend the functionality by modifying the `script.js` file, such as adding quantity adjustments in the cart or implementing a checkout process.

## Improvements

-   Implement quantity adjustments in the cart.
-   Add a checkout process.
-   Improve the search functionality with more advanced filtering.
-   Add responsive design for various screen sizes.
-   Implement local storage for the cart to persist data.
-   Add more detailed product pages.
-   Add ability to remove items from cart.

## Author

-   Sufyan ali khan

## License

This project is licensed under the [MIT License](LICENSE) - see the `LICENSE.md` file for details. (If you have a license file.)
