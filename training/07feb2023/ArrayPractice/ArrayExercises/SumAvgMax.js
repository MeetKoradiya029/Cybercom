const num = [1,5,6,22,5,7];
let sum=0
let i=0
let avg=0
for(let i in num){
    sum+=num[i];
    
}
avg=sum/num.length

console.log("Sum : "+sum);
console.log("Avg : "+parseInt(avg));