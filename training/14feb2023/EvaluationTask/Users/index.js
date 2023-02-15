function user_list() {
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
      row.insertCell(5).innerHTML = `<a href="">Edit</a><a href="">delete</a>`;
    }
  }
}
function addUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let birthDate = document.getElementById("birth_date").value;

  let rx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let flag
  if(name.length<3){
    
  }

  let today = new Date();

  let currentYear = today.getFullYear();

  let dob = new Date(birthDate);
  let age = currentYear - dob.getFullYear();
  let userDet = document.getElementById("usrDetails");

  let row = userDet.insertRow(userDet.rows.length);

  row.insertCell(0).innerHTML = name;
  row.insertCell(1).innerHTML = email;
  row.insertCell(2).innerHTML = password;
  row.insertCell(3).innerHTML = birthDate;
  row.insertCell(4).innerHTML = age;
  row.insertCell(5).innerHTML = `<a href="">Edit</a><a href="">delete</a>`;

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
  } else {
    let data = {
      name: name,
      email: email,
      password: password,
      birthDate: birthDate,
      age: age,
    };

    localStorage.setItem("Users", JSON.stringify([data]));
  }


  
}
function dash() {
  window.location.assign("../Dashboard/index.htm");
}
