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
        'mealCourse': 'Main Course',
        'redditUser': 'u/option-13'
    },
    "Crunchwraps": {
        'gifLink': 'https://i.imgur.com/SqmxiZL.gifv',
        'cuisine': 'Mexican',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Main Course',
        'redditUser': 'u/dumpemout'
    },
    "S'mores Tiramisu": {
        'gifLink': 'https://gfycat.com/ifr/AcidicObedientAnkolewatusi',
        'cuisine': 'Italian',
        'meal': 'Lunch/Dinner',
        'mealCourse': 'Desert',
        'redditUser': 'u/TheLadyEve'
    },
    "Blank Recipe": {
        'gifLink': '',
        'cuisine': '',
        'meal': '',
        'mealCourse': '',
        'redditUser': ''
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