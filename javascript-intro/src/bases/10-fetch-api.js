const API_KEY = "stUiUCT3osfIPnOjpScNgsyxM76qpe1g";

const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

fetch(endpoint)
.then((response) => response.json())
.then(({data}) => {
    const {url} = data.images.original
    console.log(url)

    const image = document.createElement('img')
    image.src = url
    document.body.append(image)
})
.catch((error) => console.log(error))