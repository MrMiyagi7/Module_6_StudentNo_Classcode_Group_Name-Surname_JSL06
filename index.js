const menu = {
  Starters: [
    { dish: "Garlic Bread", price: 60 },
    { dish: "Bruschetta", price: 60 },
  ],
  MainCourses: [
    { dish: "Margherita Pizza", price: 60 },
    { dish: "Spaghetti Carbonara", price: 60 },
  ],
  Desserts: [
    { dish: "Tiramisu", price: 60 },
    { dish: "Cheesecake", price: 60 },
  ],
};

// Function to display menu items by category
function displayMenuItems(menu) {
  const menuContainer = document.querySelector("#menu");

  // Loop through each category and its items in the menu object
  Object.entries(menu).forEach(([key, value]) => {
    let category = document.createElement("h2");
    category.textContent = key;
    menuContainer.appendChild(category);
    let list = document.createElement("ul");
    menuContainer.appendChild(list);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
