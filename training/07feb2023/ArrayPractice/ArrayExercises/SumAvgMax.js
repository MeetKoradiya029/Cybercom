const num = [1,5,6,22,5,7];
let sum=0
let i=0
let avg=0
for(let i in num){
    sum+=num[i];
    
}
avg=sum/num.length

var max=0;
var index;
for(i;i<num.length;i++){
    if(num[i]>num[max]){
        max=i
    }
}
console.log("max:"+num[max])

console.log("Sum : "+sum);
console.log("Avg : "+parseInt(avg));