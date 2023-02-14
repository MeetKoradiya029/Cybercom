
function validate() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let rx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let flag = true;

    if(!email){
        let err = document.getElementById("errorMail")
        err.innerHTML = "please enter email !";
        flag = false
        return flag
    }else if(!email.match(rx)){
        let e = document.getElementById("errorMail")
        e.innerHTML = "Invalid Email"
        flag = false;
        return flag
    }else if(!password){
        let ePass = document.getElementById("errorPass")
        ePass.innerHTML = "Please enter password !!";
        flag = false
        return flag
    }else if(password.length<8){
        let errPass =document.getElementById("errorPass")
        errPass.innerHTML="minimum 8 characters required";
        flag = false
        return false
    }

    

    return flag

}

function check(){
   if(validate){
    redirect()
   }
}



function redirect() {
    window.location.assign("../Register/register.htm");
  }
  