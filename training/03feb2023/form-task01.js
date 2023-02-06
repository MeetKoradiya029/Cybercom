let toggle = document.getElementsByName("radio");
let d_none = document.querySelector(".after-yes");

let toggle02 = document.getElementsByName("radio02");
let d_none02 = document.querySelector(".div02");


toggle.forEach(input =>{
    input.addEventListener('change',(e)=>{
        d_none.classList.toggle("d-none");
    })
})
toggle02.forEach(input =>{
    input.addEventListener('change',(e)=>{
        d_none02.classList.toggle("d-none");
    })
})

function addData(){
    var table = document.getElementById("table");

    var p_name = document.getElementById('p-name').value;
    var birth_date = document.getElementById('dob').value;
    var rel_plan = document.getElementById('plan').value;
    var total_charge = document.getElementById("total-charge").value;

    var rowOrder = table.rows.length; 
    var row = table.insertRow(rowOrder);

    row.insertCell(0).innerHTML=p_name;
    row.insertCell(1).innerHTML=birth_date;
    row.insertCell(2).innerHTML=rel_plan;
    row.insertCell(3).innerHTML=total_charge;

    row.style="text-align:center"

}