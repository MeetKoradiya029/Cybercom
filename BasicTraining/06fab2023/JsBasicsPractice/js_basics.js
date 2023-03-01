function query_selector() {
  //query selector:
  var x = document.getElementById("id").querySelectorAll(".class");
  var y = document.getElementById("id").querySelector(".para1");

  x[1].innerHTML = "query selector all";
  y.innerHTML = "query selector";
}
//class list
function classlist() {
  var div = document.querySelector(".div01");

  div.classList.remove("d-none");
}

//class name and tag name:
function change() {
  //select by class name:
  var collection = document.getElementsByClassName("class");

  collection[0].innerHTML = "selected by class names";

  //select bt tag name:
  var collection2 = document.getElementsByTagName("p");

  collection2[2].innerHTML = "selected by tag name"; //modified element content

  //Modify element content:
  var text_content = (document.getElementById("txt_content").textContent =
    "modified!");
  console.log(text_content);
}

//insert adjecent html: 
function adjecent_html() {
  var p = document.getElementById("txt_content");
  let html = "<div>added</div>";
  p.insertAdjacentHTML("afterend", html);
  p.insertAdjacentHTML("afterbegin", html);
  p.insertAdjacentHTML("beforebegin", html);
  p.insertAdjacentHTML("beforeend", html);
}

var para = document.getElementById("para");
var attr = para.getAttribute("id");
para.setAttribute("name", "demopara");

console.log(attr);

//create element:
function create_element() {
  var main = document.getElementById("id");

  var newDiv = document.createElement("div");

  var div_data = document.createTextNode("created using append child");

  newDiv.appendChild(div_data);

  document.getElementById("id").appendChild(newDiv);

  
}

function remove_child(){
  var main = document.getElementById("id");
  main.removeChild("")
}
