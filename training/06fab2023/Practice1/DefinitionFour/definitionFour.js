function validate() {
  // var select = document.getElementById("").value;
  var firstname = document.getElementById("firstName").value;
  var lastname = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var regexEmail = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
  var regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  // name validation:
  if (firstname.length < 3) {
    alert("first name should be minimum of 3 character");
  }

  if (lastname.length < 3) {
    alert("last name should be minimum of 3 character");
  }

  //email validation:
  if (email.length) {
    if (!email.match(regexEmail)) {
      alert("enter correct email");
    }
  } else {
    alert("enter your email id");
  }

  //password validation:

  if (password.length) {
    if (!(regexPassword.test(password))) {
      alert(
        "password must contains 8 characters, atleast one digit, one uppercase aplhabet and lowercase aplhabet, one  special character which includes !@#$%&*()-"
      );
    }
  }

  alert("form submitted successfully");
}
