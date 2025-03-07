// Restaurant Data
const restaurants = [
    {
        id: 1,
        name: "Burger King",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600",
        rating: 4.2,
        cuisines: ["Burgers", "American", "Fast Food"],
        deliveryTime: "25-30",
        priceForTwo: 20,
        promoted: true,
        offers: ["50% off up to $10", "Free delivery"],
        menu: [
            {
                id: "bk1",
                name: "Whopper",
                description: "Signature flame-grilled beef patty with tomatoes, lettuce, mayo",
                price: 5.99,
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
                category: "Bestsellers",
                veg: false,
                bestseller: true
            },
            {
                id: "bk2",
                name: "Chicken Royale",
                description: "Crispy chicken fillet with lettuce and creamy mayo",
                price: 4.99,
                image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=300",
                category: "Burgers",
                veg: false
            },
            {
                id: "bk3",
                name: "Veg Burger",
                description: "Plant-based patty with fresh vegetables",
                price: 4.49,
                image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=300",
                category: "Veg Options",
                veg: true
            },
            {
                id: "bk4",
                name: "French Fries",
                description: "Crispy golden fries with seasoning",
                price: 2.49,
                image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
                category: "Sides",
                veg: true
            }
        ]
    },
    {
        id: 2,
        name: "McDonald's",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600",
        rating: 4.1,
        cuisines: ["Burgers", "Fast Food"],
        deliveryTime: "20-25",
        priceForTwo: 18,
        promoted: false,
        offers: ["20% off on combos"],
        menu: [
            {
                id: "mc1",
                name: "Big Mac",
                description: "Two all-beef patties, special sauce, lettuce, cheese",
                price: 4.99,
                image: "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?w=300",
                category: "Bestsellers",
                veg: false,
                bestseller: true
            },
            {
                id: "mc2",
                name: "McChicken",
                description: "Crispy chicken patty with shredded lettuce",
                price: 3.99,
                image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=300",
                category: "Burgers",
                veg: false
            },
            {
                id: "mc3",
                name: "Happy Meal",
                description: "Kids meal with toy, burger, fries and drink",
                price: 5.99,
                image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=300",
                category: "Kids Menu",
                veg: false
            },
            {
                id: "mc4",
                name: "McFlurry with Oreo",
                description: "Vanilla soft serve with Oreo cookie pieces",
                price: 3.99,
                image: "https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?w=300",
                category: "Desserts",
                veg: true
            },
            {
                id: "mc5",
                name: "Apple Pie",
                description: "Crispy pastry filled with warm apple filling",
                price: 1.99,
                image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=300",
                category: "Desserts",
                veg: true
            }
        ]
    },
    {
        id: 3,
        name: "KFC",
        image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=600",
        rating: 4.3,
        cuisines: ["Chicken", "Fast Food"],
        deliveryTime: "30-35",
        priceForTwo: 22,
        promoted: true,
        offers: ["Free chicken wings on orders above $30"],
        menu: [
            {
                id: "kfc1",
                name: "Bucket for Two",
                description: "8 pieces of signature fried chicken",
                price: 15.99,
                image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300",
                category: "Bestsellers",
                veg: false,
                bestseller: true
            },
            {
                id: "kfc2",
                name: "Zinger Burger",
                description: "Spicy chicken fillet burger with lettuce",
                price: 5.99,
                image: "https://images.unsplash.com/photo-1624238771244-157c58a28910?w=300",
                category: "Burgers",
                veg: false
            },
            {
                id: "kfc3",
                name: "Hot Wings",
                description: "6 pieces of spicy chicken wings",
                price: 6.99,
                image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300",
                category: "Chicken",
                veg: false
            }
        ]
    },
    {
        id: 4,
        name: "Domino's Pizza",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600",
        rating: 4.0,
        cuisines: ["Pizza", "Italian"],
        deliveryTime: "30-40",
        priceForTwo: 25,
        promoted: false,
        offers: ["Buy 1 Get 1 on Medium Pizzas"],
        menu: [
            {
                id: "dom1",
                name: "Pepperoni Pizza",
                description: "Classic pepperoni with mozzarella",
                price: 12.99,
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300",
                category: "Bestsellers",
                veg: false,
                bestseller: true
            },
            {
                id: "dom2",
                name: "Margherita",
                description: "Fresh tomatoes, mozzarella, and basil",
                price: 10.99,
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300",
                category: "Veg Pizza",
                veg: true
            },
            {
                id: "dom3",
                name: "Garlic Breadsticks",
                description: "Freshly baked breadsticks with garlic butter",
                price: 4.99,
                image: "https://images.unsplash.com/photo-1619531040576-f9416740661c?w=300",
                category: "Sides",
                veg: true
            },
            {
                id: "dom4",
                name: "Chocolate Lava Cake",
                description: "Warm chocolate cake with molten center",
                price: 4.99,
                image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=300",
                category: "Desserts",
                veg: true
            },
            {
                id: "dom5",
                name: "Cinnamon Bread Twists",
                description: "Fresh-baked twists with cinnamon sugar",
                price: 3.99,
                image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=300",
                category: "Desserts",
                veg: true
            }
        ]
    },
    {
        id: 5,
        name: "Faasos",
        image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=600",
        rating: 4.2,
        cuisines: ["Wraps", "Indian", "Fast Food"],
        deliveryTime: "35-40",
        priceForTwo: 15,
        promoted: true,
        offers: ["30% off on first order"],
        menu: [
            {
                id: "fa1",
                name: "Chicken Tikka Wrap",
                description: "Grilled chicken tikka with mint chutney",
                price: 6.99,
                image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300",
                category: "Bestsellers",
                veg: false,
                bestseller: true
            },
            {
                id: "fa2",
                name: "Paneer Wrap",
                description: "Spiced cottage cheese with vegetables",
                price: 5.99,
                image: "https://images.unsplash.com/photo-1631515243349-e0cb5ca9d9f6?w=300",
                category: "Veg Wraps",
                veg: true
            },
            {
                id: "fa3",
                name: "Masala Fries",
                description: "French fries tossed in Indian spices",
                price: 2.99,
                image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300",
                category: "Sides",
                veg: true
            }
        ]
    },
    {
        id: 6,
        name: "Barbeque Nation",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
        rating: 4.4,
        cuisines: ["BBQ", "North Indian", "Chinese"],
        deliveryTime: "45-50",
        priceForTwo: 40,
        promoted: false,
        offers: ["15% off on weekdays"],
        menu: [
            {
                id: "bn1",
                name: "Mixed Grill Platter",
                description: "Assorted grilled meats and vegetables",
                price: 24.99,
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
                category: "Bestsellers",
                veg: false,
                bestseller: true
            },
            {
                id: "bn2",
                name: "Tandoori Chicken",
                description: "Classic clay oven roasted chicken",
                price: 14.99,
                image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300",
                category: "Grills",
                veg: false
            },
            {
                id: "bn3",
                name: "Paneer Tikka",
                description: "Grilled cottage cheese with spices",
                price: 12.99,
                image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300",
                category: "Veg Grills",
                veg: true
            }
        ]
    },
    {
        id: 7,
        name: "Baskin Robbins",
        image: "https://images.unsplash.com/photo-1534706936160-d5ee67737249?w=600",
        rating: 4.5,
        cuisines: ["Ice Cream", "Desserts"],
        deliveryTime: "15-20",
        priceForTwo: 12,
        promoted: true,
        offers: ["Buy 2 Get 1 Free on Scoops"],
        menu: [
            {
                id: "br1",
                name: "Chocolate Chip Cookie Dough",
                description: "Vanilla ice cream with chunks of chocolate chip cookie dough",
                price: 4.99,
                image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300",
                category: "Bestsellers",
                veg: true,
                bestseller: true
            },
            {
                id: "br2",
                name: "Triple Chocolate Sundae",
                description: "Three scoops of chocolate ice cream with hot fudge and brownie",
                price: 7.99,
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300",
                category: "Sundaes",
                veg: true
            },
            {
                id: "br3",
                name: "Berry Blast",
                description: "Mixed berry ice cream with fresh strawberries",
                price: 5.99,
                image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300",
                category: "Fruit Flavors",
                veg: true
            }
        ]
    },
    {
        id: 8,
        name: "The Cheesecake Factory",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
        rating: 4.7,
        cuisines: ["Desserts", "Cakes"],
        deliveryTime: "30-35",
        priceForTwo: 25,
        promoted: true,
        offers: ["20% off on first order"],
        menu: [
            {
                id: "cf1",
                name: "Original Cheesecake",
                description: "Classic New York style cheesecake",
                price: 8.99,
                image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300",
                category: "Bestsellers",
                veg: true,
                bestseller: true
            },
            {
                id: "cf2",
                name: "Oreo Dream Extreme",
                description: "Oreo cookies baked in cheesecake with layers of fudge",
                price: 9.99,
                image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?w=300",
                category: "Specialty Cheesecakes",
                veg: true
            },
            {
                id: "cf3",
                name: "Red Velvet Cake",
                description: "Classic red velvet cake with cream cheese frosting",
                price: 7.99,
                image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=300",
                category: "Cakes",
                veg: true
            }
        ]
    },
    {
        id: 9,
        name: "Belgian Waffle Co",
        image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=600",
        rating: 4.3,
        cuisines: ["Desserts", "Waffles"],
        deliveryTime: "25-30",
        priceForTwo: 15,
        promoted: false,
        offers: ["Free topping on orders above $20"],
        menu: [
            {
                id: "bw1",
                name: "Nutella Banana Waffle",
                description: "Belgian waffle topped with Nutella and fresh bananas",
                price: 6.99,
                image: "https://images.unsplash.com/photo-1598215439218-f79b46925d5d?w=300",
                category: "Bestsellers",
                veg: true,
                bestseller: true
            },
            {
                id: "bw2",
                name: "Dark Chocolate Waffle",
                description: "Dark chocolate waffle with chocolate sauce and ice cream",
                price: 7.99,
                image: "https://images.unsplash.com/photo-1593786481097-cf281dd12e9e?w=300",
                category: "Chocolate Waffles",
                veg: true
            },
            {
                id: "bw3",
                name: "Berry Blast Waffle",
                description: "Mixed berry compote with whipped cream",
                price: 8.99,
                image: "https://images.unsplash.com/photo-1562867929-501b08c09c90?w=300",
                category: "Fruit Waffles",
                veg: true
            }
        ]
    }
];

