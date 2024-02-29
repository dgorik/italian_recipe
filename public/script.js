
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const flower = document.querySelector('input').value
    try {
        const response = await fetch(`https://group-flower-pics.onrender.com/api/${flower}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#about').style.display = 'flex'
        document.querySelector('img').src = data.picture
        document.querySelector('#about').innerText = data.description
    } catch (error) {
        console.log(error)
    }
}