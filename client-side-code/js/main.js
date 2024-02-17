document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const flower = document.querySelector('input').value
    try {
        const response = await fetch(`https://flower-pic-api-84ec7897eff7.herokuapp.com/api/${flower}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.location
    } catch (error) {
        console.log(error)
    }
}