// Cart Management
let cart = {
    items: {},
    restaurant: null
};

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('foodhub_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('foodhub_cart', JSON.stringify(cart));
    updateCartUI();
}

// Add item to cart
function addToCart(restaurantId, item) {
    // Check if item is from different restaurant
    if (cart.restaurant && cart.restaurant !== restaurantId) {
        if (!confirm('Adding items from a different restaurant will clear your current cart. Continue?')) {
            return;
        }
        cart.items = {};
    }
    
    cart.restaurant = restaurantId;
    if (cart.items[item.id]) {
        cart.items[item.id].quantity += 1;
    } else {
        cart.items[item.id] = {
            ...item,
            quantity: 1
        };
    }
    saveCart();
}

// Remove item from cart
function removeFromCart(itemId) {
    if (cart.items[itemId]) {
        if (cart.items[itemId].quantity > 1) {
            cart.items[itemId].quantity -= 1;
        } else {
            delete cart.items[itemId];
        }
        if (Object.keys(cart.items).length === 0) {
            cart.restaurant = null;
        }
        saveCart();
    }
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Update cart count
    const totalItems = Object.values(cart.items).reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cartItems) {
        cartItems.innerHTML = '';
        let total = 0;

        Object.values(cart.items).forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item flex justify-between items-center p-4 border-b';
            itemElement.innerHTML = `
                <div>
                    <h4 class="font-semibold">${item.name}</h4>
                    <p class="text-gray-600">$${item.price.toFixed(2)}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="removeFromCart('${item.id}')" class="quantity-btn">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="addToCart(${cart.restaurant}, ${JSON.stringify(item)})" class="quantity-btn">+</button>
                </div>
            `;
            cartItems.appendChild(itemElement);
        });

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

