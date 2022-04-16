/* ===Initial Dependencies================================= */
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors')
app.use(cors())

/* ===API Data Storage (until migration to MongoDB)======== */
const recipes = {
    "chickenalfredopenne": {'name': 'Chicken Alfredo Penne',
        'gifLink': 'https://gfycat.com/ifr/WastefulHappyAnemonecrab',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "crunchwraps": {'name': 'Crunchwraps',
        'gifLink': 'https://i.imgur.com/SqmxiZL.gifv',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "s'morestiramisu": {'name': "S'mores Tiramisu",
        'gifLink': 'https://gfycat.com/ifr/AcidicObedientAnkolewatusi',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "scallopedpotatos": {'name': 'Scalloped Potatos',
        'gifLink': 'https://gfycat.com/ifr/EarnestTornFluke',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "cinnamonrollpancakes": {'name': 'Cinnamon Roll Pancakes',
        'gifLink': 'https://gfycat.com/ifr/ImpartialAmusedBantamrooster',
        'cuisine': 'American',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "japanesegoya": {'name': 'Japanese Goya',
        'gifLink': 'https://gfycat.com/ifr/FoolishCooperativeChihuahua',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "stovetopmacandcheese": {'name': 'Stovetop Mac & Cheese',
        'gifLink': 'https://gfycat.com/ifr/ThinLonelyAmericanriverotter',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "cheesestuffedmashbeefpie": {'name': 'Cheese Stuffed Mash Beef Pie',
        'gifLink': 'https://gfycat.com/ifr/HighlevelAgreeableClingfish',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "quesarito": {'name': 'Quesarito',
        'gifLink': 'https://gfycat.com/ifr/ConcreteKindheartedEquine',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "tacosalpastor": {'name': 'Tacos Al Pastor',
        'gifLink': 'https://gfycat.com/ifr/TenderCarelessAgama',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "beefstroganoff": {'name': 'Beef Stroganoff',
        'gifLink': 'https://gfycat.com/ifr/CloudyFlickeringAustralianfurseal',
        'cuisine': 'Russian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "sausage-wrappedeggs": {'name': 'Sausage-wrapped Eggs',
        'gifLink': 'https://i.imgur.com/sOJWPZ0.gifv',
        'cuisine': 'American',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "beefandgarlicnoodles": {'name': 'Beef and Garlic Noodles',
        'gifLink': 'https://i.imgur.com/yLnUqGD.gifv',
        'cuisine': 'Chinese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "pizzaconedipring": {'name': 'Pizza Cone Dip Ring',
        'gifLink': 'https://gfycat.com/ifr/CourteousBowedGuineapig',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Appetizer'
    },
    "easybutterchicken": {'name': 'Easy Butter Chicken',
        'gifLink': 'https://gfycat.com/ifr/SilverShrillDrongo',
        'cuisine': 'Indian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "pansearedsalmon": {'name': 'Pan Seared Salmon',
        'gifLink': 'https://gfycat.com/ifr/FinePossibleDonkey',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "countryfriedsteakwithcountrygravy": {'name': 'Country Fried Steak with Country Gravy',
        'gifLink': 'https://i.imgur.com/Xh8UHyi.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "garlicbuttersteakwithcrispypotatoesandasparagus": {'name': 'Garlic Butter Steak with Crispy Potatoes and Asparagus',
        'gifLink': 'https://gfycat.com/ifr/PlasticOilyGalapagosdove',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "teriyakichicken": {'name': 'Teriyaki Chicken',
        'gifLink': 'https://i.imgur.com/uaL2z9G.gifv',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "stickyshiitakemushrooms": {'name': 'Sticky Shiitake Mushrooms',
        'gifLink': 'https://gfycat.com/ifr/FilthyPolishedHuia',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "generaltso'schicken": {'name': "General Tso's Chicken",
        'gifLink': 'https://i.imgur.com/sVrmkys.gifv',
        'cuisine': 'Chinese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "buckeyecookies": {'name': 'Buckeye Cookies',
        'gifLink': 'https://gfycat.com/ifr/RipeFavorableFrogmouth',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "bacondoublecheeseburgerpop-tarts": {'name': 'Bacon Double Cheeseburger Pop-Tarts',
        'gifLink': 'https://gfycat.com/ifr/LawfulHeftyGrayreefshark',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "beefandbroccolistir-fry": {'name': 'Beef and Broccoli Stir-Fry',
        'gifLink': 'https://gfycat.com/ifr/LavishMintyFinch',
        'cuisine': 'Chinese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "blackbeansoup": {'name': 'Black Bean Soup',
        'gifLink': 'https://i.imgur.com/TLdgLRR.gifv',
        'cuisine': 'Unknown',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "poachedeggs": {'name': 'Poached Eggs',
        'gifLink': 'https://gfycat.com/ifr/NaiveFickleDwarfrabbit',
        'cuisine': 'French',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "garlicmushrooms": {'name': 'Garlic Mushrooms',
        'gifLink': 'https://gfycat.com/ifr/BlandInexperiencedCrab',
        'cuisine': 'Unknown',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "scotcheggs": {'name': 'Scotch Eggs',
        'gifLink': 'https://gfycat.com/ifr/VapidIllAmericanrobin',
        'cuisine': 'American',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "frenchonioncheesemelt": {'name': 'French Onion Cheese Melt',
        'gifLink': 'https://gfycat.com/ifr/OrganicPeskyIvorybackedwoodswallow',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "chocolatefudgestuffedcookieslices": {'name': 'Chocolate Fudge Stuffed Cookie Slices',
        'gifLink': 'https://gfycat.com/ifr/AthleticAnyAddax',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "nutellasouffle": {'name': 'Nutella Soufflé',
        'gifLink': 'https://gfycat.com/ifr/ObedientEnragedGraywolf',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "salmonmealprep": {'name': 'Salmon Meal Prep',
        'gifLink': 'https://i.imgur.com/fdbAWTE.gifv',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "kenyanbeefsamosas": {'name': 'Kenyan Beef Samosas',
        'gifLink': 'https://i.imgur.com/H92NQ0o.gifv',
        'cuisine': 'African',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "chickencordonbleu": {
        'name': 'Chicken Cordon Bleu',
        'gifLink': 'https://i.imgur.com/qfpaZYo.gifv',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "jalepenopopperpigsinablanket": {
        'name': 'Jalepeno Popper Pigs in a Blanket',
        'gifLink': 'https://gfycat.com/ifr/AmbitiousDamagedImpala',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Appetizer'
    },
    "croissantdoughnuts": {
        'name': 'Croissant Doughnuts',
        'gifLink': 'https://i.imgur.com/HUabgRf.gifv',
        'cuisine': 'French',
        'meal': 'Breakfast',
        'mealCourse': 'Dessert'
    },
    "japanesefriedchickenwrap": {
        'name': 'Japanese Fried Chicken Wrap',
        'gifLink': 'https://gfycat.com/ifr/UnequaledFarflungCoral',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "dragon'sbeard": {
        'name': "Dragon's Beard",
        'gifLink': 'https://gfycat.com/ifr/CapitalMagnificentAcouchi',
        'cuisine': 'Unknown',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "creamychickenbaconpasta": {
        'name': 'Creamy Chicken Bacon Pasta',
        'gifLink': 'https://gfycat.com/ifr/HorribleDismalKestrel',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "cremebruleecheesecakebars": {
        'name': 'Creme Brûlée Cheesecake Bars',
        'gifLink': 'https://i.imgur.com/V1sAV0G.gifv',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "zebrastripedcheesecake": {
        'name': 'Zebra Striped Cheesecake',
        'gifLink': 'https://i.imgur.com/0fYYoRC.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "homemadegarlicbread": {
        'name': 'Homemade Garlic Bread',
        'gifLink': 'https://gfycat.com/ifr/GrimyNiftyGoosefish',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "yakisoba": {
        'name': 'Yakisoba',
        'gifLink': 'https://i.imgur.com/haeJk08.gifv',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "baconbeer-cheesebreadbowl": {
        'name': 'Bacon Beer-Cheese Bread Bowl',
        'gifLink': 'https://gfycat.com/ifr/DentalColorfulBullmastiff',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Appetizer'
    },
    "jadedumplings": {
        'name': 'Jade Dumplings',
        'gifLink': 'https://gfycat.com/ifr/CelebratedOrganicArrowworm',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "vietnamesecaramelpork": {
        'name': 'Vietnamese Caramel Pork',
        'gifLink': 'https://i.imgur.com/rEakkcd.gifv',
        'cuisine': 'Vietnamese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "stickysesamepopcornchicken": {
        'name': 'Sticky Sesame Popcorn Chicken',
        'gifLink': 'https://gfycat.com/ifr/ConfusedIllFruitfly',
        'cuisine': 'Chinese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "beefstew": {
        'name': 'Beef Stew',
        'gifLink': 'https://i.imgur.com/4NRuIRJ.gifv',
        'cuisine': 'German',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "ultimatesteaksandwich": {
        'name': 'Ultimate Steak Sandwich',
        'gifLink': 'https://i.imgur.com/bDB4L8V.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "calzones": {
        'name': 'Calzones',
        'gifLink': 'https://gfycat.com/ifr/HotFailingCottonmouth',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "buttermilkfriedchickenfingers": {
        'name': 'Buttermilk Fried Chicken Fingers',
        'gifLink': 'https://i.imgur.com/CiM4qcZ.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "greeklemonpotatoes": {
        'name': 'Greek Lemon Potatoes',
        'gifLink': 'https://i.imgur.com/WkELQCy.gifv',
        'cuisine': 'Greek',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "churroicecreambowls": {
        'name': 'Churro Ice Cream Bowls',
        'gifLink': 'http://i.imgur.com/XlaPuoy.gifv',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "jalepenoburgertaquitos": {
        'name': 'Jalepeno Burger Taquitos',
        'gifLink': 'https://gfycat.com/ifr/DistantConcernedAnnelida',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "rainbowsummerrolls": {
        'name': 'Rainbow Summer Rolls',
        'gifLink': 'https://gfycat.com/ifr/EarnestLinearBass',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Appetizer'
    },
    "chickentikkamasala": {
        'name': 'Chicken Tikka Masala',
        'gifLink': 'https://gfycat.com/ifr/PartialOilyGerbil',
        'cuisine': 'Indian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "nashvillefriedchicken": {
        'name': 'Nashville Fried Chicken',
        'gifLink': 'https://i.imgur.com/aQccWrU.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "ramenstirfry": {
        'name': 'Ramen Stir Fry',
        'gifLink': 'https://gfycat.com/ifr/EnergeticScrawnyClingfish',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "qatayef": {
        'name': 'Qatayef',
        'gifLink': 'https://gfycat.com/ifr/ImpressionableSourBullfrog',
        'cuisine': 'Arabian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "bakedlobstertails": {
        'name': 'Baked Lobster Tails',
        'gifLink': 'https://gfycat.com/ifr/BountifulAdventurousChevrotain',
        'cuisine': 'Unknown',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "tortillasandwich": {
        'name': 'Tortilla Sandwich',
        'gifLink': 'https://gfycat.com/ifr/ShallowObedientFiddlercrab',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "mongolianbeef": {
        'name': 'Mongolian Beef',
        'gifLink': 'https://gfycat.com/ifr/ThankfulRequiredAsianporcupine',
        'cuisine': 'Mongolian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "sloppyjoes": {
        'name': 'Sloppy Joes',
        'gifLink': 'https://i.imgur.com/hqCAk74.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "spicychickenkatsu": {
        'name': 'Spicy Chicken Katsu',
        'gifLink': 'https://gfycat.com/ifr/AnimatedAcidicAmericanindianhorse',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "creamylemonpasta": {
        'name': 'Creamy Lemon Pasta',
        'gifLink': 'https://gfycat.com/ifr/ScentedLoneCockroach',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "parisiangnocchi": {
        'name': 'Parisian Gnocchi',
        'gifLink': 'https://gfycat.com/ifr/InfamousSpiritedAdmiralbutterfly',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "japanesekaraage": {
        'name': 'Japanese Karaage',
        'gifLink': 'https://gfycat.com/ifr/ScornfulFrigidAfricanelephant',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Appetizer'
    },
    "tacotriangles": {
        'name': 'Taco Triangles',
        'gifLink': 'https://gfycat.com/ifr/UnevenChubbyGermanshorthairedpointer',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "beefpotstickers": {
        'name': 'Beef Potstickers',
        'gifLink': 'https://gfycat.com/ifr/AgilePessimisticCottontail',
        'cuisine': 'Chinese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "japanesepancakes": {
        'name': 'Japanese Pancakes',
        'gifLink': 'https://gfycat.com/ifr/YearlyEveryHind',
        'cuisine': 'Japanese',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "slowcookerfrenchonionsoup": {
        'name': 'Slow Cooker French Onion Soup',
        'gifLink': 'https://gfycat.com/ifr/CommonHighArrowana',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "smokerpulledpork": {
        'name': 'Smoker Pulled Pork',
        'gifLink': 'https://gfycat.com/ifr/ContentAmpleIbex',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "two-ingredientflatbread": {
        'name': 'Two-Ingredient Flatbread',
        'gifLink': 'https://i.imgur.com/ZZbDi2v.gifv',
        'cuisine': 'Greek',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "pommesduchesse": {
        'name': 'Pommes Duchesse',
        'gifLink': 'https://gfycat.com/ifr/CorruptShockedGermanpinscher',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "honeygarlicshrimp": {
        'name': 'Honey Garlic Shrimp',
        'gifLink': 'https://gfycat.com/ifr/ScientificBigIlladopsis',
        'cuisine': 'Unknown',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "searedduckbreastwithduckfatfriedpotatoes": {
        'name': 'Seared Duck Breast with Duck Fat Fried Potatoes',
        'gifLink': 'https://i.imgur.com/Dg3JIEC.gifv',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "japanesecheesecake": {
        'name': 'Japanese Cheesecake',
        'gifLink': 'http://i.imgur.com/Sc0eUEO.gifv',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "creamytuscanchicken": {
        'name': 'Creamy Tuscan Chicken',
        'gifLink': 'https://gfycat.com/ifr/BossyBigheartedBlackbear',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "chickenandwaffleslidders": {
        'name': 'Chicken and Waffle Slidders',
        'gifLink': 'http://i.imgur.com/0VicbsO.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "cheesyscallopedpotatoes": {
        'name': 'Cheesy Scalloped Potatoes',
        'gifLink': 'https://gfycat.com/ifr/LargeDeficientKentrosaurus',
        'cuisine': 'Unknown',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "parmesancrustedchickenbreast": {
        'name': 'Parmesan Crusted Chicken Breast',
        'gifLink': 'https://gfycat.com/ifr/FluffySmoggyGoldenmantledgroundsquirrel',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "babaganoush": {
        'name': 'Baba Ganoush',
        'gifLink': 'https://gfycat.com/ifr/SimplisticSmartBobwhite',
        'cuisine': 'Isreali',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "tomatosoup": {
        'name': 'Tomato Soup',
        'gifLink': 'https://gfycat.com/ifr/ClosedPlaintiveLeafhopper',
        'cuisine': 'French',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "one-potchineseribs": {
        'name': 'One-Pot Chinese Ribs',
        'gifLink': 'https://gfycat.com/ifr/TornSparklingBackswimmer',
        'cuisine': 'Chinese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "buffalochickenpull-apartbread": {
        'name': 'Buffalo Chicken Pull-Apart Bread',
        'gifLink': 'https://i.imgur.com/KrFJO8V.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Appetizer'
    },
    "stuffedfrenchtoast": {
        'name': 'Stuffed French Toast',
        'gifLink': 'https://i.imgur.com/o8HTk6v.gifv',
        'cuisine': 'French',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "crispychilibeef": {
        'name': 'Crispy Chili Beef',
        'gifLink': 'https://gfycat.com/ifr/GlamorousEnchantingFlyingfish',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "porkandcheesefriedcutlets": {
        'name': 'Pork and Cheese Fried Cutlets',
        'gifLink': 'https://i.imgur.com/DaPxoY1.gifv',
        'cuisine': 'Japanese',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "chorizoquesodip": {
        'name': 'Chorizo Queso Dip',
        'gifLink': 'https://gfycat.com/ifr/PitifulHandsomeGrassspider',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Appetizer'
    },
    "creamysun-driedtomatochicken": {
        'name': 'Creamy Sun-Dried Tomato Chicken',
        'gifLink': 'https://gfycat.com/ifr/JoyousCloseElectriceel',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "garlicbutterbakedchickenthighs": {
        'name': 'Garlic Butter Baked Chicken Thighs',
        'gifLink': 'https://gfycat.com/ifr/ElderlyShortAnkole',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "homemadechickennuggets": {
        'name': 'Homemade Chicken Nuggets',
        'gifLink': 'https://i.imgur.com/o4q2w3n.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "thepangalacticgargleblaster": {
        'name': 'The Pan Galactic Gargle Blaster',
        'gifLink': 'https://gfycat.com/ifr/GrotesqueMatureGalapagossealion',
        'cuisine': 'Betelgeusian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Drink'
    },
    "guinnessbeefstewwithcheddarherbdumplings": {
        'name': 'Guinness Beef Stew with Cheddar Herb Dumplings',
        'gifLink': 'https://gfycat.com/ifr/OrneryKindlyFreshwatereel',
        'cuisine': 'Irish',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "herbroastedpotatoes": {
        'name': 'Herb Roasted Potatoes',
        'gifLink': 'http://i.imgur.com/wv4rdV9.gifv',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "elotedip": {
        'name': 'Elote Dip',
        'gifLink': 'https://gfycat.com/ifr/ConstantUnfinishedCopepod',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "one-potchilimac": {
        'name': 'One-Pot Chili Mac',
        'gifLink': 'https://gfycat.com/ifr/TartOilyGecko',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "churroswithchocolatedrizzle": {
        'name': 'Churros with Chocolate Drizzle',
        'gifLink': 'https://gfycat.com/ifr/LinedBigHind',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Dessert'
    },
    "chickencurrynaanbowls": {
        'name': 'Chicken Curry Naan Bowls',
        'gifLink': 'https://gfycat.com/ifr/TanFirsthandIslandcanary',
        'cuisine': 'Indian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "roastedporkshoulder": {
        'name': 'Roasted Pork Shoulder',
        'gifLink': 'https://gfycat.com/ifr/PopularPhysicalGuineapig',
        'cuisine': 'Unknown',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "whitetrashhash": {
        'name': 'White Trash Hash',
        'gifLink': 'https://i.imgur.com/1EDve9E.gifv',
        'cuisine': 'American',
        'meal': 'Breakfast',
        'mealCourse': 'Main Course'
    },
    "potatocheesepie": {
        'name': 'Potato Cheese Pie',
        'gifLink': 'https://i.imgur.com/lmLaSCv.gifv',
        'cuisine': 'American',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Appetizer'
    },
    "kladdkaka": {
        'name': 'Kladdkaka',
        'gifLink': 'https://gfycat.com/ifr/InformalThatGlowworm',
        'cuisine': 'Swedish',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "korean-styleribs": {
        'name': 'Korean-Style Ribs',
        'gifLink': 'https://gfycat.com/ifr/YearlyIlliterateHyena',
        'cuisine': 'Korean',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "koreancreamcheesegarlicbread": {
        'name': 'Korean Cream Cheese Garlic Bread',
        'gifLink': 'https://i.imgur.com/4iCZMsS.gifv',
        'cuisine': 'Korean',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "filipinolechon": {
        'name': 'Filipino Lechon',
        'gifLink': 'https://gfycat.com/ifr/UnrulyAdorableDotterel',
        'cuisine': 'Filipino',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "berberespicechickenwings": {
        'name': 'Berbere Spice Chicken Wings',
        'gifLink': 'https://gfycat.com/ifr/HauntingCharmingJackal',
        'cuisine': 'Ethiopian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "bazlama": {
        'name': 'Bazlama',
        'gifLink': 'https://gfycat.com/ifr/CircularLegalIndigowingedparrot',
        'cuisine': 'Turkish',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Side Dish'
    },
    "falafel": {
        'name': 'Falafel',
        'gifLink': 'https://gfycat.com/ifr/EnergeticNecessaryBellfrog',
        'cuisine': 'Israeli',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "potatoleeksoup": {
        'name': 'Potato Leek Soup',
        'gifLink': 'https://gfycat.com/ifr/AgreeableGlamorousHomalocephale',
        'cuisine': 'Unknown',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course'
    },
    "blankrecipe": {
        'name': '',
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
    "notfound": {
        'name': 'Recipe Not Found',
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': ''
    },
};

function getMeal(mealType){
    let answer = [];
    const keys = Object.keys(recipes);

    for(let i=0; i<keys.length; i++){
        if(recipes[keys[i]].meal === `${mealType}`){
            console.log(recipes[keys[i]])
            answer.push(recipes[keys[i]]);
        }
    }
    return answer;
}

function getCuisine(cuisineType){
    let answer = [];
    const keys = Object.keys(recipes);

    for(let i=0; i<keys.length; i++){
        if(recipes[keys[i]].cuisine === `${cuisineType}`){
            console.log(recipes[keys[i]])
            answer.push(recipes[keys[i]]);
        }
    }
    return answer;
}

function getCourse(courseType){
    let answer = [];
    const keys = Object.keys(recipes);

    for(let i=0; i<keys.length; i++){
        if(recipes[keys[i]].mealCourse === `${courseType}`){
            console.log(recipes[keys[i]])
            answer.push(recipes[keys[i]]);
        }
    }
    return answer;
}

function getRandomProperty(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}

/* ===Server Routing======================================= */
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/public' + '/index.html');
})

app.get('/public/style/style.css', function(req, res) {
    res.setHeader()
    res.sendFile(__dirname + "/public" + "/css" + "/style.css");
  });

app.get('/api/allRecipes', (req, res) => {
   res.json(recipes);
});

app.get('/api/search/:recipe', (req, res) => {
    const recipeChoice = req.params.recipe.toLowerCase().trim().replace(/\s+/g, "");
    if(recipes[recipeChoice]){
        res.json(recipes[recipeChoice])
    }else{
        res.json(recipes['notfound'])
        //TODO Add way to return closest matching result!
    }
});

app.get('/api/random', (req, res) => {
    let randomRec = getRandomProperty(recipes);
    res.json(recipes[randomRec])
});

app.get('/api/filter/cuisine/:cuisineType', (req, res) => {
    const cuisineChoice = req.params.cuisineType.toLowerCase().trim().replace(/\s+/g, "");
    if (cuisineChoice === 'american'){
        res.json(getCuisine("American"));
    } else if (cuisineChoice === 'chinese'){
        res.json(getCuisine("Chinese"))
    } else if (cuisineChoice === 'japanese'){
        res.json(getCuisine("Japanese"))
    } else if (cuisineChoice === 'korean'){
        res.json(getCuisine("Korean"))
    } else if (cuisineChoice === 'unknown'){
        res.json(getCuisine("Unknown"))
    } else if (cuisineChoice === 'turkish'){
        res.json(getCuisine("Turkish"))
    } else if (cuisineChoice === 'italian'){
        res.json(getCuisine("Italian"))
    } else if (cuisineChoice === 'ethiopian'){
        res.json(getCuisine("Ethiopian"))
    } else if (cuisineChoice === 'isreali'){
        res.json(getCuisine("Isreali"))
    } else if (cuisineChoice === 'filipino'){
        res.json(getCuisine("Filipino"))
    } else if (cuisineChoice === 'swedish'){
        res.json(getCuisine("Swedish"))
    } else if (cuisineChoice === 'indian'){
        res.json(getCuisine("Indian"))
    } else if (cuisineChoice === 'mexican'){
        res.json(getCuisine("Mexican"))
    } else if (cuisineChoice === 'irish'){
        res.json(getCuisine("Irish"))
    } else if (cuisineChoice === 'betelgeusian'){
        res.json(getCuisine("Betelgeusian"))
    } else if (cuisineChoice === 'mongolian'){
        res.json(getCuisine("Mongolian"))
    } else if (cuisineChoice === 'arabian'){
        res.json(getCuisine("Arabian"))
    } else if (cuisineChoice === 'german'){
        res.json(getCuisine("German"))
    } else if (cuisineChoice === 'vietnamese'){
        res.json(getCuisine("Vietnamese"))
    } else if (cuisineChoice === 'african'){
        res.json(getCuisine("African"))
    } else if (cuisineChoice === 'french'){
        res.json(getCuisine("French"))
    } else if (cuisineChoice === 'greek'){
        res.json(getCuisine("Greek"))
    } else if (cuisineChoice === 'russian'){
        res.json(getCuisine("Russian"))
    }
});

app.get('/api/filter/meal/:mealType', (req, res) => {
    const mealChoice = req.params.mealType.toLowerCase().trim().replace(/\s+/g, "");
    if (mealChoice === 'breakfast'){
        res.json(getMeal('Breakfast'));
    } else if ((mealChoice === 'lunch') || (mealChoice === 'dinner')){
        res.json(getMeal('Lunch/Dinner'));
    }
});

app.get('/api/filter/course/:courseType', (req, res) => {
    const courseType = req.params.courseType.toLowerCase().trim().replace(/\s+/g, "");
    if (courseType === 'maincourse'){
        res.json(getCourse('Main Course'));
    } else if (courseType === 'sidedish'){
        res.json(getCourse('Side Dish'))
    } else if (courseType === 'appetizer'){
        res.json(getCourse('Appetizer'))
    } else if (courseType === 'dessert'){
        res.json(getCourse('Dessert'))
    } else if (courseType === 'drink'){
        res.json(getCourse('Drink'))
    }
});

/* ===Run Server========================================== */
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
});