// retrive the element from the DOM
const searchkey = document.getElementById('searchkey')
const searchbtm = document.getElementById('searchbtm')
const cardrow = document.getElementById('cardrow')



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
                                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
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


