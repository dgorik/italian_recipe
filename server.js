const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

const flowers = {
    "rose": {
        "description": "Roses typically grow in gardens and should be watered every 2-3 days.",
        "location": "Gardens",
        "care": "Regular pruning, fertilizing, and pest control",
        "picture": "https://www.pexels.com/search/roses/"
    },
    "sunflower": {
        "description": "Sunflowers thrive in open fields and require watering every day.",
        "location": "Open fields",
        "care": "Full sun and well-drained soil",
        "picture": "https://www.pexels.com/search/sunflower/"
    },
    "orchid": {
        "description": "Orchids are often found in greenhouses and need watering every 5-7 days.",
        "location": "Greenhouses",
        "care": "High humidity and indirect light",
        "picture": "https://www.pexels.com/search/orchid/"
    },
    "lily": {
        "description": "Lilies grow near pond edges and should be watered twice a week.",
        "location": "Pond edges",
        "care": "Moderate sunlight and moist soil",
        "picture": "https://www.pexels.com/search/lily/"
    },
    "tulip": {
        "description": "Tulips are commonly found in flower beds and require watering every 3-4 days.",
        "location": "Flower beds",
        "care": "Well-drained soil and full sun to partial shade",
        "picture": "https://www.pexels.com/search/tulip/"
    },
    "daisy": {
        "description": "Daisies are hardy and grow in a variety of environments, from fields to gardens.",
        "location": "Fields or gardens",
        "care": "Regular deadheading to promote blooming",
        "picture": "https://www.pexels.com/search/daisy/"
    },
    "carnation": {
        "description": "Carnations are popular in bouquets and thrive in well-drained soil.",
        "location": "Gardens or pots",
        "care": "Regular pruning and deadheading",
        "picture": "https://www.pexels.com/search/carnation/"
    },
    "daffodil": {
        "description": "Daffodils are early spring bloomers and require well-drained soil and partial shade.",
        "location": "Gardens or flower beds",
        "care": "Plant bulbs in the fall for spring blooms",
        "picture": "https://www.pexels.com/search/daffodil/"
    },
    "hyacinth": {
        "description": "Hyacinths are known for their fragrant blooms and prefer full sun to partial shade.",
        "location": "Gardens or pots",
        "care": "Plant bulbs in the fall and provide adequate moisture",
        "picture": "https://www.pexels.com/search/hyacinth/"
    },
    "peony": {
        "description": "Peonies are perennial favorites with large, showy blooms and thrive in full sun.",
        "location": "Gardens",
        "care": "Provide support for tall varieties and deadhead spent blooms",
        "picture": "https://www.pexels.com/search/peony/"
    }
}




app.get('/api/:name', (request, response) => {
    const userInput = request.params.name.toLowerCase()
    if (flowers.hasOwnProperty(userInput)) {
        const pictureURL = flowers[userInput]['picture']
        if (pictureURL) {
            response.setHeader('Location', pictureURL);
            response.status(302).end(); // 302 Found (Redirect) status
        }
        else {
            response.status(404).json({ error: "Picture not found for the flower." });
        }
    } else {
        response.status(404).json({ error: "Please enter a valid flower." });
    }

});

app.listen(PORT, () => {
    console.log(`The server is now running on ${PORT}`)
})