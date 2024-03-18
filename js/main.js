const API__URL = "https://dummyjson.com/products"
const wrapper = document.querySelector(" .wrapper")
const loading = document.querySelector(".loading")

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

function createCard(data) {
  data.forEach(({ title, images, price, id, brand,rating,discountPercentage }) => {
    let card = document.createElement("div");
    card.classList.add("wrapper__card");
    card.innerHTML = `
    <div class="wrapper__card__top">
      <img src="${images[0]}" alt="${brand}">
    </div>
    <div class="wrapper__card__button">
      <p class="rating">${rating}</p>
      <h3>${title}</h3>
      <span>
      <p class="price">${price}$ </p>
      <p class="discount">${discountPercentage}% </p>
      </span>
    </div>
    `;
    

    card.addEventListener("click", () => singleRoute(id));
    
    wrapper.appendChild(card);
  });
}

function singleRoute(id) {
    window.open(`/single.html?id=${id}`, "_self")
}