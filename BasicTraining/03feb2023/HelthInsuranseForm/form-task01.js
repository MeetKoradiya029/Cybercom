let toggle = document.getElementsByName("radio");
let d_none = document.querySelector(".after-yes");

let toggleSecond = document.getElementsByName("radio02");
let d_none02 = document.querySelector(".div02");


toggle.forEach(input =>{
    input.addEventListener('change',(e)=>{
        d_none.classList.toggle("d-none");
    })
})
toggleSecond.forEach(input =>{
    input.addEventListener('change',(e)=>{
        d_none02.classList.toggle("d-none");
    })
})

function addData(){
    var table = document.getElementById("table");

    var patientName = document.getElementById('p-name').value;
    var birthDate = document.getElementById('dob').value;
    var relPlan = document.getElementById('plan').value;
    var totalCharge = document.getElementById("total-charge").value;

    var rowOrder = table.rows.length; 

    if(rowOrder >=0 && rowOrder!=undefined){
        var row = table.insertRow(rowOrder);
    }
    

    row.insertCell(0).innerHTML=patientName;
    row.insertCell(1).innerHTML=birthDate;
    row.insertCell(2).innerHTML=relPlan;
    row.insertCell(3).innerHTML=totalCharge;

    row.style="text-align:center"

}