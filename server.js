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
    "Poached Eggs": {
        'gifLink': 'https://gfycat.com/ifr/NaiveFickleDwarfrabbit',
        'cuisine': 'French',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "Garlic Mushrooms": {
        'gifLink': 'https://gfycat.com/ifr/BlandInexperiencedCrab',
        'cuisine': 'Unknown',
        'meal': 'Dinner',
        'mealCourse': 'Side Dish'
    },
    "Scotch Eggs": {
        'gifLink': 'https://gfycat.com/ifr/VapidIllAmericanrobin',
        'cuisine': 'Scottish',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "French Onion Cheese Melt": {
        'gifLink': 'https://gfycat.com/ifr/OrganicPeskyIvorybackedwoodswallow',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Chocolate Fudge Stuffed Cookie Slices": {
        'gifLink': 'https://gfycat.com/ifr/AthleticAnyAddax',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "Nutella Soufflé": {
        'gifLink': 'https://gfycat.com/ifr/ObedientEnragedGraywolf',
        'cuisine': 'American',
        'meal': 'Dinner',
        'mealCourse': 'Dessert'
    },
    "Salmon Meal Prep": {
        'gifLink': 'https://i.imgur.com/fdbAWTE.gifv',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Kenyan Beef Samosas": {
        'gifLink': 'https://i.imgur.com/H92NQ0o.gifv',
        'cuisine': 'Kenyan',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "Chicken Cordon Bleu": {
        'gifLink': 'https://i.imgur.com/qfpaZYo.gifv',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Jalepeno Popper Pigs in a Blanket": {
        'gifLink': 'https://gfycat.com/ifr/AmbitiousDamagedImpala',
        'cuisine': 'American/Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Appetizer'
    },
    "Croissant Doughnuts": {
        'gifLink': 'https://i.imgur.com/HUabgRf.gifv',
        'cuisine': 'American/French',
        'meal': 'Breakfast',
        'mealCourse': 'Dessert'
    },
    "Japanese Fried Chicken Wrap": {
        'gifLink': 'https://gfycat.com/ifr/UnequaledFarflungCoral',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Dragon's Beard": {
        'gifLink': 'https://gfycat.com/ifr/CapitalMagnificentAcouchi',
        'cuisine': 'Unknown',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "Creamy Chicken Bacon Pasta": {
        'gifLink': 'https://gfycat.com/ifr/HorribleDismalKestrel',
        'cuisine': 'American/Italian',
        'meal': 'Dinner',
        'mealCourse': 'Main Course'
    },
    "Creme Brûlée Cheesecake Bars": {
        'gifLink': 'https://i.imgur.com/V1sAV0G.gifv',
        'cuisine': 'French/American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "Zebra Striped Cheesecake": {
        'gifLink': 'https://i.imgur.com/0fYYoRC.gifv',
        'cuisine': 'American',
        'meal': 'Dinner',
        'mealCourse': 'Dessert'
    },
    "Homemade Garlic Bread": {
        'gifLink': 'https://gfycat.com/ifr/GrimyNiftyGoosefish',
        'cuisine': 'Italian',
        'meal': 'Dinner',
        'mealCourse': 'Side Dish'
    },
    "Yakisoba": {
        'gifLink': 'https://i.imgur.com/haeJk08.gifv',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Bacon Beer-Cheese Bread Bowl": {
        'gifLink': 'https://gfycat.com/ifr/DentalColorfulBullmastiff',
        'cuisine': 'American',
        'meal': 'Dinner',
        'mealCourse': 'Appetizer'
    },
    "Jade Dumplings": {
        'gifLink': 'https://gfycat.com/ifr/CelebratedOrganicArrowworm',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Vietnamese Caramel Pork": {
        'gifLink': 'https://i.imgur.com/rEakkcd.gifv',
        'cuisine': 'Vietnamese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Sticky Sesame Popcorn Chicken": {
        'gifLink': 'https://gfycat.com/ifr/ConfusedIllFruitfly',
        'cuisine': 'Chinese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Beef Stew": {
        'gifLink': 'https://i.imgur.com/4NRuIRJ.gifv',
        'cuisine': 'German',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Ultimate Steak Sandwich": {
        'gifLink': 'https://i.imgur.com/bDB4L8V.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Calzones": {
        'gifLink': 'https://gfycat.com/ifr/HotFailingCottonmouth',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Buttermilk Fried Chicken Fingers": {
        'gifLink': 'https://i.imgur.com/CiM4qcZ.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Greek Lemon Potatoes": {
        'gifLink': 'https://i.imgur.com/WkELQCy.gifv',
        'cuisine': 'Greek',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "Churro Ice Cream Bowls": {
        'gifLink': 'http://i.imgur.com/XlaPuoy.gifv',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "Jalepeno Burger Taquitos": {
        'gifLink': 'https://gfycat.com/ifr/DistantConcernedAnnelida',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Rainbow Summer Rolls": {
        'gifLink': 'https://gfycat.com/ifr/EarnestLinearBass',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course/Appetizer'
    },
    "Chicken Tikka Masala": {
        'gifLink': 'https://gfycat.com/ifr/PartialOilyGerbil',
        'cuisine': 'Indian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Nashville Fried Chicken": {
        'gifLink': 'https://i.imgur.com/aQccWrU.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Ramen Stir Fry": {
        'gifLink': 'https://gfycat.com/ifr/EnergeticScrawnyClingfish',
        'cuisine': 'Japanses',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Qatayef": {
        'gifLink': 'https://gfycat.com/ifr/ImpressionableSourBullfrog',
        'cuisine': 'Arabian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "Baked Lobster Tails": {
        'gifLink': 'https://gfycat.com/ifr/BountifulAdventurousChevrotain',
        'cuisine': 'Unknown',
        'meal': 'Dinner',
        'mealCourse': 'Main Course'
    },
    "Tortilla Sandwich": {
        'gifLink': 'https://gfycat.com/ifr/ShallowObedientFiddlercrab',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Mongolian Beef": {
        'gifLink': 'https://gfycat.com/ifr/ThankfulRequiredAsianporcupine',
        'cuisine': 'Mongolian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Sloppy Joes": {
        'gifLink': 'https://i.imgur.com/hqCAk74.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Spicy Chicken Katsu": {
        'gifLink': 'https://gfycat.com/ifr/AnimatedAcidicAmericanindianhorse',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Creamy Lemon Pasta": {
        'gifLink': 'https://gfycat.com/ifr/ScentedLoneCockroach',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Parisian Gnocchi": {
        'gifLink': 'https://gfycat.com/ifr/InfamousSpiritedAdmiralbutterfly',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Japanese Karaage": {
        'gifLink': 'https://gfycat.com/ifr/ScornfulFrigidAfricanelephant',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course/Side Dish'
    },
    "Taco Triangles": {
        'gifLink': 'https://gfycat.com/ifr/UnevenChubbyGermanshorthairedpointer',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Beef Potstickers": {
        'gifLink': 'https://gfycat.com/ifr/AgilePessimisticCottontail',
        'cuisine': 'Chinese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Japanese Pancakes": {
        'gifLink': 'https://gfycat.com/ifr/YearlyEveryHind',
        'cuisine': 'Japanese',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "Slow Cooker French Onion Soup": {
        'gifLink': 'https://gfycat.com/ifr/CommonHighArrowana',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Smoker Pulled Pork": {
        'gifLink': 'https://gfycat.com/ifr/ContentAmpleIbex',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Two-Ingredient Flatbread": {
        'gifLink': 'https://i.imgur.com/ZZbDi2v.gifv',
        'cuisine': 'Greek/Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "Pommes Duchesse": {
        'gifLink': 'https://gfycat.com/ifr/CorruptShockedGermanpinscher',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "Honey Garlic Shrimp": {
        'gifLink': 'https://gfycat.com/ifr/ScientificBigIlladopsis',
        'cuisine': 'Unknown',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course/Side Dish'
    },
    "Seared Duck Breast with Duck Fat Fried Potatoes": {
        'gifLink': 'https://i.imgur.com/Dg3JIEC.gifv',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "Japanese Cheesecake": {
        'gifLink': 'http://i.imgur.com/Sc0eUEO.gifv',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "Creamy Tuscan Chicken": {
        'gifLink': 'https://gfycat.com/ifr/BossyBigheartedBlackbear',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Dish'
    },
    "Chicken and Waffle Slidders": {
        'gifLink': 'http://i.imgur.com/0VicbsO.gifv',
        'cuisine': 'American',
        'meal': 'Breakfast/Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "BlankRecipe": {
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