function userPage() {
  window.location.assign("../Users/index.htm");
}
function dash() {
  window.location.assign("../Dashboard/index.htm");
}
function logout() {

        let data = JSON.parse(sessionStorage.getItem("userLog"));

        sessionStorage.clear();
        window.location.assign("../Login/login.htm");

}

let session = JSON.parse(sessionStorage.getItem("userLog"));

if(!session){
        window.location.assign("../Login/login.htm");
}


let data = JSON.parse(localStorage.getItem('Users'));
let counter=0

        for(let i=0;i<data.length;i++){
                if(data[i].age<18){
                        counter++
                }
        }
        

console.log(counter);
console.log(name)

// document.querySelector("#loggedInUser").textContent = loggedinUser;
