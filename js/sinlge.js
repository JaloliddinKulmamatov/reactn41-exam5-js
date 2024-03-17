const API__URL = "https://dummyjson.com/products"
const loading = document.querySelector(".loading")
const productCard = document.querySelector(".main__products");

async function fetchData(api) {
    let data = await fetch(api)
    data 
    .json()
    .then(res => (res))
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
    console.log(product.images);
    let {image} = product
    productCard.src = image
    productCard.innerHTML = `
    <div>
      <img src="${product.images[0]}" alt="abc">
    </div>
    
    `
}



