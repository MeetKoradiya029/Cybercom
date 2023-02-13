const validation = () => {
  let fName = document.getElementById("firstname").value;
  let lName = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;

  let Mailregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let mobileRegex =
    /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;

  return new Promise((resolve, reject) => {
    
         
      if (fName == ""|| lName=="") {
        alert("first name and last name and last name is required !");
        reject("First name and last name is requuired")
      } else if (!email.match(Mailregex)) {
        alert("Invalid Email");
        reject("enter valid email")
      } else if (!mobile.match(mobileRegex)) {
        alert("Enter correct mobile number");
        reject("Enter valid mobile number")
      } else {
        // console.log("validation completed")
        resolve("validation complted.")
        
      }

  });
};


function test(){
    validation().then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err)
    });
}
