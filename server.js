const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000;
const cors = require('cors')
app.use(cors())
app.use(express.static('public'));


// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index.ejs');
})

const recipes = {
    "spaghetti_bolognese": {
        "description": "A classic Italian pasta dish made with a rich, savory meat sauce.",
        "ingredients": ["spaghetti", "ground beef", "onions", "garlic", "tomato paste", "olive oil", "red wine", "bay leaves", "salt", "pepper"],
        "method": "Cook the pasta. In a separate pan, cook beef with onions, garlic, tomato paste, and wine. Simmer and combine with pasta.",
        "picture": "https://images.pexels.com/photos/1343088/pexels-photo-1343088.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "margherita_pizza": {
        "description": "A simple pizza topped with tomato, fresh mozzarella, and basil leaves.",
        "ingredients": ["pizza dough", "tomato sauce", "mozzarella", "basil", "olive oil", "salt"],
        "method": "Spread tomato sauce on the dough, add mozzarella, and bake. Top with fresh basil and olive oil.",
        "picture": "https://images.pexels.com/photos/984380/pexels-photo-984380.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "lasagna": {
        "description": "A layered pasta dish with meat, cheese, and tomato sauce.",
        "ingredients": ["lasagna noodles", "ground beef", "tomato sauce", "ricotta", "mozzarella", "parmesan", "garlic", "onions"],
        "method": "Layer cooked noodles with meat sauce and cheeses. Bake until bubbly.",
        "picture": "https://images.pexels.com/photos/2681711/pexels-photo-2681711.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "risotto": {
        "description": "A creamy rice dish often made with vegetables, seafood, or meat.",
        "ingredients": ["arborio rice", "chicken stock", "parmesan", "butter", "onion", "white wine", "salt", "pepper"],
        "method": "Sauté onions, add rice and white wine. Gradually add stock while stirring, and finish with butter and parmesan.",
        "picture": "https://images.pexels.com/photos/4622875/pexels-photo-4622875.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "frittata": {
        "description": "An Italian-style omelette with vegetables, cheese, and meats.",
        "ingredients": ["eggs", "potatoes", "onion", "cheese", "olive oil", "salt", "pepper"],
        "method": "Sauté potatoes and onions, whisk eggs, then cook in a skillet until set. Add cheese and finish under the broiler.",
        "picture": "https://images.pexels.com/photos/2643792/pexels-photo-2643792.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "gnocchi": {
        "description": "Soft potato dumplings served with various sauces.",
        "ingredients": ["potatoes", "flour", "egg", "salt", "butter", "parmesan"],
        "method": "Boil potatoes, mash, mix with flour and egg to form dough, shape into dumplings, and boil. Serve with butter and parmesan.",
        "picture": "https://images.pexels.com/photos/1329565/pexels-photo-1329565.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "carbonara": {
        "description": "Pasta served with a creamy egg-based sauce, pancetta, and parmesan.",
        "ingredients": ["spaghetti", "pancetta", "eggs", "parmesan", "pecorino", "black pepper"],
        "method": "Cook pasta and pancetta. Mix eggs and cheese, then toss with pasta and pancetta off the heat to make the sauce.",
        "picture": "https://images.pexels.com/photos/2999091/pexels-photo-2999091.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "minestrone_soup": {
        "description": "A hearty vegetable soup made with beans, pasta, and broth.",
        "ingredients": ["vegetable broth", "carrots", "onion", "zucchini", "tomatoes", "beans", "pasta", "garlic", "spinach"],
        "method": "Sauté vegetables, add broth and beans, and simmer. Add pasta and spinach before serving.",
        "picture": "https://images.pexels.com/photos/3770568/pexels-photo-3770568.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "panzanella": {
        "description": "A bread salad made with tomatoes, cucumbers, onions, and basil.",
        "ingredients": ["stale bread", "tomatoes", "cucumbers", "onions", "basil", "olive oil", "vinegar"],
        "method": "Tear bread into pieces, mix with vegetables, add olive oil and vinegar, and toss.",
        "picture": "https://images.pexels.com/photos/2203833/pexels-photo-2203833.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "tiramisu": {
        "description": "A classic Italian dessert made with coffee-soaked ladyfingers, mascarpone, and cocoa.",
        "ingredients": ["ladyfingers", "mascarpone", "coffee", "cocoa powder", "eggs", "sugar", "rum"],
        "method": "Soak ladyfingers in coffee, layer with mascarpone mixture, and refrigerate. Dust with cocoa powder before serving.",
        "picture": "https://images.pexels.com/photos/1966479/pexels-photo-1966479.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
}

app.get('/api/:menu_item', (request, response) => {

    const menu_item = request.params.menu_item

    if (recipes[menu_item]) {
        response.json(recipes[menu_item])
    }
    else {
        response.status(404).json({ error: "Please enter a valid flower." });
        //response.send("Oooops something went wrong - try entering a new flower");
    }

});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on ${PORT}`)
})