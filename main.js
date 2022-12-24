// retrive the element from the DOM
const searchkey = document.getElementById('searchkey')
const searchbtm = document.getElementById('searchbtm')
const cardrow = document.getElementById('cardrow')
const smartphone = document.getElementById('smartphone')
const laptop = document.getElementById('laptop')



// adding search event
searchbtm.addEventListener("click", getData);


function getData() {
    event.preventDefault()
    fetch(`https://dummyjson.com/products/search?q=${searchkey.value}`)
        .then((response) => response.json())
        .then((data) => {
            let listItems = ''
            for (let index = 0; index < data.products.length; index++) {

                // create product card
                const card = `
                <div class="col">
                                <div class="card shadow-sm">
                                <img src="${data.products[index].thumbnail}" />
                                <b>${data.products[index].title}</b>

                                    <div class="card-body">
                                        <p class="card-text">${data.products[index].description}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                                            </div>
                                            <small class="text-muted">${data.products[index].price} $</small>
                                        </div>
                                    </div>
                                </div>
                                </div>`
                listItems += card
            }

            cardrow.innerHTML = listItems

        });




}

smartphone.addEventListener("click", getsmartphone);



function getsmartphone() {
    event.preventDefault()
    fetch(`https://dummyjson.com/products/category/smartphones`)
        .then((response) => response.json())
        .then((data) => {
            let listItems = ''
            for (let index = 0; index < data.products.length; index++) {

                // create product card
                const card = `
                    <div class="col">
                                    <div class="card shadow-sm">
                                    <img src="${data.products[index].thumbnail}" />
                                    <b>${data.products[index].title}</b>
    
                                        <div class="card-body">
                                            <p class="card-text">${data.products[index].description}</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                                                </div>
                                                <small class="text-muted">${data.products[index].price} $</small>
                                            </div>
                                        </div>
                                    </div>
                                    </div>`
                listItems += card
            }

            cardrow.innerHTML = listItems









        })


}
laptop.addEventListener("click", getlaptop);


function getlaptop() {
    event.preventDefault()
    fetch(`https://dummyjson.com/products/category/laptops`)
        .then((response) => response.json())
        .then((data) => {
            let listItems = ''
            for (let index = 0; index < data.products.length; index++) {

                // create product card
                const card = `
                    <div class="col">
                                    <div class="card shadow-sm">
                                    <img src="${data.products[index].thumbnail}" />
                                    <b>${data.products[index].title}</b>
    
                                        <div class="card-body">
                                            <p class="card-text">${data.products[index].description}</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                                                </div>
                                                <small class="text-muted">${data.products[index].price} $</small>
                                            </div>
                                        </div>
                                    </div>
                                    </div>`
                listItems += card
            }

            cardrow.innerHTML = listItems









        })


}




