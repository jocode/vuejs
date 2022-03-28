import axios from 'axios'

const API_KEY = "stUiUCT3osfIPnOjpScNgsyxM76qpe1g";

const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: API_KEY,
    }
})

export default giphyApi

/* giphyApi.get('/random').then((response) => {

    const {data} = response.data
    console.log(data)
    const {url} = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)

    console.log(url)
}) */