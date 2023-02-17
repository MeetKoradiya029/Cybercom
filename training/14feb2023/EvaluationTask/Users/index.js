let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let birthDate = document.getElementById("birth_date").value;

let today = new Date();
let currentYear = today.getFullYear();
let dob = new Date(birthDate);
let age = currentYear - dob.getFullYear();

let data = JSON.parse(localStorage.getItem("Users"));

let userDet = document.getElementById("usrDetails");

if (data && data.length > 0) {
  for (let i = 0; i < data.length; i++) {
    let row = userDet.insertRow(userDet.rows.length);

    row.insertCell(0).innerHTML = data[i].name;
    row.insertCell(1).innerHTML = data[i].email;
    row.insertCell(2).innerHTML = data[i].password;
    row.insertCell(3).innerHTML = data[i].birthDate;
    row.insertCell(4).innerHTML = data[i].age;
    row.insertCell(
      5
    ).innerHTML = `<button onclick="editUser(${i})">Edit</button><button onclick="deleteUser(${i})">delete</button>`;
  }
}

/* ------------Add Users And Validate all fields-----------*/
function addUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let birthDate = document.getElementById("birth_date").value;
  let error = document.getElementById("errorMsg");

  let rx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let flag = true;

  if (name.length < 3) {
    error.textContent = "name must be minimum of 3 characters";
    flag = false;
    return flag;
  } else if (!email.match(rx)) {
    error.textContent = "invalid Email!";
    flag = false;
    return flag;
  } else if (password.length < 8) {
    error.textContent = "password minimum length is 8";
    flag = false;
    return flag;
  }

  let today = new Date();

  let currentYear = today.getFullYear();

  let dob = new Date(birthDate);
  let age = currentYear - dob.getFullYear();
  let userDet = document.getElementById("usrDetails");

  let row = userDet.insertRow(userDet.rows.length);

  row.insertCell(0).innerHTML = name.value;
  row.insertCell(1).innerHTML = email;
  row.insertCell(2).innerHTML = password;
  row.insertCell(3).innerHTML = birthDate;
  row.insertCell(4).innerHTML = age;
  row.insertCell(
    5
  ).innerHTML = `<button onclick="editUser()" >Edit</button><button onclick="deleteUser()">delete</button>`;

  let users = JSON.parse(localStorage.getItem("Users"));

  console.log(users);

  if (users && users.length > 0) {
    let data = {
      name: name,
      email: email,
      password: password,
      birthDate: birthDate,
      age: age,
    };

    users.push(data);

    localStorage.setItem("Users", JSON.stringify(users));
    location.reload();
  } else {
    let data = {
      name: name,
      email: email,
      password: password,
      birthDate: birthDate,
      age: age,
    };

    localStorage.setItem("Users", JSON.stringify([data]));
    location.reload();
  }

  return flag;
}

/*FUnction for go to dashboard*/
function dash() {
  window.location.assign("../Dashboard/index.htm");
}

/*function to fill data into fields of current user*/
function editUser(i) {
  let users = JSON.parse(localStorage.getItem("Users"));

  let usr = users[i];
  document.getElementById("edit-btn").innerHTML = "Update User";
  document.getElementById("name").value = usr.name;
  document.getElementById("email").value = usr.email;
  document.getElementById("password").value = usr.password;
  document.getElementById("birth_date").value = usr.birthDate;
  const addBtn = document.getElementById("add-btn");
  const editBtn = document.getElementById("edit-btn");
  addBtn.classList.add("d-none");
  editBtn.classList.remove("d-none");
  editBtn.addEventListener("click", (e) => {
    updateUser(i);
  });
}

/*-------------Update user data--------------*/
function updateUser(i) {
  let data = JSON.parse(localStorage.getItem("Users"));
  console.log(data);
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let birthDate = document.getElementById("birth_date").value;

  const addBtn = document.getElementById("add-btn");
  const editBtn = document.getElementById("edit-btn");
  addBtn.classList.remove("d-none");
  editBtn.classList.add("d-none");

  console.log(name);
  data[i].name = name;
  data[i].email = email;
  data[i].password = password;
  data[i].birthDate = birthDate;

  localStorage.setItem("Users", JSON.stringify(data));
}

/*-----------------Delete users--------------------*/

function deleteUser(i) {
  let data = JSON.parse(localStorage.getItem("Users"));
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let birthDate = document.getElementById("birth_date").value;
  // debugger;
  data.splice(i, 1);

  localStorage.setItem("Users", JSON.stringify(data));
  location.reload();
}

let loggedinUser = JSON.parse(sessionStorage.getItem("loggedinUser"));

if(!loggedinUser){
        window.location.assign("../Login/login.htm");
}

console.log(loggedinUser);
document.querySelector("#label").textContent = loggedinUser;