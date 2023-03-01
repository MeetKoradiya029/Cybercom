Array = [
    {
        id:"1",
        name: "John",
        age:"10"
    },
    {
        id:"2",
        name: "doe",
        age:"40"
    },
    {
        id:"3",
        name: "Kathy",
        age:"29"
    }
]

function check(){
    let age = document.getElementById("num").value;
    let show = document.getElementById("main");
    let count=0;

    Array.forEach(element => {
        if(element.age>age){
            count++
        }

    });

    show.innerHTML=count;
    return count
}
    