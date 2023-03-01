function validate(callback) {
  let fName = document.getElementById("firstname").value;
  let lName = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;

  let Mailregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let mobileRegex =
    /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
  setTimeout(() => {
    callback();
  }, 5000);

  let show = (document.getElementById("valid").innerHTML =
    "validation Started !!!");

  if (fName.length < 3 || lName.length < 3) {
    alert("first name and last name should be minimum of 3 characters!");
  }
  if (!email.match(Mailregex)) {
    alert("Invalid Email");
  }
  if (!mobile.match(mobileRegex)) {
    alert("Enter correct mobile number");
  }
}
function display() {
  let show = (document.getElementById("valid").innerHTML =
    "validation completed");
  console.log("validated");
}
