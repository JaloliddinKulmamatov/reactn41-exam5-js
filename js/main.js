const API__URL = "https://api.escuelajs.co/api/v1/products"
const wrapper = document.querySelector("main .wrapper")
const loading = document.querySelector(".loading")

async function fetchData(api) {
    let data = await fetch(api)
    data 
    .json()
    .then(res => createCard(res))
    .catch(err => console.log(err))
    .finally(() => {
        loading.style.display = "none"
    })
}
fetchData(API__URL)

function createCard(data) {
    data.forEach(({title,images,price,id}) => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <h3>${title}</h3>
        <img src="${JSON.parse(images)[0]}" alt="">
        <p>${price}</p>
        `
        card.addEventListener("click",() => singleRoute(id))
        wrapper.appendChild(card)
    });
}

function singleRoute(id) {
    window.open(`/pages/products.html?id=${id}`, "_self")
}