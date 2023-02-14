// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://gorest.co.in/public/v2/users", true);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     console.log(xhr.responseText);
//   }
// };

// xhr.send();

// let post = new XMLHttpRequest();

// post.open("POST", "/public/v2/users/733/posts", true);
// // xhr.setRequestHeader("Content-Type", "application/json");

// post.onreadystatechange = function () {
//   if (post.readyState === XMLHttpRequest.DONE) {
    
//     console.log(post.responseText);
//   }
// };

// post.send(JSON.stringify({ name: "mkmk" }));

let user = {
    "name":'abc'
}

let options = {
    method:'GET',
    
}

fetch("https://gorest.co.in/public/v2/users",options)
.then(res=> res.json())
.then(data=>{
    console.log(data)
})