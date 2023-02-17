function validate() {
  // let name = document.getElementById("name").value;
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
    let user = userData.find((element) => {
      return element.email == email && element.pass == password;
    });
    console.log(user);
    if (user) {
      // let loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"));
      alert("login successfull");

      let session = JSON.parse(sessionStorage.getItem("userLog"));
      if(session && session.length>0){
        let sessionData = {
          email:email,
        }
        session.push(lsessionData)
        sessionStorage.setItem("userLog",JSON.stringify(session));
      }else{
        let sessionData = {
          email:email,
        }
        sessionStorage.setItem("userLog",JSON.stringify([sessionData]))
      }
      window.location.assign("../Dashboard/index.htm");
      flag=true;
      return flag;
    }
    // for (let i = 0; i < userData.length; i++) {
    //   if (userData[i].email == email && userData[i].pass == password) {
    //     alert("login successfull");
    //     sessionStorage.setItem("loggedinUser", JSON.stringify(userData[i].name));

    //     window.location.assign("../Dashboard/index.htm");
    //     flag = true;
    //     return flag;
    //   } else {
    //     let header = document.getElementById("label");
    //     header.textContent = "invalid user";
    //   }
    // }
  } else {
    alert("User doesn't exists !!");
    flag = false;
  }


  let normalUsers = JSON.parse(localStorage.getItem("Users"));

    if(normalUsers && normalUsers.length>0){

      let usr = normalUsers.find((element)=>{
        return element.email==email && element.password==password;
      })
      console.log(usr)

      if(usr){
        let loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"));
        let currentdate = new Date();
        let datetime =
        "login at : " +
        currentdate.getDay() +
        "/" +
        currentdate.getMonth() +
        "/" +
        currentdate.getFullYear() +
        " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();

        let session = JSON.parse(sessionStorage.getItem("userLog"));
        
        if (loggedinUser && loggedinUser.length > 0) {
          
          let loginData = {
            email: email,
            action: datetime,
          };
          loggedinUser.push(loginData);
          localStorage.setItem("loggedinUser", JSON.stringify(loggedinUser));
          if(session && session.length>0){
            session.push(loginData)
            sessionStorage.setItem("userLog",JSON.stringify(session));
          }else{
            sessionStorage.setItem("userLog",JSON.stringify([loginData]))
          }


        } else {
          let loginData = {
            email: email,
            action: datetime,
          };
          localStorage.setItem("loggedinUser", JSON.stringify([loginData]));
          if(session && session.length>0){
            session.push(loginData)
            sessionStorage.setItem("userLog",JSON.stringify(session));
          }else{
            sessionStorage.setItem("userLog",JSON.stringify([loginData]))
          }
        }
        alert("login successfull");
        window.location.assign("../Dashboard/subUserDesh/index.html");
        flag=true;
        return flag;

      }else{
        alert("User doesn't exists !!");
        flag = false;
        return flag;
      }
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
