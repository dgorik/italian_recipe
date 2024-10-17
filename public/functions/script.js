
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    
    const menu_item = document.querySelector('input').value.toLowerCase()

    try {
        const response = await fetch(`/.netlify/functions/server/${menu_item}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('#about').style.display = 'flex'
        document.querySelector('#item_description').style.display = 'flex'
        //document.querySelector('img').src = data.description
        data.ingredients != undefined 
            ? document.querySelector('#about').innerText = "Ingredients: " + data.ingredients
            : document.querySelector('#about').innerText = "Ingredients: " + " Oops, snafu... make sure you spelled the meal correcty:)"
        data.description != undefined 
            ? document.querySelector('#item_description').innerText  = "Item Description: "  + data.description 
            : document.querySelector('#item_description').innerText = "Item Description: " + " Oops, snafu... make sure you spelled the meal correcty:)"
    } catch (error) {
        console.log(error)
        document.querySelector('#about').innerText = error.message
    }
}