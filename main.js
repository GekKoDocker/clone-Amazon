const products = [
    {
      id: 1,
      name: "Laptop",
      description: "A powerful laptop with a fast processor and large storage capacity.",
      category: "Electronics",
      price: 899.99,
      image: "https://via.placeholder.com/150x150"
    },
    {
      id: 2,
      name: "Smartphone",
      description: "A sleek smartphone with a high-resolution screen and fast internet connectivity.",
      category: "Electronics",
      price: 699.99,
      image: "https://via.placeholder.com/150x150"
    },
    // {
    //     id: 3,
    //     name: "Perfume",
    //     description: "A fragrant perfume with a long-lasting scent.",
    //     category: "Beauty",
    //     price: 49.99,
    //     image: "https://via.placeholder.com/150x150"
    //   },
    {
      id: 4,
      name: "Lipstick",
      description: " A vibrant lipstick with a smooth, moisturizing formula.",
      category: "Beauty",
      price: 14.99,
      image: "https://via.placeholder.com/150x150"
    },
    {
      id: 5,
      name: "Toothbrush",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      category: "Health",
      price: 4.99,
      image: "https://via.placeholder.com/150x150"
    }
  ];
  
  const productsList = document.getElementById("products-list");
  
  products.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span>${product.price} $</span>
      <button>Add to cart</button>
    `;
    productsList.appendChild(productItem);
  });
  
  // search button
  function searchProducts() {
    // Get the search input value
    var searchQuery = document.getElementById("search-input").value;
    
    // Get the product list
    var productList = document.getElementById("product-list");
    
    // Get all the product items in the list
    var productItems = productList.getElementsByTagName("li");
    
    // Loop through all the product items and hide/show them based on the search query
    for (var i = 0; i < productItems.length; i++) {
      var productItem = productItems[i];
      var productName = productItem.getElementsByTagName("h3")[0].textContent;
      
      if (productName.toLowerCase().includes(searchQuery.toLowerCase())) {
        productItem.style.display = "";
      } else {
        productItem.style.display = "none";
      }
    }
  }
  