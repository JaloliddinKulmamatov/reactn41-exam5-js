const API__URL = "https://dummyjson.com/products"
const loading = document.querySelector(".loading")
const productCard = document.querySelector(".product-card");

async function fetchData(api) {
    let data = await fetch(api)
    data 
    .json()
    .then(res => createCard(res.products))
    .catch(err => console.log(err))
    .finally(() => {
        loading.style.display = "none"
    })
}
fetchData(API__URL)

async function fetchSinglePage(api) {
    let parmas = new URLSearchParams(window.location.search)
    let id = parmas.get("id")

    let data = await fetch(`${api}/${id}`)
    data 
        .json()
        .then(res => singularUser(res))
        .catch(res => console.log("eror",res))
}
fetchSinglePage(API__URL)

function singularUser(product) {
    console.log(product);
    let {image} = product
    productCard.src = image
}



