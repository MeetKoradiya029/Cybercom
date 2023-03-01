function logout() {



    sessionStorage.clear();
    window.location.assign("../../Login/login.htm");



  }

  let session = JSON.parse(sessionStorage.getItem("userLog"));

  if(!session){
    window.location.assign("../../Login/login.htm")
  }