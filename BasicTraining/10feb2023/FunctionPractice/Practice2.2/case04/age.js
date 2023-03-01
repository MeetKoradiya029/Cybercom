function calculateAge() {
  let birthDate = document.getElementById("dateofbirth").value;
  
  function age(birthDate) {
    let dob = new Date(birthDate);
    let birthYear = dob.getFullYear();
    let today = new Date();
   
    // console.log(today.getFullYear())

    if (birthDate == null || birthDate == "") {
      alert("Select birth date first");
    }

    let age = today.getFullYear()-birthYear;
    
    return age
   
  }
  var newP=document.createElement('p');
  newP.innerText=age(birthDate);
  document.body.appendChild(newP);

}
