function addItem(){
    var items = document.getElementById("items");

    var newItem = document.createElement("li");
    var textNode = document.createTextNode("Orange");
    newItem.appendChild(textNode);

    items.appendChild(newItem);

}

function removeItem(){
    var items = document.getElementById("items");


    if(items.hasChildNodes()){
        items.removeChild(items.children[0])
    }
}