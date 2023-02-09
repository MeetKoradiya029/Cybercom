//Array Methods:-
//every()
//filter()
//forEach()
//indexOf()
//find()
//findIndex
//map()
//reduce()
//reduceRight()
//reverse()
//slice()
//splice()
//some()
//sort()

const cars = ["Thar", "Fortuner", "Safari", "Nexon", "xuv700"];
const bikes = ["ktm", "bullet", "hornet"];

document.getElementById("cars").innerHTML = cars.toString();

// document.getElementById("car").innerHTML=cars.join(" ");

document.getElementById("car").innerHTML = cars.concat(bikes);
cars.concat("Nexon");

cars.push("scorpio");
cars.pop();

console.log(cars[0]);
console.log(cars);
console.log(cars.length);

//every()
const num = [5, 42, 20, 14, 32, 48];
function check(current){
    return current<50
}
console.log(
  "every method:-" +
    num.every(check)
);

//filter()
const age = [16,15,22,20,21,25];
function checkAge(current){
    return current>18
}
console.log("filter() method"+" :-"+age.filter(checkAge))

//forEach()
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach( fruit => {
  let Article = '';
  if (fruit[0] === 'a' || fruit[0] === 'e' || fruit[0] === 'i' || fruit[0] === 'o' || fruit[0] === 'u') {
    Article = 'an';
  } 
  //else if (fruit[0] === 'h'&& fruit[1] ===) { }
  else {
    Article = 'a';
  }
  console.log(`I want to eat ${Article} ${fruit}`);
});

//indexOf();
console.log("indexOf():- "+fruits.indexOf("pineapple",1))

//find():
const obj = ["abc",'xyz','op','dj']
  
console.log("find()  "+obj.find(function(current,index)=>{
  
}));