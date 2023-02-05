function validate() {
  let email = document.getElementById("email").value;
  let re_email = document.getElementById("email02").value;
  let pass = document.getElementById("password").value;
  let re_pass = document.getElementById("password02").value;
  


  var formData = [email,re_email,pass,re_pass];


  //Email validation:
  var rx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(rx)) {
    alert("Valid email address!");
  
  } else {
    alert("Invalid email address!");
  
  }
  if (email !== re_email) {
    alert("email doesn't match");
  }
  
  //Password validation:
  if(pass!==re_pass){
    alert("Entered Password doesn't match");
  
  }





    localStorage.setItem("formData",JSON.stringify(formData));

    var storedData = localStorage.getItem("formData");

    console.log(storedData);


  


 return true;

}

function selector(){
  let select_state = document.getElementById("state").value;
  let cities = document.querySelectorAll("optgroup")

  cities.forEach(element => {
    if(element.id != select_state){
      element.style.display="none"
    }
  });
  

  console.log(select_state);
}
  




