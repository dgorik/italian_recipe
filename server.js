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

const flowers = {
    "roses": {
        "description": "Roses typically grow in gardens and should be watered every 2-3 days.",
        "location": "Gardens",
        "care": "Regular pruning, fertilizing, and pest control",
        "picture": "https://images.pexels.com/photos/53141/rose-red-blossom-bloom-53141.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "sunflowers": {
        "description": "Sunflowers thrive in open fields and require watering every day.",
        "location": "Open fields",
        "care": "Full sun and well-drained soil",
        "picture": "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "orchids": {
        "description": "Orchids are often found in greenhouses and need watering every 5-7 days.",
        "location": "Greenhouses",
        "care": "High humidity and indirect light",
        "picture": "https://images.pexels.com/photos/87016/orchid-flower-blossom-bloom-87016.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "lilys": {
        "description": "Lilies grow near pond edges and should be watered twice a week.",
        "location": "Pond edges",
        "care": "Moderate sunlight and moist soil",
        "picture": "https://images.pexels.com/photos/424134/pexels-photo-424134.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "tulips": {
        "description": "Tulips are commonly found in flower beds and require watering every 3-4 days.",
        "location": "Flower beds",
        "care": "Well-drained soil and full sun to partial shade",
        "picture": "https://images.pexels.com/photos/53978/tulipa-tulip-flowers-spring-53978.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "daisys": {
        "description": "Daisies are hardy and grow in a variety of environments, from fields to gardens.",
        "location": "Fields or gardens",
        "care": "Regular deadheading to promote blooming",
        "picture": "https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "carnations": {
        "description": "Carnations are popular in bouquets and thrive in well-drained soil.",
        "location": "Gardens or pots",
        "care": "Regular pruning and deadheading",
        "picture": "https://images.pexels.com/photos/2379271/pexels-photo-2379271.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "daffodils": {
        "description": "Daffodils are early spring bloomers and require well-drained soil and partial shade.",
        "location": "Gardens or flower beds",
        "care": "Plant bulbs in the fall for spring blooms",
        "picture": "https://images.pexels.com/photos/3834461/pexels-photo-3834461.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "hyacinths": {
        "description": "Hyacinths are known for their fragrant blooms and prefer full sun to partial shade.",
        "location": "Gardens or pots",
        "care": "Plant bulbs in the fall and provide adequate moisture",
        "picture": "https://images.pexels.com/photos/1018142/pexels-photo-1018142.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "peonys": {
        "description": "Peonies are perennial favorites with large, showy blooms and thrive in full sun.",
        "location": "Gardens",
        "care": "Provide support for tall varieties and deadhead spent blooms",
        "picture": "https://images.pexels.com/photos/617967/pexels-photo-617967.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
}

app.get('/api/:flowerName', (request, response) => {
    const userInput = request.params.flowerName.toLowerCase()
    if (flowers.hasOwnProperty(userInput)) {
        response.json(flowers[userInput])
    }
    else {
        response.status(404).json({ error: "Please enter a valid flower." });
        response.send("Oooops something went wrong - try entering a new flower");
    }

});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on ${PORT}`)
})