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

  //Email validation:
  var rx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(rx)) {
    alert("Valid email address!");
  } else {
    alert("Invalid email address!");
  }
  if (email !== reEmail) {
    alert("email doesn't match");
  }

  //Password validation:
  if (pass !== rePass) {
    alert("Entered Password doesn't match");
  }

  localStorage.setItem("formData", JSON.stringify(formData));

  var storedData = localStorage.getItem("formData");

  console.log(storedData);

  return true;
}
