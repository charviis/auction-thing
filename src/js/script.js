const ITEMS_CONTAINER = document.getElementById("items-container");

addItems(DATA);

function addItems(json) {
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            addItem(json[key]);
        }
    }
}

function addItem(data) {
    itemElement = document.createElement("div");
    itemElement.className = "item";
    itemElement.innerHTML = `
        <img class="item-image" src="${data["image"]}">
        <h3 class="item-name">${data["name"]}</h3>
        <p class="item-description">${data["description"]}</p>
        <p class="item-author">${data["author"]}</p>
        </img>
    `
    ITEMS_CONTAINER.appendChild(itemElement);
}