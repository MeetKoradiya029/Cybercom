function validate() {
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let reEmail = document.getElementById("email02").value;
  let pass = document.getElementById("password").value;
  let rePass = document.getElementById("password02").value;
  let birthDate = document.getElementById("dateofbirth").value;
  let gender = document.getElementById("gender").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let contact = document.getElementById("phone").value;

  var formData = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    password: pass,
    gender: gender,
    dateofbirth: birthDate,
    contact_no: contact,
    state: state,
    city: city,
    address: address,
  };

  // let form  = document.forms['myform']['firstname'].value
  // console.log(form)
  //Email validation:
  var rx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email != "" || !email.match(rx)) {
    alert("Invalid email address!");
  }else if(email !== reEmail) {
    alert("email doesn't match");
  }else if (pass !== rePass) {
    alert("Entered Password doesn't match");
  }else{
    console.log("validation complete !")
  }

  localStorage.setItem("formData", JSON.stringify(formData));

  if(localStorage.getItem("formData")){
    let data  = JSON.parse(localStorage.getItem("formData"))
    console.log(data)
  }
  // storedData.push(JSON.parse(localStorage.getItem("formData")))  
 
 return

}





