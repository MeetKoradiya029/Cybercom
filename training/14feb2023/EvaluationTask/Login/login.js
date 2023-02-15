function validate() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let rx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let flag = true;

  if (!email) {
    let err = document.getElementById("errorMail");
    err.innerHTML = "please enter email !";
    flag = false;
    return flag;
  } else if (!email.match(rx)) {
    let e = document.getElementById("errorMail");
    e.innerHTML = "Invalid Email";
    flag = false;
    return flag;
  } else if (!password) {
    let ePass = document.getElementById("errorPass");
    ePass.innerHTML = "Please enter password !!";
    flag = false;
    return flag;
  } else if (password.length < 8) {
    let errPass = document.getElementById("errorPass");
    errPass.innerHTML = "minimum 8 characters required";
    flag = false;
    return flag;
  }

  let userData = JSON.parse(localStorage.getItem("adminUser"));

  if (userData && userData.length > 0) {
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email == email && userData[i].pass == password) {
        alert("login successfull");
        localStorage.setItem("loggedinUser", JSON.stringify(userData[i].name));
        window.location.assign("../Dashboard/index.htm");
        flag = true;
        return flag;
      } else {
        let header = document.getElementById("label");
        header.textContent = "invalid user";
      }
    }
  } else {
    alert("User doesn't exists !!");
    flag = false;
    return flag;
  }
  let normalUser = JSON.parse(localStorage.getItem("Users"));

  if(normalUser&&normalUser.length>0){
    
  }

  return flag;
}

function check() {
  if (validate) {
    redirect();
  }
}

function redirect() {
  window.location.assign("../Register/register.htm");
}
