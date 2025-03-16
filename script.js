let products = [
  {
    name: "Warrior T-shert",
    headline: "Summer Clothes Fashion 2024 / 2025",
    price: "229 $",
    src: "https://branded-tshirts.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwpytzyki%2Fimage%2Fupload%2Fv1688657793%2Fwarrior_king_half_sleeve_t_shirt_521400_1658427832_1_1_51a72e516e.webp&w=384&q=75",
  },
  {
    name: "Funky Tom T-shert",
    headline: "Funky Tom Design T-Shirt",
    price: "249 $",
    src: "https://classyaf.pk/cdn/shop/files/photo-output_2_2_8e7b19b2-2001-49eb-a26b-752135b414ed.jpg?v=1716223175&width=1946",
  },
  {
    name: "Anime T-shert",
    headline: "Anime Character Print On Demand Items ",
    price: "139 $",
    src: "https://branded-tshirts.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwpytzyki%2Fimage%2Fupload%2Fv1688657650%2Fmen_s_blue_flame_hashira_graphic_printed_oversized_t_shirt_602548_1688380248_1_1_5c873e271f.webp&w=384&q=75",
  },
  {
    name: "Blue Duck T-shert",
    headline: "Print On Demand Items 2024 / 2025",
    price: "145 $",
    src: "https://branded-tshirts.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwpytzyki%2Fimage%2Fupload%2Fv1688657442%2Fmen_s_grey_skater_donald_graphic_printed_oversized_t_shirt_602558_1688380650_1_1_75910c8592.webp&w=384&q=75",
  },
  {
    name: "Spiderman T-shert",
    headline: "Spider Man T-Shirt Top Rated  Items 2024",
    price: "199 $",
    src: "https://branded-tshirts.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwpytzyki%2Fimage%2Fupload%2Fv1688653878%2Fmen_s_black_across_the_spiderverse_graphic_printed_oversized_t_shirt_599555_1687765574_1_1_3dbcfcca1a.webp&w=384&q=75",
  },
];

let popular = [
  {
    name: "Warrior T-shert",
    headline: "T-shirt Printed  Premium Soft",
    price: "299 $",
    src: "https://trex.com.pk/uploads/trex/E7zzpepLUl6Y6NXzb2l8MIi3cQSf9gm8OSQDkQkM.jpg",
  },
  {
    name: "Funky Tom T-shert",
    headline: "Halved Veratile Sport T-Shirt ",
    price: "199 $",
    src: "https://trex.com.pk/uploads/trex/tb8fyTMMIFUx5k4nLbz6PNLFmiIx18KQs6HXyIC7.jpg",
  },
  {
    name: "Anime T-shert",
    headline: "Anime Character Print On Demand Items 2024.",
    price: "139 $",
    src: "https://branded-tshirts.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwpytzyki%2Fimage%2Fupload%2Fv1688657650%2Fmen_s_blue_flame_hashira_graphic_printed_oversized_t_shirt_602548_1688380248_1_1_5c873e271f.webp&w=384&q=75",
  },
  {
    name: "Blue Duck T-shert",
    headline: "Print On Demand Items 2024 / 2025",
    price: "145 $",
    src: "https://branded-tshirts.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwpytzyki%2Fimage%2Fupload%2Fv1688657442%2Fmen_s_grey_skater_donald_graphic_printed_oversized_t_shirt_602558_1688380650_1_1_75910c8592.webp&w=384&q=75",
  },
  {
    name: "Spiderman T-shert",
    headline: "Spider Man T-Shirt Top Rated  Items 2024",
    price: "199 $",
    src: "https://branded-tshirts.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwpytzyki%2Fimage%2Fupload%2Fv1688653878%2Fmen_s_black_across_the_spiderverse_graphic_printed_oversized_t_shirt_599555_1687765574_1_1_3dbcfcca1a.webp&w=384&q=75",
  },
];

let cart = [];

function showProducts() {
  let clutter = "";
  products.forEach(function (element, index) {
    clutter += `<div class="product">
          <img src="${element.src}" alt="" />
          <h3>${element.name}</h3>
          <h4>${element.headline}</h4>
          <h2>${element.price}</h2>
          <button data-index='${index}' class="cart-btn">Add To Cart</button>
        </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}

// Function to display popular items
function showPopular() {
  let clutter = "";
  popular.forEach(function (popItem) {
    clutter += `<div class="pop-items">
          <img src="${popItem.src}" alt="" />
          <div id="text">
            <h3>${popItem.name}</h3>
            <h3>${popItem.headline}</h3>
            <h3>${popItem.price}</h3>
          </div>
        </div>`;
  });
  document.querySelector(".popular").innerHTML = clutter;
}

function search() {
  let input = document.querySelector("input");

  input.addEventListener("input", function () {
    let value = input.value.toLocaleLowerCase();
    let result = products.filter(function (e) {
      return (
        e.name.toLocaleLowerCase().startsWith(value) ||
        e.headline.toLocaleLowerCase().includes(value)
      );
    });

    let clutter = "";

    result.forEach(function (element, index) {
      // Added index parameter here
      clutter += `<div class="product">
          <img src="${element.src}" alt="" />
          <h3>${element.name}</h3>
          <h4>${element.headline}</h4>
          <h2>${element.price}</h2>
          <button data-index='${index}' class="cart-btn">Add To Cart</button>
        </div>`;
    });

    document.querySelector(".products").innerHTML = clutter;

    // Optional: Display a message if no results found
    if (result.length === 0) {
      document.querySelector(".products").innerHTML =
        "<p>No products found.</p>";
    }
  });
}

search();
function addToCar() {
  document
    .querySelector(".products")
    .addEventListener("click", function (product) {
      if (product.target.classList.contains("cart-btn")) {
        cart.push(products[product.target.dataset.index]);
      }
    });
}
function showCart() {
  const cartButton = document.querySelector(".cart-i"); // The button to view the cart
  const cartItemsContainer = document.querySelector(".cart-items"); // The cart items container

  cartButton.addEventListener("click", function () {
    // Check current display status and toggle
    if (cartItemsContainer.style.display === "block") {
      cartItemsContainer.style.display = "none"; // Hide cart if it is currently displayed
    } else {
      cartItemsContainer.style.display = "block"; // Show cart if it is currently hidden

      // Populate cart items
      let clutter = "";
      cart.forEach(function (prod) {
        clutter += `<div class="c-items">
            <div class="item-left">
              <img src="${prod.src}" alt="" />
            </div>
            <div class="item-right">
              <h3>${prod.name}</h3>
              <h4>${prod.headline}</h4>
              <h3>${prod.price}</h3>
            </div>
          </div>`;
      });

      cartItemsContainer.innerHTML = clutter; // Update cart items display
    }
  });
}

showProducts();
showPopular();
showCart();
addToCar();
