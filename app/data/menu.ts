export type Category =
  | "fried"
  | "grilled"
  | "combos"
  | "sides"
  | "drinks";

export type MenuItem = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  calories: number;
  ingredients: string[];
  bestSeller?: boolean;
  promotion?: string;
};

export const categories: { key: Category; label: string }[] = [
  { key: "fried", label: "Fried Chicken" },
  { key: "grilled", label: "Grilled" },
  { key: "combos", label: "Combos" },
  { key: "sides", label: "Sides" },
  { key: "drinks", label: "Drinks" },
];

const mk = (
  id: string,
  name: string,
  category: Category,
  price: number,
  image: string,
  description: string,
  calories: number,
  ingredients: string[],
  extras?: Partial<MenuItem>
): MenuItem => ({
  id,
  slug: id,
  name,
  category,
  price,
  image: "/test.jpg",
  description,
  calories,
  ingredients,
  ...extras,
});

export const menu: MenuItem[] = [
  mk(
    "crispy-classic",
    "Crispy Classic",
    "fried",
    7.99,
    "/test.jpg",
    "Golden fried chicken with signature seasoning.",
    650,
    ["Chicken", "Flour", "Spices", "Oil"],
    { bestSeller: true }
  ),
  mk(
    "spicy-crunch",
    "Spicy Crunch",
    "fried",
    8.49,
    "https://images.unsplash.com/photo-1606756790138-460a1a8f8f32?q=80&w=1600&auto=format&fit=crop",
    "Extra-crispy spicy chicken with chili glaze.",
    680,
    ["Chicken", "Chili", "Garlic", "Oil"]
  ),
  mk(
    "honey-garlic-wings",
    "Honey Garlic Wings",
    "fried",
    9.99,
    "https://images.unsplash.com/photo-1625947640383-1a78f9d81f3a?q=80&w=1600&auto=format&fit=crop",
    "Sweet and savory honey-garlic glazed wings.",
    720,
    ["Chicken Wings", "Honey", "Garlic", "Soy"]
  ),
  mk(
    "buttermilk-tenders",
    "Buttermilk Tenders",
    "fried",
    8.99,
    "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop",
    "Juicy tenders marinated in buttermilk.",
    610,
    ["Chicken", "Buttermilk", "Flour", "Spices"]
  ),
  mk(
    "garlic-parmesan-bites",
    "Garlic Parmesan Bites",
    "fried",
    7.49,
    "https://images.unsplash.com/photo-1562967915-90b6a3b38aa7?q=80&w=1600&auto=format&fit=crop",
    "Fried bites tossed in garlic-parmesan butter.",
    590,
    ["Chicken", "Garlic", "Parmesan", "Butter"]
  ),
  mk(
    "smoky-grilled-breast",
    "Smoky Grilled Breast",
    "grilled",
    10.99,
    "https://images.unsplash.com/photo-1604908553914-5c5af1fefc7b?q=80&w=1600&auto=format&fit=crop",
    "Char-grilled chicken breast with smoky rub.",
    520,
    ["Chicken Breast", "Paprika", "Garlic", "Olive Oil"],
    { bestSeller: true }
  ),
  mk(
    "lemon-herb-thighs",
    "Lemon Herb Thighs",
    "grilled",
    9.99,
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop",
    "Citrus and herbs bring bright flavors.",
    540,
    ["Thighs", "Lemon", "Parsley", "Thyme"]
  ),
  mk(
    "peri-peri-half",
    "Peri-Peri Half Chicken",
    "grilled",
    13.99,
    "https://images.unsplash.com/photo-1607013634966-79f27cfb5e5a?q=80&w=1600&auto=format&fit=crop",
    "Fiery peri-peri grilled half chicken.",
    780,
    ["Chicken", "Peri-Peri", "Garlic", "Vinegar"]
  ),
  mk(
    "bbq-leg-quarter",
    "BBQ Leg Quarter",
    "grilled",
    10.49,
    "https://images.unsplash.com/photo-1601050693613-7b26fa93d4a0?q=80&w=1600&auto=format&fit=crop",
    "Smoky barbecue glazed leg quarter.",
    610,
    ["Leg Quarter", "BBQ Sauce", "Brown Sugar", "Spices"]
  ),
  mk(
    "harissa-skewers",
    "Harissa Skewers",
    "grilled",
    11.49,
    "https://images.unsplash.com/photo-1512058564366-18510be2dfaa?q=80&w=1600&auto=format&fit=crop",
    "Spicy harissa chicken skewers with peppers.",
    560,
    ["Chicken", "Harissa", "Bell Pepper", "Olive Oil"]
  ),
  mk(
    "classic-combo",
    "Classic Combo",
    "combos",
    12.99,
    "https://images.unsplash.com/photo-1605276374500-cfc00a35af3a?q=80&w=1600&auto=format&fit=crop",
    "Two fried pieces, fries, slaw, drink.",
    980,
    ["Chicken", "Fries", "Slaw", "Soda"],
    { bestSeller: true }
  ),
  mk(
    "family-feast",
    "Family Feast",
    "combos",
    29.99,
    "https://images.unsplash.com/photo-1495197359483-d092478c170a?q=80&w=1600&auto=format&fit=crop",
    "10-piece mixed chicken, 2 sides, 4 drinks.",
    3150,
    ["Chicken", "Sides", "Drinks"],
    { promotion: "Save 10%" }
  ),
  mk(
    "grill-n-greens",
    "Grill & Greens",
    "combos",
    14.99,
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
    "Grilled chicken breast, salad, vinaigrette, water.",
    720,
    ["Chicken Breast", "Salad", "Vinaigrette", "Water"]
  ),
  mk(
    "wing-party-box",
    "Wing Party Box",
    "combos",
    24.99,
    "https://images.unsplash.com/photo-1512621776951-61b13c8ab128?q=80&w=1600&auto=format&fit=crop",
    "24 glazed wings with two sauces, fries.",
    2680,
    ["Chicken Wings", "Sauces", "Fries"]
  ),
  mk(
    "tenders-n-mac",
    "Tenders & Mac",
    "combos",
    13.49,
    "https://images.unsplash.com/photo-1543332164-6e88f58af1e5?q=80&w=1600&auto=format&fit=crop",
    "Buttermilk tenders with creamy mac & cheese.",
    1150,
    ["Chicken Tenders", "Macaroni", "Cheese", "Milk"]
  ),
  mk(
    "seasoned-fries",
    "Seasoned Fries",
    "sides",
    3.99,
    "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1600&auto=format&fit=crop",
    "Crispy fries with paprika-salt.",
    320,
    ["Potatoes", "Salt", "Paprika", "Oil"]
  ),
  mk(
    "creamy-slaw",
    "Creamy Slaw",
    "sides",
    3.99,
    "https://images.unsplash.com/photo-1523987357397-3eb3b344ded4?q=80&w=1600&auto=format&fit=crop",
    "Tangy slaw with creamy dressing.",
    210,
    ["Cabbage", "Carrot", "Mayonnaise", "Vinegar"]
  ),
  mk(
    "buttery-corn",
    "Buttery Corn",
    "sides",
    3.49,
    "https://images.unsplash.com/photo-1511690078903-7cd39e0b9892?q=80&w=1600&auto=format&fit=crop",
    "Corn on the cob with melted butter.",
    190,
    ["Corn", "Butter", "Salt"]
  ),
  mk(
    "mac-and-cheese",
    "Mac and Cheese",
    "sides",
    4.49,
    "https://images.unsplash.com/photo-1603079537323-cfbc236b7399?q=80&w=1600&auto=format&fit=crop",
    "Creamy baked macaroni and cheese.",
    480,
    ["Macaroni", "Cheese", "Milk", "Butter"]
  ),
  mk(
    "garlic-bread",
    "Garlic Bread",
    "sides",
    2.99,
    "https://images.unsplash.com/photo-1523987356390-2f3c932a1f25?q=80&w=1600&auto=format&fit=crop",
    "Toasted baguette with garlic butter.",
    260,
    ["Bread", "Garlic", "Butter", "Parsley"]
  ),
  mk(
    "cola",
    "Classic Cola",
    "drinks",
    1.99,
    "https://images.unsplash.com/photo-1565549623077-16d7f6b5b393?q=80&w=1600&auto=format&fit=crop",
    "Refreshing soda served cold.",
    140,
    ["Carbonated Water", "Sugar", "Flavor"]
  ),
  mk(
    "sparkling-water",
    "Sparkling Water",
    "drinks",
    1.49,
    "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1600&auto=format&fit=crop",
    "Bubbly water with lemon wedge.",
    0,
    ["Water", "CO₂", "Lemon"]
  ),
  mk(
    "iced-tea",
    "Iced Tea",
    "drinks",
    1.99,
    "https://images.unsplash.com/photo-1488908314367-2b7f6d1a6d2a?q=80&w=1600&auto=format&fit=crop",
    "House-brewed black tea on ice.",
    60,
    ["Tea", "Sugar", "Ice"]
  ),
  mk(
    "mango-lemonade",
    "Mango Lemonade",
    "drinks",
    2.49,
    "https://images.unsplash.com/photo-1563376082-4bab3f0c3eb9?q=80&w=1600&auto=format&fit=crop",
    "Sweet mango lemonade, pulpy and bright.",
    120,
    ["Mango", "Lemon", "Sugar", "Water"]
  ),
  mk(
    "strawberry-shake",
    "Strawberry Shake",
    "drinks",
    3.49,
    "https://images.unsplash.com/photo-1558954157-8a1ef863df33?q=80&w=1600&auto=format&fit=crop",
    "Creamy shake with fresh strawberries.",
    310,
    ["Milk", "Strawberry", "Sugar"]
  ),
  mk(
    "fiery-drumsticks",
    "Fiery Drumsticks",
    "fried",
    8.99,
    "https://images.unsplash.com/photo-1601925038428-26100fd520e4?q=80&w=1600&auto=format&fit=crop",
    "Drumsticks with hot pepper rub.",
    660,
    ["Drumsticks", "Chili", "Garlic", "Oil"]
  ),
  mk(
    "sesame-popcorn",
    "Sesame Popcorn Chicken",
    "fried",
    7.99,
    "https://images.unsplash.com/photo-1511690743690-05383a5dcac6?q=80&w=1600&auto=format&fit=crop",
    "Bite-size chicken tossed in sesame glaze.",
    600,
    ["Chicken", "Sesame", "Soy", "Honey"]
  ),
  mk(
    "karaage-bites",
    "Karaage Bites",
    "fried",
    8.49,
    "https://images.unsplash.com/photo-1601050693904-c12f65f94b98?q=80&w=1600&auto=format&fit=crop",
    "Japanese-style fried chicken with citrus mayo.",
    640,
    ["Chicken", "Soy", "Ginger", "Starch"]
  ),
  mk(
    "glazed-thighs",
    "Glazed Thighs",
    "grilled",
    10.49,
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1600&auto=format&fit=crop",
    "Grilled thighs with soy-honey glaze.",
    560,
    ["Thighs", "Soy", "Honey", "Garlic"]
  ),
  mk(
    "chimichurri-breast",
    "Chimichurri Breast",
    "grilled",
    11.29,
    "https://images.unsplash.com/photo-1541014833251-8e3853af090b?q=80&w=1600&auto=format&fit=crop",
    "Herbaceous chimichurri over juicy breast.",
    530,
    ["Chicken Breast", "Parsley", "Garlic", "Vinegar"]
  ),
  mk(
    "mediterranean-platter",
    "Mediterranean Platter",
    "combos",
    16.49,
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
    "Grilled chicken, hummus, tabbouleh, pita.",
    980,
    ["Chicken", "Hummus", "Parsley", "Pita"]
  ),
  mk(
    "spicy-duo",
    "Spicy Duo",
    "combos",
    13.99,
    "https://images.unsplash.com/photo-1562967915-90b6a3b38aa7?q=80&w=1600&auto=format&fit=crop",
    "Two spicy pieces with fries and drink.",
    1050,
    ["Chicken", "Fries", "Soda"]
  ),
  mk(
    "loaded-fries",
    "Loaded Fries",
    "sides",
    5.49,
    "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop",
    "Fries topped with cheese and chicken bits.",
    530,
    ["Fries", "Cheese", "Chicken"]
  ),
  mk(
    "garden-salad",
    "Garden Salad",
    "sides",
    4.49,
    "https://images.unsplash.com/photo-1512621776951-61b13c8ab128?q=80&w=1600&auto=format&fit=crop",
    "Mixed greens with house vinaigrette.",
    180,
    ["Lettuce", "Tomato", "Cucumber", "Vinaigrette"]
  ),
  mk(
    "cornbread",
    "Cornbread",
    "sides",
    3.99,
    "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?q=80&w=1600&auto=format&fit=crop",
    "Warm cornbread with honey butter.",
    340,
    ["Cornmeal", "Butter", "Honey"]
  ),
  mk(
    "vanilla-shake",
    "Vanilla Shake",
    "drinks",
    3.49,
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1600&auto=format&fit=crop",
    "Classic vanilla milkshake.",
    290,
    ["Milk", "Vanilla", "Sugar"]
  ),
  mk(
    "orange-soda",
    "Orange Soda",
    "drinks",
    1.99,
    "https://images.unsplash.com/photo-1563376860-dc2d35f3f9c2?q=80&w=1600&auto=format&fit=crop",
    "Bright citrus soda.",
    150,
    ["Carbonated Water", "Sugar", "Orange Flavor"]
  ),
  mk(
    "roasted-wings",
    "Roasted Wings",
    "grilled",
    9.99,
    "https://images.unsplash.com/photo-1604897981250-369ea3b4b35a?q=80&w=1600&auto=format&fit=crop",
    "Dry-rub roasted wings, smoky and tender.",
    620,
    ["Wings", "Paprika", "Garlic", "Salt"]
  ),
  mk(
    "teriyaki-skewers",
    "Teriyaki Skewers",
    "grilled",
    10.99,
    "https://images.unsplash.com/photo-1611143667900-d99c37f01b14?q=80&w=1600&auto=format&fit=crop",
    "Sweet teriyaki glazed chicken skewers.",
    580,
    ["Chicken", "Soy", "Sugar", "Ginger"]
  ),
  mk(
    "double-crunch",
    "Double Crunch Box",
    "combos",
    15.49,
    "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop",
    "Three crispy pieces, fries, slaw, drink.",
    1380,
    ["Chicken", "Fries", "Slaw", "Soda"]
  ),
  mk(
    "wing-combo",
    "Wing Combo",
    "combos",
    14.99,
    "https://images.unsplash.com/photo-1604908177077-3955835b2333?q=80&w=1600&auto=format&fit=crop",
    "12 wings, fries, drink.",
    1450,
    ["Chicken Wings", "Fries", "Soda"]
  ),
  mk(
    "spicy-rice",
    "Spicy Rice",
    "sides",
    3.99,
    "https://images.unsplash.com/photo-1528735602780-2552fd6009d1?q=80&w=1600&auto=format&fit=crop",
    "Rice cooked with chili and herbs.",
    260,
    ["Rice", "Chili", "Parsley"]
  ),
  mk(
    "mashed-potatoes",
    "Mashed Potatoes",
    "sides",
    3.99,
    "https://images.unsplash.com/photo-1512058564366-18510be2dfaa?q=80&w=1600&auto=format&fit=crop",
    "Creamy mash with gravy.",
    310,
    ["Potatoes", "Butter", "Milk", "Gravy"]
  ),
  mk(
    "house-lemonade",
    "House Lemonade",
    "drinks",
    2.29,
    "https://images.unsplash.com/photo-1523366833700-c2f8b5eeab1a?q=80&w=1600&auto=format&fit=crop",
    "Freshly squeezed lemon drink.",
    110,
    ["Lemon", "Sugar", "Water"]
  ),
  mk(
    "peach-iced-tea",
    "Peach Iced Tea",
    "drinks",
    2.29,
    "https://images.unsplash.com/photo-1559717874-8a26b3f22a94?q=80&w=1600&auto=format&fit=crop",
    "Black tea infused with peach.",
    80,
    ["Tea", "Peach", "Sugar"]
  ),
  mk(
    "nashville-hot",
    "Nashville Hot",
    "fried",
    9.49,
    "https://images.unsplash.com/photo-1555993539-1732ad33cf3c?q=80&w=1600&auto=format&fit=crop",
    "Spicy Nashville-style fried chicken.",
    700,
    ["Chicken", "Cayenne", "Oil", "Pickles"]
  ),
  mk(
    "jalapeno-poppers",
    "Jalapeño Poppers",
    "sides",
    4.49,
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
    "Cheese-stuffed jalapeños, fried.",
    420,
    ["Jalapeños", "Cheese", "Breadcrumbs"]
  ),
  mk(
    "buffalo-wings",
    "Buffalo Wings",
    "fried",
    9.99,
    "https://images.unsplash.com/photo-1562967915-90b6a3b38aa7?q=80&w=1600&auto=format&fit=crop",
    "Classic buffalo-style wings.",
    740,
    ["Chicken Wings", "Hot Sauce", "Butter"]
  ),
  mk(
    "herb-roasted-quater",
    "Herb Roasted Quarter",
    "grilled",
    10.99,
    "https://images.unsplash.com/photo-1604908553914-5c5af1fefc7b?q=80&w=1600&auto=format&fit=crop",
    "Roasted leg quarter with herbs.",
    600,
    ["Leg Quarter", "Rosemary", "Thyme", "Garlic"]
  ),
  mk(
    "mega-feast",
    "Mega Feast",
    "combos",
    34.99,
    "https://images.unsplash.com/photo-1495197359483-d092478c170a?q=80&w=1600&auto=format&fit=crop",
    "15-piece chicken, 3 sides, 5 drinks.",
    4200,
    ["Chicken", "Sides", "Drinks"],
    { promotion: "Save 15%" }
  ),
  mk(
    "spicy-slaw",
    "Spicy Slaw",
    "sides",
    4.19,
    "https://images.unsplash.com/photo-1523987357397-3eb3b344ded4?q=80&w=1600&auto=format&fit=crop",
    "Slaw with chili flakes.",
    220,
    ["Cabbage", "Carrot", "Chili", "Vinegar"]
  ),
  mk(
    "charcoal-grilled-breast",
    "Charcoal Grilled Breast",
    "grilled",
    11.49,
    "https://images.unsplash.com/photo-1601050693613-7b26fa93d4a0?q=80&w=1600&auto=format&fit=crop",
    "Smoky charcoal-kissed chicken breast.",
    540,
    ["Chicken Breast", "Charcoal Rub", "Oil"]
  ),
  mk(
    "creamy-corn",
    "Creamy Corn",
    "sides",
    3.49,
    "https://images.unsplash.com/photo-1511690078903-7cd39e0b9892?q=80&w=1600&auto=format&fit=crop",
    "Corn kernels in cream sauce.",
    230,
    ["Corn", "Cream", "Butter"]
  ),
  mk(
    "bbq-wings",
    "BBQ Wings",
    "fried",
    9.99,
    "https://images.unsplash.com/photo-1625947640383-1a78f9d81f3a?q=80&w=1600&auto=format&fit=crop",
    "Sweet and smoky BBQ wings.",
    730,
    ["Chicken Wings", "BBQ Sauce"]
  ),
  mk(
    "sweet-tea",
    "Sweet Tea",
    "drinks",
    1.99,
    "https://images.unsplash.com/photo-1488908314367-2b7f6d1a6d2a?q=80&w=1600&auto=format&fit=crop",
    "Southern-style sweet tea.",
    90,
    ["Tea", "Sugar", "Ice"]
  ),
  mk(
    "lime-soda",
    "Lime Soda",
    "drinks",
    1.89,
    "https://images.unsplash.com/photo-1563376082-4bab3f0c3eb9?q=80&w=1600&auto=format&fit=crop",
    "Zesty lime soda.",
    140,
    ["Carbonated Water", "Sugar", "Lime"]
  ),
  mk(
    "golden-bites",
    "Golden Bites",
    "fried",
    7.49,
    "https://images.unsplash.com/photo-1511690743690-05383a5dcac6?q=80&w=1600&auto=format&fit=crop",
    "Crispy golden bite-size pieces.",
    600,
    ["Chicken", "Flour", "Spices"]
  ),
  mk(
    "herbed-breast",
    "Herbed Breast",
    "grilled",
    10.99,
    "https://images.unsplash.com/photo-1541014833251-8e3853af090b?q=80&w=1600&auto=format&fit=crop",
    "Lightly seasoned breast with herbs.",
    520,
    ["Chicken Breast", "Herbs", "Olive Oil"]
  ),
  mk(
    "combo-delight",
    "Combo Delight",
    "combos",
    12.49,
    "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop",
    "Two pieces, fries, drink.",
    980,
    ["Chicken", "Fries", "Soda"]
  ),
  mk(
    "garden-greens",
    "Garden Greens",
    "sides",
    4.09,
    "https://images.unsplash.com/photo-1512621776951-61b13c8ab128?q=80&w=1600&auto=format&fit=crop",
    "Fresh mixed green salad.",
    160,
    ["Lettuce", "Tomato", "Cucumber"]
  ),
  mk(
    "berry-lemonade",
    "Berry Lemonade",
    "drinks",
    2.49,
    "https://images.unsplash.com/photo-1559717874-8a26b3f22a94?q=80&w=1600&auto=format&fit=crop",
    "Lemonade with mixed berries.",
    130,
    ["Berry", "Lemon", "Sugar"]
  ),
  mk(
    "charred-wings",
    "Charred Wings",
    "grilled",
    10.49,
    "https://images.unsplash.com/photo-1604897981250-369ea3b4b35a?q=80&w=1600&auto=format&fit=crop",
    "Charred-crisp grilled wings.",
    640,
    ["Wings", "Paprika", "Oil"]
  ),
  mk(
    "smoky-combo",
    "Smoky Combo",
    "combos",
    15.99,
    "https://images.unsplash.com/photo-1605276374500-cfc00a35af3a?q=80&w=1600&auto=format&fit=crop",
    "Grilled breast, fries, slaw, drink.",
    1290,
    ["Chicken Breast", "Fries", "Slaw", "Soda"]
  ),
  mk(
    "crispy-duo",
    "Crispy Duo",
    "combos",
    13.49,
    "https://images.unsplash.com/photo-1604908177077-3955835b2333?q=80&w=1600&auto=format&fit=crop",
    "Two crispy pieces with sides.",
    1190,
    ["Chicken", "Sides"]
  ),
  mk(
    "buttery-rolls",
    "Buttery Rolls",
    "sides",
    2.99,
    "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?q=80&w=1600&auto=format&fit=crop",
    "Soft rolls with butter.",
    240,
    ["Flour", "Butter", "Milk"]
  ),
  mk(
    "classic-water",
    "Classic Water",
    "drinks",
    0.99,
    "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1600&auto=format&fit=crop",
    "Still water.",
    0,
    ["Water"]
  ),
  mk(
    "citrus-spark",
    "Citrus Spark",
    "drinks",
    1.79,
    "https://images.unsplash.com/photo-1563376860-dc2d35f3f9c2?q=80&w=1600&auto=format&fit=crop",
    "Citrus soda.",
    140,
    ["Carbonated Water", "Sugar", "Citrus"]
  ),
];
