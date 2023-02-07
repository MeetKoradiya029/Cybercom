var persons = [
    {
        name:'meet',
        phone:724021006
    },
    {
        name:'jeel',
        phone:9879949574
    },
    {
        name:'het',
        phone:'7284022004'
    }
]
var names=[]
for(var i=0;i<persons.length;i++){
    names.push(persons[i].name);
    console.log(persons[i])
}

document.getElementById("root").innerHTML=names;
