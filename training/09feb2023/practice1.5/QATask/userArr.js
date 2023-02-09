userArr = [
    {
        user:{
            name:"abc",
            age:22,
            education:{
                degree:{
                    field:"BE",
                    college:"Gec Bhavnagar"
                }
            }
        }
    },
    {
        user:{
            name:"xyz",
            age:22,
            education:{
                degree:{
                    field:"BE",
                    college:"Gec Bhavnagar"
                }
            }
        }
    }
]


var userTable = document.getElementById("userData");


for(let i=0;i<userArr.length;i++){
    var row = userTable.insertRow()
    row.insertCell(0).innerHTML=userArr[i].user.name;
    row.insertCell(1).innerHTML=userArr[i].user.age;
    row.insertCell(2).innerHTML=userArr[i].user.education.degree.field; 

}

