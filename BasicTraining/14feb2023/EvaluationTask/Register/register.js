function validate() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let rePass = document.getElementById("rePass").value;
  let city = document.getElementById("cities").value;
  let state = document.getElementById("states").value;
  let tc = document.getElementById("terms");
  let rx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let flag = true;

  if (!name) {
    showErros("name", "please enter name");
    flag = false;
    return flag;
  } else if (name.length < 3) {
    showErros("name", "minimum 3 characters required");
    flag = false;
    return flag;
  } else if (!email) {
    showErros("email", "please enter email");
    flag = false;
    return flag;
  } else if (!email.match(rx)) {
    showErros("email", "invalid email");
    flag = false;
    return flag;
  } else if (!password) {
    showErros("pass", "please enter password");
    flag = false;
    return flag;
  } else if (password.length < 8) {
    showErros("pass", "minimum 8 character is required");
    flag = false;
    return flag;
  } else if (password != rePass) {
    showErros("rePass", "password doesn't match");
    flag = false;
    return flag;
  } else if (!city) {
    showErros("cities", "please select city");
    flag = false;
    return flag;
  } else if (!state) {
    showErros("states", "please select state");
    flag = false;
    return flag;
  } else if (!tc.checked) {
    showErros("terms", "agree terms & conditions");
    flag = false;
    return flag;
  }

  //---->------>------>------>------>------>------>------>------>------>

  let userData = JSON.parse(localStorage.getItem("adminUser"));

  // userData.split("");
  console.log("type of userData: " + typeof userData);
  console.log("userData" + userData);

  if (userData && userData.length > 0) {
    for (let i = 0; i < userData.length; i++) {
      let userEmail = userData.find((m) => m.email == email);
      if (!userEmail) {
        let data = {
          name: name,
          email: email,
          pass: password,
          city: city,
          state: state,
        };

        userData.push(data);
        localStorage.setItem("adminUser", JSON.stringify(userData));
        alert("Registration Complete!");
        window.location.assign("../Login/login.htm");
      } else {
        showErros("email", "user already exists!!");
        flag = false;
        return flag;
      }
    }
  } else {
    let data = {
      name: name,
      email: email,
      pass: password,
      city: city,
      state: state,
    };
    alert("registration complete!!");
    localStorage.setItem("adminUser", JSON.stringify([data]));
  }
  let session ={
    name:name,
  }
  debugger
  
 


  return flag;
}

function showErros(Id, msg) {
  let showErr = document.getElementById(Id + "Err");
  showErr.textContent = msg;
}