// Render Restaurants
function renderRestaurants(restaurants) {
    const grid = document.getElementById('restaurant-grid');
    grid.innerHTML = '';

    restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <div class="restaurant-image">
                <img src="${restaurant.image}" alt="${restaurant.name}">
                ${restaurant.promoted ? '<span class="absolute top-2 left-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white px-2 py-1 rounded text-sm">Promoted</span>' : ''}
            </div>
            <div class="restaurant-info">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-semibold">${restaurant.name}</h3>
                    <span class="rating-badge flex items-center">
                        ${restaurant.rating} <i class="fas fa-star ml-1"></i>
                    </span>
                </div>
                <div class="cuisine-tags">
                    ${restaurant.cuisines.map(cuisine => `
                        <span class="cuisine-tag">${cuisine}</span>
                    `).join('')}
                </div>
                <div class="flex justify-between items-center mt-4 text-sm text-gray-600">
                    <span><i class="far fa-clock mr-1"></i>${restaurant.deliveryTime} min</span>
                    <span>$${restaurant.priceForTwo} for two</span>
                </div>
                ${restaurant.offers.length ? `
                    <div class="mt-3 pt-3 border-t">
                        <p class="text-red-500 text-sm">
                            <i class="fas fa-tag mr-1"></i>${restaurant.offers[0]}
                        </p>
                    </div>
                ` : ''}
            </div>
        `;
        
        // Add click event to open restaurant menu
        card.addEventListener('click', () => showRestaurantMenu(restaurant));
        grid.appendChild(card);
    });
}

// Show Restaurant Menu
function showRestaurantMenu(restaurant) {
    // Create and show modal with menu
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 overflow-y-auto';
    modal.innerHTML = `
        <div class="fixed inset-0 bg-black bg-opacity-50"></div>
        <div class="relative min-h-screen flex items-center justify-center p-4">
            <div class="relative bg-white rounded-lg shadow-xl max-w-4xl w-full">
                <div class="p-6">
                    <div class="flex justify-between items-start">
                        <div>
                            <h2 class="text-2xl font-bold">${restaurant.name}</h2>
                            <p class="text-gray-600">${restaurant.cuisines.join(', ')}</p>
                            <div class="flex items-center mt-2">
                                <span class="rating-badge mr-3">${restaurant.rating} <i class="fas fa-star ml-1"></i></span>
                                <span class="text-gray-600"><i class="far fa-clock mr-1"></i>${restaurant.deliveryTime} min</span>
                            </div>
                        </div>
                        <button class="close-menu text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>

                    <!-- Menu Categories -->
                    <div class="mt-6">
                        <div class="border-b border-gray-200">
                            <nav class="flex space-x-8" aria-label="Menu Categories">
                                ${Array.from(new Set(restaurant.menu.map(item => item.category))).map(category => `
                                    <button class="menu-category-btn border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-red-500 hover:text-red-500">
                                        ${category}
                                    </button>
                                `).join('')}
                            </nav>
                        </div>

                        <!-- Menu Items -->
                        <div class="mt-6 space-y-6">
                            ${Array.from(new Set(restaurant.menu.map(item => item.category))).map(category => `
                                <div class="menu-category" data-category="${category}">
                                    <h3 class="text-lg font-semibold mb-4">${category}</h3>
                                    <div class="space-y-4">
                                        ${restaurant.menu.filter(item => item.category === category).map(item => `
                                            <div class="menu-item">
                                                <div class="menu-item-image">
                                                    <img src="${item.image}" alt="${item.name}">
                                                    ${item.veg ? 
                                                        '<span class="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">Veg</span>' : 
                                                        '<span class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">Non-Veg</span>'
                                                    }
                                                </div>
                                                <div class="menu-item-info">
                                                    <div class="flex justify-between items-start">
                                                        <div>
                                                            <h4 class="font-semibold">${item.name}</h4>
                                                            <p class="text-gray-600 text-sm">${item.description}</p>
                                                        </div>
                                                        ${item.bestseller ? 
                                                            '<span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Bestseller</span>' : 
                                                            ''
                                                        }
                                                    </div>
                                                    <div class="flex justify-between items-center mt-2">
                                                        <p class="text-red-500 font-semibold">$${item.price.toFixed(2)}</p>
                                                        <button onclick="addToCart(${restaurant.id}, ${JSON.stringify(item)})" 
                                                                class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                                                            Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Handle menu category switching
    const categoryBtns = modal.querySelectorAll('.menu-category-btn');
    const menuCategories = modal.querySelectorAll('.menu-category');
    
    categoryBtns[0].classList.add('border-red-500', 'text-red-500');
    menuCategories[0].classList.add('active');
    
    categoryBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Update button styles
            categoryBtns.forEach(b => b.classList.remove('border-red-500', 'text-red-500'));
            btn.classList.add('border-red-500', 'text-red-500');
            
            // Show selected category
            const category = btn.textContent.trim();
            menuCategories.forEach(cat => {
                if (cat.dataset.category === category) {
                    cat.style.display = 'block';
                } else {
                    cat.style.display = 'none';
                }
            });
        });
    });

    // Close menu modal
    modal.querySelector('.close-menu').addEventListener('click', () => {
        modal.remove();
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // User menu toggle
    const userBtn = document.getElementById('user-btn');
    const userDropdown = document.querySelector('.user-dropdown');
    userBtn.addEventListener('click', () => {
        userDropdown.classList.toggle('hidden');
    });

    // Cart modal
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');

    cartBtn.addEventListener('click', () => {
        cartModal.classList.remove('hidden');
    });

    closeCart.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });

    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.textContent;
            if (category === 'All') {
                renderRestaurants(restaurants);
            } else {
                const filtered = restaurants.filter(r => 
                    r.cuisines.some(c => c.toLowerCase() === category.toLowerCase())
                );
                renderRestaurants(filtered);
            }
        });
    });

    // Initialize
    loadCart();
    renderRestaurants(restaurants);
});
