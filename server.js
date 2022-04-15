/* ===Initial Dependencies================================= */
const express = require('express');
const app = express();
const PORT = 3000;


/* ===API Data Storage (until migration to MongoDB)======== */
const recipes = {
    "Chicken Alfredo Penne": {
        'gifLink': 'https://gfycat.com/ifr/WastefulHappyAnemonecrab',
        'cuisine': 'Italian',
        'meal': 'Dinner',
        'mealCourse': 'Main Course'
    },
    "Crunchwraps": {
        'gifLink': 'https://i.imgur.com/SqmxiZL.gifv',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "S'mores Tiramisu": {
        'gifLink': 'https://gfycat.com/ifr/AcidicObedientAnkolewatusi',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "Scalloped Potatos": {
        'gifLink': 'https://gfycat.com/ifr/EarnestTornFluke',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "Cinnamon Roll Pancakes": {
        'gifLink': 'https://gfycat.com/ifr/ImpartialAmusedBantamrooster',
        'cuisine': 'American',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "Japanese Goya": {
        'gifLink': 'https://gfycat.com/ifr/FoolishCooperativeChihuahua',
        'cuisine': 'Japanese',
        'meal': 'Dinner',
        'mealCourse': 'Side Dish'
    },
    "Stovetop Mac & Cheese": {
        'gifLink': 'https://gfycat.com/ifr/ThinLonelyAmericanriverotter',
        'cuisine': 'American',
        'meal': 'Dinner',
        'mealCourse': 'Main Dish/Side Dish'
    },
    "Cheese Stuffed Mash Beef Pie": {
        'gifLink': 'https://gfycat.com/ifr/HighlevelAgreeableClingfish',
        'cuisine': 'American',
        'meal': 'Dinner',
        'mealCourse': 'Main Course'
    },
    "Quesarito": {
        'gifLink': 'https://gfycat.com/ifr/ConcreteKindheartedEquine',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Tacos Al Pastor": {
        'gifLink': 'https://gfycat.com/ifr/TenderCarelessAgama',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Beef Stroganoff": {
        'gifLink': 'https://gfycat.com/ifr/CloudyFlickeringAustralianfurseal',
        'cuisine': 'Russian',
        'meal': 'Dinner',
        'mealCourse': 'Main Course'
    },
    "Sausage-wrapped Eggs": {
        'gifLink': 'https://i.imgur.com/sOJWPZ0.gifv',
        'cuisine': 'American',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "Beef and Garlic Noodles": {
        'gifLink': 'https://i.imgur.com/yLnUqGD.gifv',
        'cuisine': 'Chinese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Pizza Cone Dip Ring": {
        'gifLink': 'https://gfycat.com/ifr/CourteousBowedGuineapig',
        'cuisine': 'American',
        'meal': 'Dinner',
        'mealCourse': 'Appetizer'
    },
    "Easy Butter Chicken": {
        'gifLink': 'https://gfycat.com/ifr/SilverShrillDrongo',
        'cuisine': 'Indian',
        'meal': 'Dinner',
        'mealCourse': 'Main Course'
    },
    "Pan Seared Salmon": {
        'gifLink': 'https://gfycat.com/ifr/FinePossibleDonkey',
        'cuisine': 'French',
        'meal': 'Dinner',
        'mealCourse': 'Main Course'
    },
    "Country Fried Steak with Country Gravy": {
        'gifLink': 'https://i.imgur.com/Xh8UHyi.gifv',
        'cuisine': 'American South',
        'meal': 'Dinner',
        'mealCourse': 'Main Course'
    },
    "Garlic Butter Steak with Crispy Potatoes and Asparagus": {
        'gifLink': 'https://gfycat.com/ifr/PlasticOilyGalapagosdove',
        'cuisine': 'Continental',
        'meal': 'Dinner',
        'mealCourse': 'Main Course'
    },
    "Teriyaki Chicken": {
        'gifLink': 'https://i.imgur.com/uaL2z9G.gifv',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Sticky Shiitake Mushrooms": {
        'gifLink': 'https://gfycat.com/ifr/FilthyPolishedHuia',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "General Tso's Chicken": {
        'gifLink': 'https://i.imgur.com/sVrmkys.gifv',
        'cuisine': 'Chinese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Buckeye Cookies": {
        'gifLink': 'https://gfycat.com/ifr/RipeFavorableFrogmouth',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "Bacon Double Cheeseburger Pop-Tarts": {
        'gifLink': 'https://gfycat.com/ifr/LawfulHeftyGrayreefshark',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Beef and Broccoli Stir-Fry": {
        'gifLink': 'https://gfycat.com/ifr/LavishMintyFinch',
        'cuisine': 'Chinese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Black Bean Soup": {
        'gifLink': 'https://i.imgur.com/TLdgLRR.gifv',
        'cuisine': 'Unknown',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Blank Recipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
};


/* ===Server Routing======================================= */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public' + '/index.html');
})

app.get('/api/allRecipes', (req, res) => {
    res.json(recipes);
});

/* ===Run Server========================================== */
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
});