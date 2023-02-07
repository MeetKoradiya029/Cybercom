var user = { name: "meet", age: 21, address:"vastrapur" };

document.getElementById("user").innerHTML=JSON.stringify(user)
function Objects(user) {
    
    var obj = {name:this.user.name, age:this.user.age}

    console.log(obj);
    document.getElementById("person").innerHTML=JSON.stringify(obj);

}
